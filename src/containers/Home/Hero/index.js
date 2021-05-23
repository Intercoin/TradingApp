import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import ContainedButton from 'components/UI/Buttons/ContainedButton';

import Image from 'components/UI/Image';
import SectionHeader from 'components/UI/SectionHeader';

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    boxShadow:
      '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
  mobileImageContainer: {
    position: 'absolute', right: 0, marginTop: 80
  },

}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={4}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <SectionHeader
            title={
              <span>
                Sign up Today
                <br />
                <span style={{ color: theme.palette.text.hoverText }}>
                  Intercoin Trading App
                </span>
              </span>
            }
            // subtitle="Superpowers for Any Currency"
            ctaGroup={[
              <ContainedButton variant="contained" style={{ backgroundColor: theme.palette.text.hoverText }} size="large">
                Connect Wallet
              </ContainedButton>,
              <ContainedButton variant="outlined" color="primary" size="large">
                Learn more
              </ContainedButton>,
            ]}
            align={isMd ? "left" : 'center'}
            disableGutter
            titleVariant="h3"
          />
        </Grid>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="assets/images/marketDashboard.png"
            alt="Web3 Legal Engineering"
            className={classes.image}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
          <div className={classes.mobileImageContainer}>
            <Image
              src="assets/images/marketMobileDashboard.png"
              alt="Web3 Legal Engineering"
              className={classes.image}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
