
import React, { useEffect, useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { AppContext } from 'contexts';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
import { useQuery } from 'react-query';
import { useSnackbar } from 'notistack';
import { parseEther, parseUnits } from '@ethersproject/units'

import { gasFeeEstimation } from 'services/gasFeeEstimation';
import theme from 'styles/theme';
import InterCoinIcon from 'components/Icons/InterCoinIcon';
import ShuttleIcon from 'components/Icons/ShuttleIcon';
import OutlinedButton from 'components/UI/Buttons/OutlinedButton'
import TradingLoading from 'components/TradingLoading'
import PowerIcon from 'components/Icons/PowerIcon';
import GetToken from './GetToken';
import { FUND_CONTRACT_ADDRESS } from 'constants/contractAddress';
import { isEmpty } from 'utils/utility';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            paddingBottom: theme.spacing(12)
        },
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    stepperRoot: {
        backgroundColor: theme.palette.background.main,
        width: '100%',
        padding: 0
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        display: 'flex',
        justifyContent: 'center',
         width : '100%',
        marginTop: theme.spacing(1.5)
    },
    resetContainer: {
        padding: theme.spacing(3),
        backgroundColor: theme.palette.background.main,
    },
    commonButton: {
        [theme.breakpoints.down('sm')]: {
            minWidth: '100%'
        },
        backgroundColor: theme.palette.text.hoverText,

    }
}));

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: theme.palette.background.default,
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundColor: theme.palette.text.hoverText,
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
    },
    completed: {
        backgroundColor: theme.palette.text.hoverText
    },
});

const TokenService = () => {
    const classes = useStyles();
    const { account, setIsWalletDialog, active, library } = useContext(AppContext);
    const [stepLoading, setStepLoading] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const { enqueueSnackbar } = useSnackbar();

    const { data: { data: { estimates = {} } = {} } = {}, isLoading: loading } = useQuery(['gas-fee-estimation'],
        () => gasFeeEstimation());

    const [state, setState] = useState({
        itrAmount: '',
        currencyType: '',
        tMethod: ''
    });

    const getSteps = () => {
        return ['Get Started', 'Get the Tokens', 'Join the Community!'];
    }

    const steps = getSteps();

    const handleNext = (step) => {
        if (step) {
            setActiveStep(step)
        }
        else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const ColorlibStepIcon = (props) => {
        const classes = useColorlibStepIconStyles();
        const { active, completed } = props;

        const icons = {
            1: <PowerIcon style={{ width: 30, height: 30 }} />,
            2: <InterCoinIcon style={{ width: 40, height: 40 }} />,
            3: < ShuttleIcon style={{ width: 40, height: 31 }} />,
        };

        return (
            <div
                className={clsx(classes.root, {
                    [classes.active]: active,
                    [classes.completed]: completed,
                })}
            >
                {icons[String(props.icon)]}
            </div>
        );
    }

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return `You can just select your wallet.`;
            case 1:
                return <GetToken setState={setState} state={state} estimates={estimates} />
            case 2:
                return `Communities use the Intercoin Currency Kit to issue their own currency, and integrate it into their local
        Community Apps. Each community promotes their Community Coin internally to its members,
        until it is widely accepted in exchange for local goods and services. That network effect of
        being widely accepted is what makes the Community Coin valuable in the local community.
        `;
            default:
                return 'Unknown step';
        }
    }

    const getStepButtonName = (step) => {
        switch (step) {
            case 0:
                return `Connect My Wallet`;
            case 1:
                return 'Buy ITR Tokens';
            case 2:
                return `Create Account`;
            default:
                return 'Unknown step';
        }
    }

    const stepHandler = (step) => {
        setStepLoading(true);
        switch (step) {
            case 0:
                return setIsWalletDialog(true);
            case 1:
                return getITRTokens();
            case 2: createAccount();
        }
    }

    const getITRTokens = () => {
        if (isEmpty(state.itrAmount)) {
            enqueueSnackbar('The currency is not enough to get ITR!', { variant: 'error' });
            setStepLoading(false)
        }
        else {
            const Signer = library.getSigner();
            const gasPrice = parseUnits(`${estimates[`${state.tMethod}`]}`, "gwei").toHexString()
            Promise.resolve(Signer.sendTransaction({
                gasLimit: 200000,
                gasPrice: gasPrice,
                from: account,
                to: FUND_CONTRACT_ADDRESS,
                value: parseEther(state.itrAmount).toHexString()

            })).then(function (transaction) {
                setStepLoading(false)
                console.log(transaction)
                handleNext(2);
                enqueueSnackbar('The transaction has been successfully processed!', { variant: 'success' });
            }).catch(function (error) {
                console.log('pSigError===>', error)
                setStepLoading(false)
            })
        }
        // const parameters = [
        //   {
        //     gasLimit: "200000",
        //     gasPrice: parseUnits(`${estimates[`${state.tMethod}`]}`, "gwei").toHexString(),
        //     from: account,
        //     to: FUND_CONTRACT_ADDRESS,
        //     value: parseEther(state.itrAmount).toHexString(),
        //   }
        // ];
        // const payload = {
        //   method: "eth_sendTransaction",
        //   params: parameters,
        //   from: account
        // };

        // library.provider.sendAsync(payload, function (
        //   err,
        //   response
        // ) {
        //   if (err) {
        //     setStepLoading(false)
        //     enqueueSnackbar('Something went wrong', { variant: 'error' });
        //     console.log(err);
        //   } else {
        //     setStepLoading(false)
        //     enqueueSnackbar('The transaction has been successfully processed!', { variant: 'success' });
        //     handleNext(2);
        //     console.log(response.result);
        //   }
        // });
    }

    const createAccount = () => {
        setStepLoading(false);
        handleNext();
    }

    useEffect(() => {
        if (account && active === true) {
            setStepLoading(false)
            handleNext(1);
        }
    }, [account, active])

    return (
        <div className={classes.root}>
            <Stepper alternativeLabel activeStep={activeStep} classes={{ root: classes.stepperRoot }}>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>
                            <Typography variant='h6'>{`${index + 1}. `}{label}</Typography>
                        </StepLabel>
                        <StepContent style={{ border: 'none', width: '100%' }}>
                            {stepLoading && <TradingLoading wholeOverlay />}
                            <Typography component='div' variant='body1'>{getStepContent(index)}</Typography>
                            <div className={classes.actionsContainer}>
                                <OutlinedButton onClick={() => stepHandler(index)} className={classes.commonButton}>
                                    <InterCoinIcon variant='contained' style={{ width: 32, height: 32, marginRight: 12 }} />
                                    <Typography>{getStepButtonName(index)}</Typography>
                                </OutlinedButton>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography variant='h6'>All steps completed - you&apos;re successfully joined in the intercoin community!</Typography>
                </Paper>
            )}
        </div>
    );
};

export default TokenService;
