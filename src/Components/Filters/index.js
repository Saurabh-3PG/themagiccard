import React from "react";

import { Box, TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const Filters = (props) => {
  const { componentID, filters, onChangeHandler } = props;
  const uniqueID = componentID + "_Filters";
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  return (
    <Box id={uniqueID} className={uniqueID}>
      {filters && filters.length > 0
        ? filters.map((filter, index) => {
            return (
              <Box key={uniqueID + "_" + index} className="font fontNormal fontSize_md m_before_sm" id={uniqueID + "_" + index}>
                <Autocomplete
                  multiple={filter.type === 'colors' ? true : false}
                  id={uniqueID + "_" + index + "_autoComplete"}
                  options={filter.options}
                  disableCloseOnSelect
                  className="font fontNormal fontSize_sm"
                  getOptionLabel={(value) => value}
                  onChange={(event, value) => {
                    onChangeHandler(event, value, filter.type);
                  }}
                  renderOption={(value, { selected }) => (
                    <React.Fragment>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {value}
                    </React.Fragment>
                  )}
                  // style={{ width: '100%', minHeight: 56 }}
                  renderInput={(params) => (
                    <TextField
                      className={`textField`}
                      {...params}
                      variant="outlined"
                      label={filter.label}
                      placeholder={filter.label}
                    />
                  )}
                />
              </Box>
            );
          })
        : null}
    </Box>
  );
};
export default Filters;
