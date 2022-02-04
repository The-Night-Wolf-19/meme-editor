import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  LinkedinShareButton,
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  TelegramIcon,
  LinkedinIcon,
} from "react-share";
const GenerateBtn = ({
  generateHandler,
  fetchHandler,
  downloadHandler,
  url,
}) => {
  return (
    <Stack spacing={2} margin={1} direction="row">
      <Button variant="contained" onClick={() => generateHandler()}>
        Generate Meme
      </Button>
      <Button variant="contained" onClick={() => downloadHandler()}>
        Download Meme
      </Button>

      <FacebookShareButton
        url={url}
        quote={"Meme"}
        hashtag={"#Meme"}
        description={"Meme by TNW"}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton title={"Meme"} url={url} hashtags={["Meme", "Memer"]}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <WhatsappShareButton title={"Meme"} separator={" "} url={url}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton title={"Meme"} summary={"Meme by TNW"} url={url}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <TelegramShareButton title={"Meme"} url={url}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <Button
        variant="contained"
        color="success"
        onClick={() => fetchHandler()}
      >
        Fetch New Meme
      </Button>
    </Stack>
  );
};

export default GenerateBtn;
