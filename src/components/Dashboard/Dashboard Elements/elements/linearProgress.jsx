import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useStatusChange from './statuschange';

function LinearProgressWithLabel(props) {
  return (
    <Box display="block">
        
      <Box>
        <Typography>{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
      <Box width="100%">
        <LinearProgress variant="determinate" {...props} style={{color: 'red'}}/>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function LinearWithValueLabel(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={parseInt(props.progress)} />
    </div>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  progress: PropTypes.number.isRequired,
};
