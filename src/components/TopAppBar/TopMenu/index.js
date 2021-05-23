
import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

import { AppContext } from 'contexts';
import TopAppBarLeft from './TopAppBarLeft';
import TopAppBarRight from './TopAppBarRight';
import TopAppBarMenu from './TopAppBarMenu';
import { TOP_BAR_MENUS } from 'constants/top-menu-items';
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
      <div className={classes.LogoContainer}>
      <TopAppBarLeft setOpen={setOpen} />
        <TopAppBarMenu menuItems={TOP_BAR_MENUS} />
      </div>
      <TopAppBarRight />
    </>
  );
};

export default DesktopMenu;
