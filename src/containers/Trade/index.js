
import React, { useEffect, useContext } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from 'contexts';
import AOS from 'aos';
import { Grid, Typography, Card, CardHeader, CardContent, CardActions } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import 'aos/dist/aos.css';

import OutlinedButton from 'components/UI/Buttons/OutlinedButton';
import { MemoizedOutlinedTextField } from 'components/UI/OutlinedTextField';
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
        // height: `calc(100vh - ${theme.custom.layout.topAppBarHeight + theme.custom.layout.footerHeight}px)`,
        height : '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    card: {
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        width: "100%",
        height: '100%',
        justifyContent: 'space-between',
        cursor: 'pointer',
        borderRadius: 20,
        borderColor: 'red',
        boxShadow: `0 1px 6px 0 ${theme.palette.text.notification}`,
        padding: theme.spacing(0.5)
    },
    cardHeader: {
        borderBottom: '0.2px solid #fff'
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        height: '100%'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'

    },
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
            <Grid container style={{ height: '100%', marginTop: 32 }} spacing={2} >
                <Grid container item xs={5} alignItems='flex-start'>
                    <TradingViewWidget
                        symbol="NASDAQ:AAPL"
                        theme={Themes.DARK}
                        locale="fr"
                        autosize
                    />
                </Grid>
                <Grid container item xs={3}>
                    <Card className={classes.card} >
                        <CardHeader
                            className={classes.cardHeader}
                            title={`Instruments`}>
                        </CardHeader>
                        <CardContent className={classes.cardContent}>
                            <ListItem>
                                <ListItemText primary={'Name'} />
                                <ListItemText primary={'Price'} />
                                <ListItemText primary={'Volume (BTC)'} />
                                <ListItemText primary={'Change'} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={'BTC/USDT'} />
                                <ListItemText primary={'33359.34'} />
                                <ListItemText primary={'10043.123'} />
                                <ListItemText style={{ color: 'red' }} primary={'-10.23%'} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={' ETH / I T R '} />
                                <ListItemText primary={'13359.34'} />
                                <ListItemText primary={'10043.123'} />
                                <ListItemText style={{ color: 'blue' }} primary={'+10.23%'} />
                            </ListItem>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid container item xs={2}>
                    <Card className={classes.card} >
                        <CardHeader
                            className={classes.cardHeader}
                            title={`Buy Intercoin`}>
                        </CardHeader>
                        <CardContent className={classes.cardContent}>
                            <Typography>Blance : 423 ITR </Typography>
                            <Typography>In Orders : </Typography>
                            <Typography>Total : </Typography>
                            <MemoizedOutlinedTextField
                                placeholder='Amount'

                            />
                            <MemoizedOutlinedTextField
                                placeholder='Price'
                                style={{ marginTop: 12 }}
                            />
                            <MemoizedOutlinedTextField
                                placeholder='Total'
                                style={{ marginTop: 12 }}
                            />
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 12 }}>
                                <Typography variant='subtitle2' color='textSecondary'> You will approximately pay</Typography>
                                <Typography>ETH</Typography>
                            </div>
                        </CardContent>

                        <CardActions classes={{ root: classes.cardActions }}>
                            <OutlinedButton color='blue'>
                                <Typography>Buy</Typography>
                            </OutlinedButton>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid container item xs={2}>
                    <Card className={classes.card} >
                        <CardHeader
                            className={classes.cardHeader}
                            title={`Sell Intercoin`}>

                        </CardHeader>
                        <CardContent className={classes.cardContent}>
                            <Typography>Blance : 423 ITR  </Typography>
                            <Typography>In Orders : </Typography>
                            <Typography>Total : </Typography>
                            <MemoizedOutlinedTextField

                                placeholder='Amount'
                            />
                            <MemoizedOutlinedTextField
                                placeholder='Price'
                                style={{ marginTop: 12 }}
                            />
                            <MemoizedOutlinedTextField
                                placeholder='Total'
                                style={{ marginTop: 12 }}
                            />
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 12 }}>
                                <Typography variant='subtitle2' color='textSecondary'> You will approximately pay</Typography>
                                <Typography>ETH</Typography>
                            </div>
                        </CardContent>
                        <CardActions classes={{ root: classes.cardActions }}>
                            <OutlinedButton color='red'>
                                <Typography>Sell</Typography>
                            </OutlinedButton>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid container item xs={6} style={{ height: 600 }}>
                    <Card className={classes.card} >
                        <CardHeader
                            className={classes.cardHeader}
                            title={`My Orders and Trades ITR/ETH`} />
                        <CardContent className={classes.cardContent}>
                            <ListItem>
                                <ListItemText primary={'Time(UTC)'} />
                                <ListItemText primary={'OrderID'} />
                                <ListItemText primary={'Price'} />
                                <ListItemText primary={'Total Amount(ITR)'} />
                                <ListItemText primary={'Avg.Price'} />
                                <ListItemText primary={'Total(ETH)'} />
                            </ListItem>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid container item xs={4}>
                    <Card className={classes.card} >
                        <CardHeader
                            className={classes.cardHeader}
                            title={`My Orders and Trades ITR/ETH`} />
                        <CardContent className={classes.cardContent}>
                            <ListItem>
                                <ListItemText primary={'Sum ITR'} />
                                <ListItemText primary={'Amount'} />
                                <ListItemText primary={'Bid'} />
                                <ListItemText primary={'Ask'} />
                                <ListItemText primary={'Amount'} />
                                <ListItemText primary={'Sum ITR'} />
                            </ListItem>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid container item xs={2}>
                    <Card className={classes.card} >
                        <CardHeader
                            className={classes.cardHeader}
                            title={`TrollBox / Chat history`} />
                        <CardContent className={classes.cardContent}>
                            <div style = {{display : 'flex', flexDirection : 'row'}}>
                                <Typography variant='subtitle1' color='secondary' noWrap style = {{marginRight : 4}}> AD : </Typography>
                                <Typography variant='subtitle2' > Wlecome to intercoing trading app </Typography>
                            </div>
                            <div style = {{display : 'flex', flexDirection : 'row'}}>
                                <Typography variant='subtitle2'  noWrap style = {{marginRight : 4, color : 'blue'}}> User : </Typography>
                                <Typography variant='subtitle2' > Would like to invest ITR </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Trade;
