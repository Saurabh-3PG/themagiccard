import React from "react";
import PropTypes from "prop-types";
import styles from "./PageWrapper.module.scss";
import Header from "../Header";
import Footer from "../Footer";
import {ThemeContext} from "../../Context/theme";

class PageWrapper extends React.Component {
  render() {
    const { componentID, children, footerMiddleChild, searchHandler } = this.props;
    const uniqueId = componentID + "_page";
    const $thisContent = this.context;
    return (
      <>
        <div
          className={`${uniqueId} page ${styles.Page} ${$thisContent.theme.mode}`}
          id={uniqueId}
          style={{
            background: $thisContent.theme.middleground,
            color: $thisContent.theme.foreground,
          }}
        >
          <Header componentID={uniqueId} searchHandler={searchHandler} />

          <main
            className={`${uniqueId}_main main ${styles.Main}`}
            id={`${uniqueId}_main`}
          >
            {children}
          </main>
          <Footer componentID={uniqueId} footerMiddleChild={footerMiddleChild} />
        </div>{" "}
      </>
    );
  }
}

PageWrapper.propTypes = {
  componentID: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired, 
  footerMiddleChild: PropTypes.node, 
  searchHandler: PropTypes.func.isRequired,
};

PageWrapper.contextType = ThemeContext;

export default PageWrapper;
