import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import ReplayOutlinedIcon from "@material-ui/icons/ReplayOutlined";

import CommuteSearchResultCard from "./commute-search-result-card";

import results from "../../../mocks/search-results-mock-data";

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
    <>
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
    </>
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
