import React from "react";
import { ThemeContext } from "../../Context/theme";
import { Grid, Typography } from "@material-ui/core";
import styles from "./index.module.scss";
import MaxWidth from "../MaxWidth";

class Footer extends React.Component {
  render() {
    const { componentID, footerChildren, footerMiddleChild } = this.props;
    const uniqueId = componentID + "_footer";
    let $thisContext = this.context;
    return (
      <footer
        className={`${uniqueId}_footer footer ${styles.Footer}`}
        id={uniqueId}
        style={{
          background: $thisContext.theme.background,
          color: $thisContext.theme.foreground,
        }}
      >
        <MaxWidth componentID={uniqueId}>
          <Grid
            className={styles.FooterContent}
            container
            direction="row"
            alignItems="center"
          >
            <Grid container item xs={2}>
              <Typography
                component="div"
                align="left"
                className={`font fontMedium fontSize_sm`}
                color="secondary"
                display="block"
              >
                Designed & Developed by - Saurabh Anand
              </Typography>
            </Grid>
            <Grid container item alignItems="center" justify="center" xs={8}>
              {footerMiddleChild}
            </Grid>
            <Grid container item xs={2}>
                {footerChildren}
            </Grid>
          </Grid>
        </MaxWidth>
      </footer>
    );
  }
}
Footer.contextType = ThemeContext;
export default Footer;
