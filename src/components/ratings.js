import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import Box from '@material-ui/core/Box';
const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

const customIcons = {
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CustomizedRatings() {
  return (
    <div>
      <Box component="fieldset" mb={-.5} borderColor="transparent">
        <Rating name="customized-10" defaultValue={0} max={1} />
      </Box>
    </div>
  );
}
