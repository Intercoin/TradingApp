
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

import LogoWithTitle from 'components/LogoWithTitle';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  margin: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    margin: `${theme.spacing(0)} !important`,
  },
  height: {
    paddingLeft: theme.spacing(1.5)
  }
}));

const TopAppBarLeft = ({ setOpen }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LogoWithTitle setOpen={setOpen} logoWidth={80} logoHeight={80} titleVariant={'h6'} className={classes.margin} />
    </div>
  );
};

export default TopAppBarLeft;
