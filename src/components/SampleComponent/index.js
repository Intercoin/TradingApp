
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {}
}));

const SampleComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    </div>
  );
};

export default SampleComponent;
