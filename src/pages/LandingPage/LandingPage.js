import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import GenerateBtn from "../../components/GenerateBtn/GenerateBtn";
import NavBar from "../../components/NavBar/NavBar";
import TextBoxes from "../../components/TextBoxes/TextBoxes";
import axios from "axios";
import * as image1 from "../../asset/dog.json";
import * as image3 from "../../asset/cat.json";
import * as image2 from "../../asset/coffin.json";
import Lottie from "react-lottie";
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
    const data = {
      template_id: response.data.memes[index].id,
      username: "shubhamsinha",
      password: "ImgFlip@123",
      text0: text0,
      text1: text1,
    };
    let res = axios.post("https://api.imgflip.com/caption_image", data);
    if (res.status === 200) {
      console.log(res.data, "sent data");
      if (res.data !== null) {
        setUrl(res.data.url);
      }
    }
  };

  const fetchHandler = () => {
    setUrl(null);
    let d = new Date();
    setIndex(Number(d.getTime()) % 100);
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
              <Lottie options={img2} height={250} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
