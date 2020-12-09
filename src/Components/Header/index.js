import React from "react";
// import { ThemeContext } from "../../Context/theme";
import {ThemeConsumer} from "../../Context/theme";
import { Grid, Typography, InputBase } from "@material-ui/core";
import DashboardIcon from '@material-ui/icons/Dashboard';
import classes from "./index.module.scss";
import MaxWidth from "../MaxWidth";
import Switch from "@material-ui/core/Switch";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: ''
    }
  }
  render() {
    const { componentID, searchHandler } = this.props;
    const uniqueId = componentID + "_header";
    return (
      <ThemeConsumer>
        {
          ({theme, toggleTheme}) => {
            return (
              <header
                className={`${uniqueId} header ${classes.Header}`}
                id={`${uniqueId}`}
                style={{
                  background: theme.background,
                  color: theme.foreground,
                }}
              >
                <MaxWidth componentID={uniqueId}>
                  <Grid
                    className={classes.HeaderContent}
                    container
                    direction="row"
                    alignItems="center"
                    justify="space-between"
                  >
                    <Grid
                      item
                      xs={4}
                      container
                      alignItems="center"
                      justify="flex-start"
                    >
                      <DashboardIcon fontSize="default" color="secondary" />
                      <Link to="/home" className={`${classes.SiteLogo}`}>
                            <Typography
                              component="h1"
                              align="center"
                              color="secondary"
                              className={`font fontBlack fontSize_md`}
                            >
                              Cards
                            </Typography>
                      </Link>
                    </Grid>
                    <Grid item xs={4} container alignItems="center" justify="center">
                      {
                        searchHandler 
                        ? <InputBase
                            className={classes.SearchInput}
                            placeholder="Search Cards"
                            inputProps={{ 'aria-label': 'Search Cards' }}
                            value={this.state.searchText}
                            onChange={(event) => this.setState({
                              searchText: event.target.value
                            }, () => {
                              if(this.state.searchText === ''){
                                searchHandler(null, 'name')
                              }
                            } ) }
                            onKeyDown={(event) => {
                                if(event.key === 'Enter'){
                                  console.log('event>>>>', 'event.key', event.key, 'this.state.searchText', this.state.searchText)
                                  searchHandler(this.state.searchText, 'name')
                                }

                            } }
                          />
                        : null
                      }
                    </Grid>
                    <Grid item xs={4} container alignItems="center" justify="flex-end">
                      <Switch
                        checked={theme.mode === "dark"}
                        onChange={toggleTheme}
                        name="ToggleTheme"
                        color={theme.mode === "dark" ? "secondary" : "primary"}
                        inputProps={{
                          "aria-label": `Select ${
                            theme.mode === "dark" ? "light" : "dark"
                          } Mode`,
                        }}
                      />
                    </Grid>
                  </Grid>
                </MaxWidth>
              </header>
            )
          }
        }
      </ThemeConsumer>
    );
  }
}
export default Header;
