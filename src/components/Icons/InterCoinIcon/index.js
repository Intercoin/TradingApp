
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      width: 68,
      height: 70
    },
    [theme.breakpoints.down('339')]: {
      width: 48,
      height: 50
    },
    width: 36,
    height: 38
  }
}));

const InterCoinIcon = ({ className, viewBox, color, ...rest }) => {
  const restDAta = { ...rest }

  const classes = useStyles();
  return (
    <SvgIcon width="175px" height="175px" x="0px" y="0px" viewBox={viewBox || "0 0 175 175"} enableBackground="new 0 0 175 175"  {...rest} className={clsx(classes.root, className)}>
      <g id="Page-1">
        <path id="intercoin-logo2" fill={color} d="M131.202,129.157v0.005H47.58c-16.71,0-30.256-13.566-30.256-30.301
		c0-16.733,13.546-30.299,30.256-30.299c2.324,0,4.583,0.271,6.757,0.768c6.15-13.841,20.001-23.493,36.104-23.493
		c18.517,0,34.055,12.761,38.33,29.979c0.732-0.061,1.473-0.1,2.221-0.1c14.736,0,26.683,11.965,26.683,26.724
		C157.675,117.127,145.842,129.043,131.202,129.157L131.202,129.157z M138.012,63.974C130.38,44.658,112.036,33,90.665,33
		c-18.449,0-34.925,8.818-44.113,23.576c-0.664-0.032-1.332-0.051-2.004-0.051c-23.223,0-40.048,20.5-40.048,43.237
		C4.5,118.787,21.325,142,44.548,142h89.974c16.795,0,35.979-18.445,35.979-38.15C170.5,86.805,159.297,67.512,138.012,63.974
		L138.012,63.974z M94.117,58.095h-11.35v18.438h-16.98v11.456h16.98v8.95h-16.98v11.457h16.98v14.768h11.35v-14.768h18.857V96.939
		H94.117v-8.95h18.857V76.533H94.117V58.095z"/>
      </g>
    </SvgIcon>
  );
}

export default InterCoinIcon;