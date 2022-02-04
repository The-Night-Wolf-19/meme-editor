import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./TextBoxes.css";
const TextBoxes = ({ text0, text1, setText0, setText1 }) => {
  return (
    <div className="textBox">
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            minWidth: "40vw",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Top Text"
          variant="outlined"
          value={text0}
          onChange={(e) => {
            setText0(e);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Bottom Text"
          variant="outlined"
          value={text1}
          onChange={(e) => setText1(e)}
        />
      </Box>
      {/* <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "30vw" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Bottom Text" variant="outlined" />
      </Box> */}
    </div>
  );
};

export default TextBoxes;
