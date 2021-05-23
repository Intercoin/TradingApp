
import React, { useEffect, useState } from 'react';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector'
import { NoEthereumProviderError, UserRejectedRequestError as UserRejectedRequestErrorInjected } from '@web3-react/injected-connector'
import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from '@web3-react/frame-connector'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, useMediaQuery } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from "@material-ui/core/Grid";

import DialogWrapper, { dialogStyles } from 'hoc/DialogWrapper';
import WalletCard from 'components/UI/WalletCard';
import ContainedButton from 'components/UI/Buttons/ContainedButton';
import { Spinner } from 'components/UI/Spinner';
import { walletconnect, injected, fortmatic } from 'constants/connectors';

const useStyles = makeStyles(theme => ({
  actionButton: {
    backgroundColor: theme.custom.palette.darkRed,
    minWidth: theme.spacing(1),
    border: 'none'
  },
  dialogActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(3),
    marginRight: -theme.spacing(2 / 8)
  },
  titleLine: {
    marginBottom: theme.spacing(2.5)
  },
  fileDropZone: {
    height: 96,
    minHeight: 'unset'
  },
  dialogContent: {
    [theme.breakpoints.down(360)]: {
      maxHeight: '200px',
      padding: theme.spacing(0.5),
    },
    [theme.breakpoints.down('xs')]: {
      maxHeight: '382px',
      padding: theme.spacing(1, 0, 1, .5),
    },
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(1),
    maxHeight: '460px',
    width: 'auto',
    overflowX: 'unset',
    overflowY: 'scroll',
    '&::-webkit-scrollbar-track': {
      borderRadius: 2,
      backgroundColor: theme.palette.background.default
    },
    '&::-webkit-scrollbar': {
      width: 5,
      backgroundColor: theme.palette.background.default
    },
  },
  container: {
    [theme.breakpoints.down('sm')]: {
      padding: 0
    },
    display: 'flex',
    padding: `2px 8px 8px 8px`,
    margin: 0,
    flexGrow: 1,
  },
}));

const WalletModal = ({ open, onClose, headerTitle, activatingConnector, setActivatingConnector, triedEager, context }) => {
  const classes = useStyles();
  const theme = useTheme();
  const dialogClasses = dialogStyles();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true,
  });
  const [showMore, setShowMore] = useState(false)

  const getErrorMessage = (error) => {
    if (error instanceof NoEthereumProviderError) {
      return `No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.`
    } else if (error instanceof UnsupportedChainIdError) {
      return "You're connected to an unsupported network."
    } else if (
      error instanceof UserRejectedRequestErrorInjected ||
      error instanceof UserRejectedRequestErrorWalletConnect ||
      error instanceof UserRejectedRequestErrorFrame
    ) {
      return 'Please authorize this website to access your Ethereum account.'
    } else {
      console.error(error)
      return 'An unknown error occurred. Check the console for more details.'
    }
  }

  const connectorsByName = {
    // 'WalletConnect': walletconnect,
    'MetaMask': injected,
    'Fortmatic': fortmatic
  }

  const { connector, library, chainId, account, activate, deactivate, active, error } = context

  const metaMaskInstallHandler = () => {
    window.open('https://metamask.io/download', '_blank');
  }

  const onFormSubmit = async (ev) => {
    ev.preventDefault()
    onClose();
  }

  const showmoreHandler = () => {
    setShowMore(!showMore)
  }

  const walletSelectHander = (currentConnector) => {
    console.log('kevin currentConnector', currentConnector.constructor.name);
    setActivatingConnector(currentConnector);
    activate(currentConnector)
    // if (account) {
    //   localStorage.setItem(`${currentConnector.constructor.name}`, {account : account, connector : currentConnector.constructor.name});
    // }
    // onClose();
  }

  return (
    <DialogWrapper open={open} onClose={onClose}>
      <form onSubmit={onFormSubmit} >
        <div className={dialogClasses.root}>
          <Typography variant='h6' className={classes.titleLine}>{headerTitle}</Typography>
          <DialogContent dividers className={classes.dialogContent}>
            <Grid container spacing={2} className={classes.container} >
              {Object.keys(connectorsByName).filter((item, index) => index < (showMore ? Object.keys(connectorsByName).length : 4)).map(name => {
                const currentConnector = connectorsByName[name]
                const activating = currentConnector === activatingConnector
                const connected = currentConnector === connector
                const disabled = !triedEager || !!activatingConnector || connected || !!error
                console.log('kevin connected', connected)
                return (
                  <WalletCard
                    connected={connected}
                    disabled={disabled}
                    key={name}
                    name={name}
                    logoType={name}
                    activating={activating}
                    onClick={() => walletSelectHander(currentConnector)}>
                    <div
                      style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        color: 'black',
                        margin: '0 0 0 1rem'
                      }}
                    >
                      {activating && <Spinner color={'black'} style={{ height: '25%', marginLeft: '-1rem' }} />}
                    </div>
                    {name}
                  </WalletCard>
                )
              })}

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {(error instanceof NoEthereumProviderError) && (
                  <ContainedButton
                    style={{
                      height: '3rem',
                      marginTop: '2rem',
                      borderRadius: '1rem',
                      cursor: 'pointer',
                    }}
                    variant="outlined"
                    onClick={() => metaMaskInstallHandler()}
                  >
                    Install Metamask
                  </ContainedButton>
                )}
                {!!error && <h4 style={{ marginTop: '1rem', marginBottom: '0', color: '#16ACE2' }}>{getErrorMessage(error)}</h4>}
              </div>
            </Grid>
          </DialogContent>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {(active || error) && (
              <ContainedButton
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '2.5rem',
                  marginTop: '1rem',
                  borderRadius: '1rem',
                  borderColor: 'red',
                  cursor: 'pointer',
                  color: 'textSecondary'
                }}
                onClick={() => {
                  deactivate()
                }}
              >
                Disconnect
              </ContainedButton>
            )}
          </div>
          {connectorsByName.length > 4 ?
            <div className={classes.dialogActions}>
              <ContainedButton
                style={{
                  borderRadius: '1rem',
                  cursor: 'pointer',
                }}
                variant="outlined"
                onClick={showmoreHandler}>
                {showMore ? 'Show less' : 'Show more'}
              </ContainedButton>
            </div> : null}
        </div>
      </form>
    </DialogWrapper>
  );
}

export default WalletModal;
