
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {}
}));

const Board = () => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid container item xs={6}>
            </Grid>
            <Grid container item xs={6}>
            </Grid>
        </Grid>
    );
};

export default Board;
