
import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { AppContext } from 'contexts';
import Hidden from '@material-ui/core/Hidden';
import CircleButton from 'components/UI/Buttons/CircleButton';

import Logo from 'components/Logo';
import { PAGES } from 'utils/links/pages';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      padding: 4,
    },
    display: 'flex',
    alignItems: 'center',
    // paddingRight: theme.spacing(2),
    '&:hover': {
      cursor: 'pointer'
    },
  },
  // logo: {
  // [theme.breakpoints.down('xs')]: {
  //   marginRight: theme.spacing(.2)
  // },
  //   marginRight: theme.spacing(1.5)
  // },
  height: {
    height: '100%'
  },
}));

const LogoWithTitle = ({ setOpen, history, logoWidth, logoHeight, titleVariant, className }) => {
  const classes = useStyles();
  const { setTopAppMenu } = useContext(AppContext);
  const onClickHander = () => {
    history.push(PAGES.HOME.url);
    // setTopAppMenu('');
    // setOpen(false)
  }

  return (
    <div className={clsx(classes.root, className)}>
      <CircleButton style={{ display: 'flex', backgroundColor: '#292C40' }} onClick={onClickHander} icon={<Logo className={classes.logo} width={logoWidth} height={logoHeight} />} />
      <Hidden mdDown implementation='css' className={classes.height}>
        <Typography color='textPrimary' variant={titleVariant}>
          Intercoin Trading
      </Typography>
      </Hidden>
    </div>
  );
};

export default withRouter(LogoWithTitle);
