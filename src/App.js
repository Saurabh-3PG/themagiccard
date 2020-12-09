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
    this.state = {
      theme: themes.dark,
      toggleTheme: this.toggleTheme,
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
