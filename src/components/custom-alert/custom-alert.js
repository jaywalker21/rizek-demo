import React from "react";
import PropTypes from "prop-types";

import Alert from "@material-ui/core/Alert";
import AlertTitle from "@material-ui/core/AlertTitle";

const CustomAlert = (props) => {
  const { error } = props;
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      Team is working on resolving the following error.
      <br />
      <strong>{error.message}</strong>
    </Alert>
  );
};

CustomAlert.propTypes = {
  error: PropTypes.object
};

export default CustomAlert;
