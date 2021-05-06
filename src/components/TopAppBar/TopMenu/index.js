
import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

import { AppContext } from 'contexts';
import TopAppBarLeft from './TopAppBarLeft';
import TopAppBarRight from './TopAppBarRight';

import { isEmpty } from 'utils/utility';

const useStyles = makeStyles(theme => ({
  height: {
    height: '100%'
  },
  LogoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
}));
const DesktopMenu = () => {
  const classes = useStyles();
  const { account } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <TopAppBarLeft setOpen={setOpen} />
      <div className={classes.LogoContainer}>
      </div>
      <TopAppBarRight />
    </>
  );
};

export default DesktopMenu;
