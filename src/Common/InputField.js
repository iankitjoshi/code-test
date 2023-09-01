import React from "react";
import { TextField } from "@mui/material";

const InputField = ({ extraCss, classes, type, error, fullWidth, list, ...props }) => {

  return (
    <>
      <div className={extraCss ? extraCss : null}>
        <p className="text-sm font-medium pb-1" > {props.title} <span className=" text-error" > {props?.required && ' *'}</span> </p>
        <TextField
          fullWidth={fullWidth}
          id="standard-basic"
          variant="outlined"
          error={error}
          type={type}
          label={""}
          size="small"
          sx={{
            "& input::placeholder": {
              fontsize: "10px"
            }
          }}
          {...props}
        />
      </div>
      {error && <p className="error-message">{error}</p>}
    </>
  );
};

export default InputField;
