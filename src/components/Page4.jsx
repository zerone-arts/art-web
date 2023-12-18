import React, { useState, useEffect, useRef } from "react";
import "../assets/css/Page4.css";
import { DownUseInterval } from "../assets/utils";
import page4Object1Img from "../assets/img/page4-object1-Img.jpeg";
import page4Object1Sign from "../assets/img/page4-object1-sign.png";
import page4Object2Img11 from "../assets/img/page4-object2-1.png";
import page4Object2Img12 from "../assets/img/page4-object2-2.png";
import page4Object3Img from "../assets/img/page4-object3-img.png";
import page4Object3ImgBlur from "../assets/img/page4-object3-img-blur.png";
import page4Object4Img from "../assets/img/page4-object4-Img.png";
import page4Object5Img from "../assets/img/page4-object5-Img.png";
import page4Object6Img from "../assets/img/page4-object6-Img.jpeg";

function Page4(props) {
  const slideUlRef = useRef(null);
  const [isPlay, setIsPlay] = useState(true);
  const [playHover, setPlayHover] = useState(false);
  const [px, setPx] = useState(0);

  const happyWeekendText =
    "•HAPPY WEEKEND •HAPPY WEEKEND •HAPPY WEEKEND •HAPPY WEEKEND";
  const happyWeekend = Array.from(happyWeekendText);

  let ulWidth = slideUlRef.current?.clientWidth;

  DownUseInterval(
    () => {
      // setPx(px + 1);
      setPx(px);
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
          style={{ transform: `translateX(-${px}px)` }}
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
          <li className="page4-object3">
            <div className="page4-object3-bg">
              <img src={page4Object3ImgBlur} alt="page4Object3ImgBlur" />
            </div>
            <div className="page4-object3-circle">
              <div className="page4-object3-imgBox">
                <img src={page4Object3Img} alt="page4Object3Img" />
              </div>
              {happyWeekend.map((item, idx) => {
                return (
                  <span
                    key={idx}
                    style={{ transform: `rotate(${idx * 6}deg)` }}
                  >
                    {item}
                  </span>
                );
              })}
            </div>
            <div className="page4-object3-Plus" id="plus-top"></div>
            <div className="page4-object3-Plus" id="plus-bottom"></div>
            <div className="page4-object3-date">
              <p>december</p>
              <p>
                <span></span>(2023)
              </p>
              <p>16</p>
            </div>
            <div className="page4-object3-week">
              <p>saturday</p>
              <p>
                TODAY<span></span>
              </p>
            </div>
            <div className="page4-object3-title" id="title-top">
              <p>camera</p>
              <p> I want to buy a </p>
            </div>
            <div className="page4-object3-title" id="title-bottom">
              <p>Artist</p>
              <p>Photograph</p>
            </div>
            <div className="page4-object3-barcode"></div>
          </li>
          <li className="page4-object4">
            <div className="page4-object4-bg">
              <img src={page4Object4Img} alt="page4Object4Img" />
            </div>
            <div className="page4-object4-title">Pretender</div>
            <div className="page4-object4-singer">Official髭男dism</div>
            <div className="page4-object4-right-line">
              LAST 15:23<span></span>
            </div>
            <div className="page4-object4-left-line">
              END 17:50<span></span>
            </div>
            <div className="page4-object4-lyrics">
              <p>My love story with you It went just as expected</p>
            </div>
          </li>
          <li className="page4-object5">
            <div className="page4-object5-bg">
              <img src={page4Object5Img} alt="page4Object5Img" />
            </div>
            <ul className="page4-object5Box">
              <li>
                <p>HAVE A</p>
                <p>@2023 - That day it rained</p>
              </li>
              <li>SAVE</li>
              <li>day.</li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
                illum <br />
                consequatur obcaecati nihil <br />
                maiores. Tempore!
              </li>
              <li>
                <span></span>
              </li>
              <li>May.</li>
              <li>2023</li>
            </ul>
          </li>
          <li className="page4-object6">
            <div className="page4-object6-bg">
              <img src={page4Object6Img} alt="page4Object6Img" />
            </div>
            <div className="page4-object6-date">Mon, 18 Dec 2023</div>
            <div className="page4-object6-logo">
              <i className="fa-brands fa-instagram"></i>
              <p>Daily Instagram Stories</p>
            </div>
            <div className="page4-object6-title">
              <p>Hello</p>
              <h2>Monday</h2>
            </div>
            <div className="page4-object6-searchBox">
              <i className="fa-solid fa-magnifying-glass"></i>
              <p>Hello :)</p>
              <i className="fa-solid fa-microphone"></i>
            </div>
            <div className="page4-object6-textBox">
              <p>quotes</p>
              <p>Lorem, ipsum dolor.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            {/* <div className="page4-object6-bottomBox"></div> */}
          </li>
        </ul>
        <ul
          className="p4-slideBox"
          ref={slideUlRef}
          // style={{ transform: `translateX(-${px}px)` }}
          style={{ transform: `translateX(-${px}px)` }}
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
          <li className="page4-object3">
            <div className="page4-object3-bg">
              <img src={page4Object3ImgBlur} alt="page4Object3ImgBlur" />
            </div>
            <div className="page4-object3-circle">
              <div className="page4-object3-imgBox">
                <img src={page4Object3Img} alt="page4Object3Img" />
              </div>
              {happyWeekend.map((item, idx) => {
                return (
                  <span
                    key={idx}
                    style={{ transform: `rotate(${idx * 6}deg)` }}
                  >
                    {item}
                  </span>
                );
              })}
            </div>
            <div className="page4-object3-Plus" id="plus-top"></div>
            <div className="page4-object3-Plus" id="plus-bottom"></div>
            <div className="page4-object3-date">
              <p>december</p>
              <p>
                <span></span>(2023)
              </p>
              <p>16</p>
            </div>
            <div className="page4-object3-week">
              <p>saturday</p>
              <p>
                TODAY<span></span>
              </p>
            </div>
            <div className="page4-object3-title" id="title-top">
              <p>camera</p>
              <p> I want to buy a </p>
            </div>
            <div className="page4-object3-title" id="title-bottom">
              <p>Artist</p>
              <p>Photograph</p>
            </div>
            <div className="page4-object3-barcode"></div>
          </li>
          <li className="page4-object4">
            <div className="page4-object4-bg">
              <img src={page4Object4Img} alt="page4Object4Img" />
            </div>
            <div className="page4-object4-title">Pretender</div>
            <div className="page4-object4-singer">Official髭男dism</div>
            <div className="page4-object4-right-line">
              LAST 15:23<span></span>
            </div>
            <div className="page4-object4-left-line">
              END 17:50<span></span>
            </div>
            <div className="page4-object4-lyrics">
              <p>My love story with you It went just as expected</p>
            </div>
          </li>
          <li className="page4-object5">
            <div className="page4-object5-bg">
              <img src={page4Object5Img} alt="page4Object5Img" />
            </div>
            <ul className="page4-object5Box">
              <li>
                <p>HAVE A</p>
                <p>@2023 - That day it rained</p>
              </li>
              <li>SAVE</li>
              <li>day.</li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
                illum <br />
                consequatur obcaecati nihil <br />
                maiores. Tempore!
              </li>
              <li>
                <span></span>
              </li>
              <li>May.</li>
              <li>2023</li>
            </ul>
          </li>
          <li className="page4-object6"></li>
        </ul>
      </div>
    </div>
  );
}

export default Page4;
