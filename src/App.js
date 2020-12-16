import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import PageRoute from "./PageRoute";
import {ThemeProvider, themes} from "./Context/theme";
/**
 * Class representing App
 * @class
 */
class App extends React.Component {
  /**
   * Create a App.
   * @param {props} props - All Props.
  */
  constructor(props) {
    super(props);
    /**
     * Toggle Theme function
     * Updates the theme from from dark to light and light to dark
    */
    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
    /**
     * Toggle Filter aside function
     * Set state to be true or false
     * Should Aside be open or close
    */
    this.toggleFilter = () => {
      this.setState(state => ({
        isFilterOpen: state.isFilterOpen === false ? true : false
      }));
    };
    /**
     * Initial State of the App
    */
    this.state = {
      theme: themes.dark,
      isFilterOpen: false,
      toggleTheme: this.toggleTheme,
      toggleFilter: this.toggleFilter,
    };
  }
  render () {
    return (
      <ThemeProvider value={this.state}>
        <CssBaseline />
        <PageRoute />
      </ThemeProvider>
    );
  }
}

export default App;
