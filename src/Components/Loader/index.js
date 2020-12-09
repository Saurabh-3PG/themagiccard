import React from "react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

export default function Loader(props) {
  const { componentID } = props;
  const uniqueId = componentID + "_loader";
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        className={`${uniqueId} loader`}
        id={uniqueId}
      >
        <div className="loader_icon_container">
          <div className="loader_icon" />
        </div>
      </Grid>
    </>
  );
}
Loader.propTypes = {
  componentID: PropTypes.string.isRequired,
};
