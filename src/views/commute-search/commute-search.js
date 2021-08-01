import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";

import CommuteSearchForm from "./commute-search-form";
import CommuteSearchResults from "./commute-search-results";

import useStyles from "./commute-search.styles";

export default () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const classes = useStyles();

  const searchHandler = (newSearchQuery) => setSearchQuery(newSearchQuery);

  const resetHandler = () => setSearchQuery(null);

  return (
    <div className={classes.container}>
      <Typography variant="h4" align="center" gutterBottom>
        TripSorter
      </Typography>
      {!searchQuery ? (
        <CommuteSearchForm searchHandler={searchHandler} />
      ) : (
        <CommuteSearchResults resetHandler={resetHandler} />
      )}
    </div>
  );
};
