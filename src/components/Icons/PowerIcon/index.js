
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
    root: {
        width: 29,
        height: 28
    }
}));

const PowerIcon = ({ className, viewBox, color, ...rest }) => {
    const classes = useStyles();
    return (
        <SvgIcon viewBox={viewBox || "0 0 512 512"} {...rest} className={clsx(classes.root, className)}>
            <g>
                <g>
                    <path d="M336.709,74.843c-10.322-3.944-21.88,1.219-25.825,11.537c-3.945,10.316,1.22,21.879,11.536,25.824
			C393.115,139.239,442,207.384,442,286c0,102.561-83.439,186-186,186S70,388.561,70,286c0-78.659,48.908-146.766,119.573-173.793
			c10.317-3.946,15.481-15.509,11.536-25.825c-3.947-10.317-15.512-15.48-25.825-11.536C89.185,107.777,30,190.692,30,286
			c0,124.922,101.09,226,226,226c124.922,0,226-101.09,226-226C482,190.65,422.778,107.759,336.709,74.843z"/>
                </g>
            </g>
            <g>
                <g>
                    <path d="M256,0c-11.046,0-20,8.954-20,20v195.851c0,11.046,8.954,20,20,20s20-8.955,20-20V20C276,8.954,267.046,0,256,0z" />
                </g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
        </SvgIcon>
    )
};

export default PowerIcon;