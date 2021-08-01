import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/core/Autocomplete";

import useStyles from "./custom-autocomplete.styles.js";

const CustomAutocomplete = (props) => {
  const {
    label,
    options,
    excludeOption,
    selectedValue,
    handleSelectionChange,
    textFieldProps,
    ...autoCompleteProps
  } = props;

  const [text, setText] = useState("");

  const classes = useStyles();

  const handleTextChange = (event, newValue) => {
    setText(newValue);
  };

  const isOptionEqualToValue = (option, value) => {
    return option?.id === value;
  };

  const applicableOptions = useMemo(() => {
    if (excludeOption) {
      return options.filter((option) => option.id !== excludeOption);
    }

    return options;
  }, [excludeOption, options]);

  return (
    <Autocomplete
      id={`${label.toLowerCase()}-select-autocomplete`}
      options={applicableOptions}
      value={selectedValue}
      onChange={handleSelectionChange}
      inputValue={text}
      onInputChange={handleTextChange}
      renderInput={(params) => (
        <TextField {...params} {...textFieldProps} label={label} />
      )}
      isOptionEqualToValue={isOptionEqualToValue}
      classes={classes}
      {...autoCompleteProps}
    />
  );
};

CustomAutocomplete.propTypes = {
  label: PropTypes.string.isRequired,
  selectedValue: PropTypes.string,
  handleSelectionChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  textFieldProps: PropTypes.object
};

export default CustomAutocomplete;
