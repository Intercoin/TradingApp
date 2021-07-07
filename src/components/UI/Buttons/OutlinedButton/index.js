import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';

import ButtonLink from 'components/UI/Buttons/ButtonLink';

const useStyles = makeStyles(theme => ({
  root: props => ({
    textTransform: 'none',
    width: '100%',
    // TODO: handle color='error'
    border: `1px solid ${props.color ? props.color : theme.palette.primary.main}`
  }),
  loadingSpin: {
    position: 'absolute'
  }
}));

const OutlinedButton = ({ className, color, variant, href, children, loading, disable, ...rest }) => {
  const classes = useStyles({ color });

  return (
    <Button
      component={href ? ButtonLink : 'button'}
      href={href}
      className={clsx(className, classes.root)}
      disabled={loading || disable}
      color={color}
      variant={variant || 'outlined'}
      {...rest}>
      {children}
      {loading && <CircularProgress className={classes.loadingSpin} color={color === 'primary' ? 'secondary' : 'primary'} size={20} />}
    </Button>
  );
};

export default OutlinedButton;
