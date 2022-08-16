import React, { useState } from "react";

export const LangContext = React.createContext();

const LangContextProvider = (props) => {
  const [details, setDetails] = useState({
    lang: "English",
    isFilterOpen: true,
  })
  const toggleLangDropdownHandler = () => {
    setDetails({ ...details, isFilterOpen: !details.isFilterOpen })
  }
  const changeLangHandler = (lang) => {
    setDetails({
      ...details,
      lang: lang
    });
  };
  return <LangContext.Provider value={{ ...details, toggleLangDropdown: toggleLangDropdownHandler, changeLang: changeLangHandler }}>
    {props.children}
  </LangContext.Provider>
}


export default LangContextProvider
