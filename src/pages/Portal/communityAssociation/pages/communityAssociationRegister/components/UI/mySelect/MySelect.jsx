import React from "react";
import { useTheme } from "@mui/material/styles";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./mySelect.scss";
import { useTranslation } from "react-i18next";
import { Autocomplete, TextField } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MySelect = ({ data, text, value, handleChange, valueKey }) => {
  const { t } = useTranslation();

  const handleChangeSelect = (event, { id }) => {
    const {
      target: { value },
    } = event;
    handleChange({ key: valueKey, value: id });
  };

  return (
    <div className="my-select">
      <FormControl sx={{ m: 1, width: "100%" }}>
        <FormHelperText id="outlined-weight-helper-text">
          <span className="my-input__text">{text}</span>
          <span className="my-input__required"> *</span>
        </FormHelperText>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={data}
          sx={{ width: 300 }}
          onChange={handleChangeSelect}
          placeholder="Barcha davlatlar"
          renderInput={(params) => <TextField {...params} label="" />}
        />
      </FormControl>
    </div>
  );
};

export default MySelect;
