import React from "react";
import { useEffect } from "react";
import {
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import axios from "axios";
import fileDownload from "js-file-download";

import { FacebookIcon } from "react-share";
import { Button } from "react-bootstrap";

export default function Sharing(props) {
  const handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  };
  console.log(props, "what are my props?");
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <FacebookShareButton url={"http://localhost:3000/"}>
        <FacebookIcon size={45} round />
      </FacebookShareButton>
      <TwitterShareButton url={"http://localhost:3000/"}>
        <TwitterIcon size={45} round />
      </TwitterShareButton>
      <WhatsappShareButton url={"http://localhost:3000/"}>
        <WhatsappIcon size={45} round />
      </WhatsappShareButton>

      <Button
        style={{
          backgroundColor: "gold",
          color: "#171818",
          borderColor: "gold",
        }}
        onClick={() => {
          handleDownload(props.soundUrl, props.name);
        }}
      >
        Download
      </Button>
    </div>
  );
}
