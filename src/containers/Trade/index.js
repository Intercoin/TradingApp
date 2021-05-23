
import React, { useEffect, useContext } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from 'contexts';
import AOS from 'aos';
import Typography from '@material-ui/core/Typography';
import 'aos/dist/aos.css';

// import Section from 'hoc/Section';
// import SectionAlternate from 'hoc/SectionAlternate';
// import Hero from './Hero';
// import Partners from './Partners';
// import Customization from './Customization';
// import Support from './Support';
// import Download from './Download';
// import { integrations, support } from 'utils/helper/mockupData';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: `calc(100vh - ${theme.custom.layout.topAppBarHeight + theme.custom.layout.footerHeight}px)`,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Trade = () => {
  const classes = useStyles();
  const { setLoadingInfo, account } = useContext(AppContext);

  AOS.init({
    once: true,
    delay: 50,
    duration: 500,
    easing: 'ease-in-out',
  });

  return (
    <div className={classes.root}>
      <TradingViewWidget
        symbol="NASDAQ:AAPL"
        theme={Themes.DARK}
        locale="fr"
        autosize
      />
    </div>
  );
};

export default Trade;
