import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const GenerateBtn = ({ generateHandler, fetchHandler }) => {
  return (
    <Stack spacing={2} margin={1} direction="row">
      <Button variant="contained" onClick={() => generateHandler()}>
        Generate Meme
      </Button>
      <Button variant="outlined" onClick={() => fetchHandler()}>
        Fetch New Meme
      </Button>
    </Stack>
  );
};

export default GenerateBtn;
