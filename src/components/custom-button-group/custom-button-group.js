import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { getDefaultSelectedFromArray } from "../../utils";
import useStyles from "./custom-button-group.styles";

const CustomButtonGroup = (props) => {
  const {
    buttons,
    handleButtonClick,
    selectedButtonVariant = "contained",
    buttonProps,
    ...buttonGroupProps
  } = props;

  const classes = useStyles();

  const [selectedButton, setSelectedButton] = useState(
    getDefaultSelectedFromArray(buttons)
  );

  useEffect(() => {
    handleButtonClick(null, selectedButton);
  }, [selectedButton]);

  const isButtonSelected = (buttonId) => {
    if (selectedButton && selectedButton.id && selectedButton.id === buttonId) {
      return true;
    }
    return false;
  };

  const getButtonVariant = (buttonId) => {
    if (isButtonSelected(buttonId)) return selectedButtonVariant;
    return;
  };

  const renderButtons = () => {
    return buttons.map((buttonInfo) => {
      const { id, label } = buttonInfo;
      return (
        <Button
          key={id}
          variant={getButtonVariant(id)}
          onClick={() => setSelectedButton(buttonInfo)}
          className={classes.buttonRoot}
          {...buttonProps}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <ButtonGroup className={classes.buttonGroupRoot} {...buttonGroupProps}>
      {renderButtons()}
    </ButtonGroup>
  );
};

CustomButtonGroup.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
      isDefault: PropTypes.bool
    })
  ),
  handleButtonClick: PropTypes.func.isRequired,
  selectedButtonVariant: PropTypes.string
};

export default CustomButtonGroup;
