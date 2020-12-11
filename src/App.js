import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import PageRoute from "./PageRoute";
import {ThemeProvider, themes} from './Context/theme'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    }
    this.toggleFilter = () => {
      this.setState(state => ({
        isFilterOpen: state.isFilterOpen === false ? true : false
      }));
    }
    this.state = {
      theme: themes.dark,
      isFilterOpen: false,
      toggleTheme: this.toggleTheme,
      toggleFilter: this.toggleFilter,
    }
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
