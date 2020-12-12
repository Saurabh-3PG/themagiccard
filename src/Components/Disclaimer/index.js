import React from "react";
import { Box, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const Disclaimer = (props) => {
  const { componentID, disclaimers } = props;
  const uniqueID = componentID + "_Disclaimer";
  return (
    <>
      <Box id={uniqueID} className={`${uniqueID} disclaimer`}>
        <Typography
          component="h2"
          variant="h6"
          id={`${uniqueID}_disclaimer_heading`}
          color="secondary"
          className="disclaimer_heading"
        >
          Disclaimers
        </Typography>
        <ul id={`${uniqueID}_disclaimers_list`} className="disclaimers_list">
          {disclaimers &&
            disclaimers.map((value, index) => {
              return (
                <li key={index} id={`${uniqueID}_disclaimer_${index}`}>
                  <span>{value.text}</span>
                </li>
              );
            })}
        </ul>
      </Box>
    </>
  );
};

Disclaimer.propTypes = {
  componentID: PropTypes.string.isRequired,
  disclaimers: PropTypes.array
};

export default Disclaimer;
