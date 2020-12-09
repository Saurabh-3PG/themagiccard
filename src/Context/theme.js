import React from "react";

export const themes = {
  light: {
    mode: "light",
    foreground: "#212121",
    background: "#fff",
    middleground: "#fff"
  },
  dark: {
    mode: "dark",
    foreground: "rgba(255, 255, 255, 0.80)",
    background: "#212121",
    middleground: "#333"
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

export { ThemeProvider, ThemeConsumer }
