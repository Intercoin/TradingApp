
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";

import { MemoizedOutlinedTextField } from 'components/UI/OutlinedTextField';
import { MemoizedOutlinedSelect } from 'components/UI/OutlinedSelect';
import { CURRENCY_TYPES } from 'constants/Types';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row'
    }
}));

const GetToken = ({ setState, state, estimates }) => {
    const classes = useStyles();

    const inputChangeHandler = useCallback(event => {
        const { name, value } = event.target;
        setState(prevState => ({
            ...prevState, [name]: value
        }));
    }, []);

    useEffect(() => {
        if (estimates) {
            setState({ itrAmount : '',currencyType: CURRENCY_TYPES[0], tMethod: Object.keys(estimates)[0] })
        }
    }, [estimates])

    const onSelectHandler = useCallback((value, name) => {
        setState(prevState => ({ ...prevState, [name]: value }));
    }, []);

    return (
        <div className={classes.root}>
            <Typography style={{ marginBottom: 8 }} variant='body1'>Enter the amount to buy : </Typography>
            <Grid container spacing={1} justify='space-between' >
                <Grid xs={6} item>
                    <MemoizedOutlinedTextField
                        placeholder='Amount'
                        name='itrAmount'
                        value={state.itrAmount || ''}
                        type='number'
                        onChange={inputChangeHandler}
                    />
                </Grid>
                <Grid xs={6} item>
                    <MemoizedOutlinedSelect
                        name='currencyType'
                        placeholder='Currency'
                        value={state.currencyType || ''}
                        items={CURRENCY_TYPES}
                        onChange={onSelectHandler}
                    />
                </Grid>
                <Grid xs={12} item>
                    <MemoizedOutlinedSelect
                        name='tMethod'
                        value={state.tMethod || ''}
                        items={Object.keys(estimates) || []}
                        onChange={onSelectHandler} />
                </Grid>
            </Grid>
        </div>
    );
};

export default GetToken;
