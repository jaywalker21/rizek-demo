import React from "react";
import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";

import useStyles from "./commute-search-result-card.styles";
import { formatCurrency, formatTime } from "../../../../utils";

const CommuteSearchResultCard = ({
  transport,
  from,
  to,
  duration,
  cost,
  reference,
  currency
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.card}>
      <Box className={classes.cardInfo}>
        <div className={classes.fromAndToInfo}>
          <Typography>{from}</Typography>
          {to && (
            <>
              <ChevronRightOutlinedIcon color="primary" />
              <Typography>{to}</Typography>
            </>
          )}
        </div>
        <Typography variant="subtitle2">
          {formatCurrency(cost, currency)}
        </Typography>
      </Box>
      {transport && (
        <Typography
          variant="subtitle2"
          component="span"
          className={classes.transportAndTimeInfo}
        >
          {transport}
        </Typography>
      )}
      {reference && (
        <Typography
          variant="body2"
          component="span"
          className={classes.transportAndTimeInfo}
        >
          {reference} for
        </Typography>
      )}
      {duration && (
        <Typography
          variant="body2"
          component="span"
          className={classes.transportAndTimeInfo}
        >
          {formatTime(duration)}
        </Typography>
      )}
    </Paper>
  );
};

CommuteSearchResultCard.propTypes = {
  transport: PropTypes.string,
  from: PropTypes.string.isRequired,
  to: PropTypes.string,
  reference: PropTypes.string,
  duration: PropTypes.shape({
    m: PropTypes.string,
    h: PropTypes.string
  }).isRequired,
  cost: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired
};

export default CommuteSearchResultCard;
