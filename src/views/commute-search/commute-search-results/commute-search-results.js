import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "react-query";

import Button from "@material-ui/core/Button";
import ReplayOutlinedIcon from "@material-ui/icons/ReplayOutlined";

import CustomAlert from "../../../components/custom-alert";

import CommuteSearchResultCard from "./commute-search-result-card";
import CommuteSearchResultsSkeleton from "./commute-search-results-skeleton";

import { fetchBestMatchingDeals } from "../../../api";

const CommuteSearchResults = (props) => {
  const {
    searchQuery: { from, to, travelType: type },
    resetHandler
  } = props;

  const { isLoading, data, error } = useQuery(
    ["matchingDeals", { from, to, type }],
    fetchBestMatchingDeals
  );

  console.log({ isLoading, data, error });

  const renderCards = () => {
    const commuteCards = commutes.map(
      ({ transport, arrival, departure, duration, cost, reference }) => {
        return (
          <CommuteSearchResultCard
            key={reference}
            from={departure}
            to={arrival}
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

  if (isLoading) {
    return <CommuteSearchResultsSkeleton />;
  }

  if (error) {
    return <CustomAlert error={error} />;
  }

  const {
    commutes,
    currency,
    total: { cost: totalCost, duration: totalDuration }
  } = data;

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
