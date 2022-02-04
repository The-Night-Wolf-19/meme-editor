import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import GenerateBtn from "../../components/GenerateBtn/GenerateBtn";
import NavBar from "../../components/NavBar/NavBar";
import TextBoxes from "../../components/TextBoxes/TextBoxes";
import axios from "axios";
import * as image1 from "../../asset/dog.json";
import * as image3 from "../../asset/cat.json";
import * as image2 from "../../asset/coffin.json";
import * as image4 from "../../asset/puppet.json";
import Lottie from "react-lottie";
import { saveAs } from "file-saver";

const LandingPage = () => {
  const img1 = {
    loop: true,
    autoplay: true,
    animationData: image1.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid",
    },
  };
  const img2 = {
    loop: true,
    autoplay: true,
    animationData: image2.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid",
    },
  };
  const img3 = {
    loop: true,
    autoplay: true,
    animationData: image3.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid",
    },
  };
  const img4 = {
    loop: true,
    autoplay: true,
    animationData: image4.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid",
    },
  };
  const [response, setResponse] = useState(null);
  const [index, setIndex] = useState(0);
  const [text0, setText0] = useState("");
  const [text1, setText1] = useState("");
  const [url, setUrl] = useState(null);
  //   const [postData,setPostData]=useState()

  useEffect(() => {
    const getResponse = async () => {
      try {
        let res = await axios.get("https://api.imgflip.com/get_memes");

        if (res.status === 200) {
          console.log(res.data, "got data");
          if (res.data !== null) {
            setResponse(res.data);
            let d = new Date();
            setIndex(Number(d.getTime()) % 100);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    getResponse();
  }, []);

  const generateHandler = () => {
    let myHeaders = new Headers();
    myHeaders.append("Cookie", "claim_key=t8I5rmSrxJjKYPyT7SZG7WpkmQfAqriO");

    var formdata = new FormData();
    formdata.append("username", "shubhamsinha");
    formdata.append("password", "ImgFlip@123");
    formdata.append("template_id", response.data.memes[index].id);
    formdata.append("text0", text0);
    formdata.append("text1", text1);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://api.imgflip.com/caption_image", requestOptions)
      .then((response) => response.text())
      .then((result) => setUrl(JSON.parse(result).data.url))
      .catch((error) => console.log("error", error));
  };

  const fetchHandler = () => {
    setUrl(null);
    setText0("");
    setText1("");
    let d = new Date();
    setIndex(Number(d.getTime()) % 100);
  };
  const downloadImage = () => {
    saveAs(url == null ? response.data.memes[index].url : url, "image.jpg");
  };

  return (
    <div className="landingPage">
      <NavBar />
      <div className="contentPane">
        <div className="inputPane">
          <TextBoxes
            text0={text0}
            text1={text1}
            setText0={(e) => setText0(e.target.value)}
            setText1={(e) => setText1(e.target.value)}
          />
          <GenerateBtn
            generateHandler={() => generateHandler()}
            fetchHandler={() => fetchHandler()}
            downloadHandler={() => downloadImage()}
            url={
              response == null
                ? null
                : url == null
                ? response?.data?.memes[index]?.url
                : url
            }
          />
        </div>
        <div className="imagePane">
          <div className="resultImage">
            {response == null ? (
              " "
            ) : (
              <img
                src={url == null ? response?.data?.memes[index].url : url}
                className="memeImage"
                alt=""
              />
            )}
          </div>
          <div className="gifPane">
            <div className="gif1">
              <Lottie options={img1} height={200} />
              <Lottie options={img3} height={200} />
            </div>
            <div className="gif2">
              <Lottie options={img4} height={250} />
              <Lottie options={img2} height={250} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
