
import React, { useEffect, useContext } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from 'contexts';
import AOS from 'aos';
import { Grid, Typography } from '@material-ui/core';
import 'aos/dist/aos.css';

import Section from 'hoc/Section';
import AlertSetting from './AlertSetting'
// import SectionAlternate from 'hoc/SectionAlternate';
import Hero from './Hero';
import TokenService from './TokenService';
import Board from './Board';
// import Partners from './Partners';
// import Customization from './Customization';
// import Support from './Support';
// import Download from './Download';
// import { integrations, support } from 'utils/helper/mockupData';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Home = () => {
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

      <Section >
        <AlertSetting />
        <Hero />
      </Section>
      <Section>
        <Grid container style={{ height: 400 }}>
          <Grid item xs={12} md={6} >
            <TradingViewWidget
              symbol="NASDAQ:AAPL"
              theme={Themes.DARK}
              locale="fr"
              autosize
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TokenService />
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Board />
      </Section>
      {/* <GetToken /> */}
      {/* <Section>
        <Partners data={integrations} />
      </Section>
      <SectionAlternate>
        <Customization />
      </SectionAlternate>
      <Section narrow>
        <Support data={support} />
      </Section>
      <Section>
        <Download data={[]} />
      </Section> */}
    </div>
  );
};

export default Home;
