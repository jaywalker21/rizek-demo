import React, { useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "react-query";

import Button from "@material-ui/core/Button";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

import CustomAutocomplete from "../../../components/custom-autocomplete";
import CustomButtonGroup from "../../../components/custom-button-group";
import CustomAlert from "../../../components/custom-alert";
import CommuteSearchFormSkeleton from "./commute-search-form-skeleton";

import buttonOptionsConfig from "../../../config/button-options-config";
import useStyles from "./commute-search-form.styles";

import { fetchLocations } from "../../../api";

const initialFormState = {
  from: null,
  to: null,
  travelType: null
};

const CommuteSearchForm = (props) => {
  const { searchHandler } = props;
  const classes = useStyles();
  const [selections, setSelections] = useState(initialFormState);
  const { from, to } = selections;

  const handleSelectionChange = (fieldName) => (event, newValue) => {
    setSelections((currentSelections) => ({
      ...currentSelections,
      [fieldName]: newValue ? newValue.id : null
    }));
  };

  const disableSearchButton = Object.values(selections).some(
    (formData) => !formData
  );

  const { isLoading, error, data } = useQuery("locations", fetchLocations);

  if (isLoading) {
    return <CommuteSearchFormSkeleton />;
  }

  if (error) {
    return <CustomAlert error={error} />;
  }

  return (
    <div className={classes.container}>
      <CustomAutocomplete
        label="From"
        options={data}
        selectedValue={from}
        handleSelectionChange={handleSelectionChange("from")}
        excludeOption={to}
        fullWidth
      />
      <CustomAutocomplete
        label="To"
        options={data}
        selectedValue={to}
        handleSelectionChange={handleSelectionChange("to")}
        excludeOption={from}
        fullWidth
      />
      <CustomButtonGroup
        buttons={buttonOptionsConfig}
        variant="outlined"
        handleButtonClick={handleSelectionChange("travelType")}
      />
      <Button
        variant="contained"
        color="success"
        startIcon={<SearchOutlinedIcon />}
        disabled={disableSearchButton}
        className={classes.searchButton}
        fullWidth
        onClick={() => searchHandler(selections)}
      >
        Search
      </Button>
    </div>
  );
};

CommuteSearchForm.propTypes = {
  searchHandler: PropTypes.func.isRequired
};

export default CommuteSearchForm;
