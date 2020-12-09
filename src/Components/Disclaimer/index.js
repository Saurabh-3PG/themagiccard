import React from "react";
import { Box, Typography } from "@material-ui/core";
const Disclaimer = (props) => {
  const { id, disclaimers } = props;
  const componentId = id + "_Disclaimer";
  return (
    <>
      <Box id={componentId} className={`${componentId} disclaimer`}>
        <Typography
          component="h2"
          variant="h6"
          id={`${componentId}_disclaimer_heading`}
          color="secondary"
          className="disclaimer_heading"
        >
          Disclaimers
        </Typography>
        <ul id={`${componentId}_disclaimers_list`} className="disclaimers_list">
          {disclaimers &&
            disclaimers.map((value, index) => {
              return (
                <li key={index} id={`${componentId}_disclaimer_${index}`}>
                  <span>{value.text}</span>
                </li>
              );
            })}
        </ul>
      </Box>
    </>
  );
};
export default Disclaimer;
