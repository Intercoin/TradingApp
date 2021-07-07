
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { useSnackbar } from 'notistack';

import AlarmOffIcon from 'components/Icons/AlarmOffIcon';
import CircleButton from 'components/UI/Buttons/CircleButton';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
}));

const AlertSetting = () => {
    const classes = useStyles();
    const [isSubScribe, setIsSubScribe] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const buttonClickHandler = () => {
        enqueueSnackbar('Trade subscribe status was changed!', { variant: 'success' });
        setIsSubScribe(!isSubScribe)
    }

    return (
        <div className={classes.root}>
            <Typography>Trade Alert subscribe</Typography>
            <CircleButton onClick={buttonClickHandler} style={{ backgroundColor: '#292C41', marginLeft: 4 }}
                icon={isSubScribe ? <NotificationsNoneIcon style={{ color: '#fff' }} fontSize='default' /> : <AlarmOffIcon style={{ color: '#fff' }} fontSize='default' />} />
        </div>
    );
};

export default AlertSetting;
