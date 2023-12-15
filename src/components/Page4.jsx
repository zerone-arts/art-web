import React, { useState, useEffect, useRef } from "react";
import "../assets/css/Page4.css";
import { DownUseInterval } from "../assets/utils";
import page4Object1Img from "../assets/img/page4-object1-Img.jpeg";
import page4Object1Sign from "../assets/img/page4-object1-sign.png";
import page4Object2Img11 from "../assets/img/page4-object2-1.png";
import page4Object2Img12 from "../assets/img/page4-object2-2.png";
function Page4(props) {
  const slideUlRef = useRef(null);
  const [isPlay, setIsPlay] = useState(true);
  const [playHover, setPlayHover] = useState(false);
  const [px, setPx] = useState(0);

  let ulWidth = slideUlRef.current?.clientWidth;

  DownUseInterval(
    () => {
      setPx(px + 1);
      if (px === ulWidth) {
        setIsPlay(false);
      }
    },
    isPlay ? 10 : null
  );

  useEffect(() => {
    if (!isPlay && !playHover) {
      setIsPlay(true);
      setPx(0);
    }
  }, [isPlay]);
  useEffect(() => {
    if (playHover) {
      setIsPlay(false);
    } else {
      setIsPlay(true);
    }
  }, [playHover]);

  return (
    <div className="p4-container">
      <div className="p4-title">Art Magazine</div>
      <div
        className="p4-slide-Wrapper"
        onMouseOver={() => setPlayHover(true)}
        onMouseLeave={() => {
          setPlayHover(false);
        }}
      >
        <ul
          className="p4-slideBox"
          ref={slideUlRef}
          // style={{ transform: `translateX(-${px}px)` }}
          style={{ transform: `translateX(20px)` }}
        >
          <li className="page4-object1">
            <div className="page4-object1-title">
              永<br />日
            </div>
            <ul className="page4-object1-ImgWrapper">
              <li className="page-object1-left">
                <img src={page4Object1Img} alt="page4Object1Img" />
              </li>
              <li className="page-object1-center">
                <img src={page4Object1Img} alt="page4Object1Img" />
              </li>
              <li className="page-object1-right">
                <img src={page4Object1Img} alt="page4Object1Img" />
              </li>
            </ul>
            <div className="page4-object1-line"></div>
            <img
              className="page4-object1-sign"
              src={page4Object1Sign}
              alt="page4Object1Sign"
            />
            <div className="page4-object1-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            </div>
          </li>
          <li className="page4-object2">
            <img src={page4Object2Img11} alt="page4Object2Img11" />
            <img
              className="page4-object2-img"
              src={page4Object2Img12}
              alt="page4Object2Img12"
            />
            <div className="page4-object2-textBox">
              <div className="page4-object2-textBox-1">
                <p>
                  De<span></span>
                </p>
                <p>Vision</p>
                <p>010</p>
              </div>
              <div className="page4-object2-textBox-2">23 - 12 - 15</div>
              <div className="page4-object2-textBox-3">
                <h2>
                  Kim <br />
                  Chunsik
                </h2>
                <p>Artist</p>
                <p>Just write something down</p>
              </div>
              <ul className="page4-object2-textBox-4">
                <li>Z</li>
                <li>e</li>
                <li>r</li>
                <li>O</li>
                <li>n</li>
                <li>e</li>
              </ul>
              <div className="page4-object2-textBox-5">
                <p>From 19 30 PM</p>
                <p>Third week Friday</p>
                <p>Lorem ipsum sit consectetur.</p>
              </div>
            </div>
          </li>
          <li className="page4-object3"></li>
          <li className="page4-object4"></li>
          <li className="page4-object5"></li>
          <li className="page4-object6"></li>
        </ul>
      </div>
    </div>
  );
}

export default Page4;
