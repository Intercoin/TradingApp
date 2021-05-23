
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import GridTitle from 'components/GridTitle';

const useStyles = makeStyles(theme => ({
  root: props => ({
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 1.5, 0, 1.5),
    },
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: props.flexDirection ? 'row' : 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(2, 4, 0, 4),
  }),
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: theme.spacing(0),
    marginBottom: theme.spacing(0)
  }
}));

const CardWrapper = ({ children, title, buttonName, center, flexDirection, noPaddingTop }) => {
  const classes = useStyles({ flexDirection, noPaddingTop});

  return (
    <div className={classes.root}>
      <GridTitle
        center={center}
        title={title}
        buttonName={buttonName}
        noPaddingTop = {noPaddingTop}
        />
      {children}
    </div>
  );
};

export default CardWrapper;
