import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ReplayOutlinedIcon from "@material-ui/icons/ReplayOutlined";

import CommuteSearchResultCard from "./commute-search-result-card";

const results = {
  currency: "EUR",
  commutes: [
    {
      transport: "Train",
      from: "London",
      to: "Paris",
      duration: {
        h: "02",
        m: "15"
      },
      cost: 100,
      reference: "AB123"
    },
    {
      transport: "Bus",
      from: "Paris",
      to: "Berlin",
      duration: {
        h: "04",
        m: "30"
      },
      cost: 90,
      reference: "PB99"
    },
    {
      transport: "Plane",
      from: "Berlin",
      to: "Moscow",
      duration: {
        h: "01",
        m: "30"
      },
      cost: 290,
      reference: "RU1337"
    }
  ],
  total: {
    duration: {
      h: "08",
      m: "15"
    },
    cost: 480
  }
};

const CommuteSearchResults = (props) => {
  const { searchQuery, resetHandler } = props;

  const {
    commutes,
    currency,
    total: { cost: totalCost, duration: totalDuration }
  } = results;

  const renderCards = () => {
    const commuteCards = commutes.map(
      ({ transport, from, to, duration, cost, reference }) => {
        return (
          <CommuteSearchResultCard
            key={reference}
            from={from}
            to={to}
            duration={duration}
            cost={cost}
            transport={transport}
            reference={reference}
            currency={currency}
          />
        );
      }
    );

    // add the card for total
    commuteCards.push(
      <CommuteSearchResultCard
        from="Total"
        duration={totalDuration}
        cost={totalCost}
        currency={currency}
        key="total"
      />
    );

    return commuteCards;
  };

  return (
    <div>
      {renderCards()}
      <Button
        variant="contained"
        color="success"
        startIcon={<ReplayOutlinedIcon />}
        fullWidth
        onClick={resetHandler}
      >
        Reset
      </Button>
    </div>
  );
};

CommuteSearchResults.propTypes = {
  searchQuery: PropTypes.shape({
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    travelType: PropTypes.string.isRequired
  }),
  resetHandler: PropTypes.func.isRequired
};

export default CommuteSearchResults;
