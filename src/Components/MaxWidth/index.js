import React from "react";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";

export default function MaxWidth(props) {
  const { componentID, children, maxWidth } = props;
  const uniqueId = componentID + "_maxWidth";
  return (
    <>
      <Container
        maxWidth={maxWidth ? maxWidth : "xl"}
        className={`${uniqueId} maxWidth`}
        id={uniqueId}
      >
        {children}
      </Container>
    </>
  );
}
MaxWidth.propTypes = {
  componentID: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.string
};
