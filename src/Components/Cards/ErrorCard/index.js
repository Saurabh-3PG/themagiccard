import React from "react";
import { Box, Typography } from "@material-ui/core";
import {ERROR_MSG} from "../../../utility/constants";
import PropTypes from "prop-types";
class ErrorCard extends React.Component {
  render() {
    const { componentID } = this.props;
    const uniqueId = componentID + "_ErrorCard";
    return (
      <Box className="ErrorCard" id={uniqueId} style={{maxWidth: "100%"}}>
          <Typography className="font fontBold fontSize_xl m_before_xxxl m_after_xxxl" component="h2" style={{
                    minHeight: "150px",
                    width: "640px",
                    maxWidth: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "red",
                    boxShadow: "2px 4px 12px -4px rgb(0, 0, 0, 0.42)",
                    padding: "64px",
                    textAlign: "center",
          }}>
            {ERROR_MSG}
          </Typography>
      </Box>
    );
  }
}

ErrorCard.propTypes = {
  componentID: PropTypes.string.isRequired
};

export default ErrorCard;
