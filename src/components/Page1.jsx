import React, { useEffect, useRef, useState } from "react";
import "../assets/css/Page1.css";
import gsap from "gsap";
import { ReactComponent as NodeIcon } from "../assets/icon/nodeIcon.svg";
import koFlag from "../assets/img/Koflag.png";
import profile2 from "../assets/img/profile2.jpeg";
import page1BgImg1 from "../assets/img/page1-bg-Img1.png";
import page1BgImg2 from "../assets/img/page1-bg-Img2.png";

import timer from "../assets/img/timer.png";

function Page1({ mouseX, mouseY, intro }) {
  const [iconColor, setIconColor] = useState("#dc9b1a");
  const [pageX, setPageX] = useState(null);
  const [pageY, setPageY] = useState(null);

  const Page1Ref = useRef(null);
  const centerBoxRef = useRef(null);
  const centerBoxTitleRef = useRef(null);
  const centerBoxH3Ref = useRef(null);
  const centerBoxLineRef = useRef(null);
  const sunRef = useRef(null);

  const arrowRef = useRef(null);
  const topLeftRef = useRef(null);
  const bottomLeftRef = useRef(null);
  const item1Ref = useRef(null);
  const item2Ref = useRef(null);
  const item3Ref = useRef(null);

  useEffect(() => {
    setPageX(Page1Ref.current.clientWidth / 2);
    setPageY(Page1Ref.current.clientHeight / 2);
  }, []);

  useEffect(() => {
    if (intro === "intro-hide") {
      gsap.to(centerBoxRef.current, {
        scale: 1,
        duration: 0.1,
      });
      gsap.to(topLeftRef.current, {
        left: "30px",
        opacity: 1,
        duration: 0.5,
      });
      gsap.to(bottomLeftRef.current, {
        left: "150px",
        opacity: 1,
        duration: 1,
      });
      gsap.to(item1Ref.current, {
        scale: 1,
        duration: 1,
        delay: 0.2,
      });
      gsap.to(item2Ref.current, {
        scale: 1,
        duration: 1,
        delay: 0.5,
      });
      gsap.to(item3Ref.current, {
        scale: 1,
        duration: 1,
        delay: 1,
      });
    }
  }, [intro]);

  useEffect(() => {
    //bg
    arrowRef.current.style.transform = `rotate(${
      ((Math.atan2(mouseY - pageY, mouseX - pageX) * 180) / Math.PI) * 1
    }deg)`;
    sunRef.current.style.transform = `translateX(${(mouseX - pageX) * 0.01}px`;

    //object
    centerBoxTitleRef.current.style.transform = `translate(${
      (mouseX - pageX) * -0.03
    }px,${(mouseY - pageY) * -0.03}px)`;

    centerBoxH3Ref.current.style.transform = `translate(${
      (mouseX - pageX) * -0.01
    }px,${(mouseY - pageY) * -0.01}px)`;

    centerBoxLineRef.current.style.transform = `translate(${
      (mouseX - pageX) * -0.01
    }px,${(mouseY - pageY) * -0.01}px)`;
  }, [mouseX, mouseY]);

  return (
    <div className="p1-container" ref={Page1Ref}>
      <div id="timer">
        <img src={timer} alt="timer" />
        <div className="arrow" ref={arrowRef}></div>
      </div>

      <img id="bgImg1" src={page1BgImg1} alt="page1BgImg1" />
      <img id="bgImg2" src={page1BgImg2} alt="page1BgImg2" />
      <div className="moon">
        <div className="sun" ref={sunRef}></div>
      </div>

      <div className="center-box" ref={centerBoxRef}>
        <div className="title" ref={centerBoxTitleRef}>
          LAST ART <span>PROJECTS</span>
        </div>
        <div className="lineBox" ref={centerBoxLineRef}></div>
        <h3 ref={centerBoxH3Ref}>Little collection</h3>
      </div>
      <div className="top-left-textbox" ref={topLeftRef}>
        <div> Giant Galleries</div>
        <div>
          <span></span>Small Collections
        </div>
      </div>
      <div className="right-itembox">
        <div className="item item1" ref={item1Ref}>
          0<span>1</span>
        </div>
        <div
          className="item item2"
          ref={item2Ref}
          onMouseOver={() => {
            setIconColor("black");
          }}
          onMouseOut={() => {
            setIconColor("#dc9b1a");
          }}
        >
          <NodeIcon
            width="20"
            height="20"
            fill={iconColor}
            stroke={iconColor}
          />
        </div>

        <div className="item item3" ref={item3Ref}>
          <div className="item3-bars">
            <div className="item3-bar"></div>
            <div className="item3-bar"></div>
            <div className="item3-bar"></div>
          </div>
        </div>
      </div>
      <div className="bottom-left-profilebox" ref={bottomLeftRef}>
        <div className="profile-photo">
          <img src={profile2} alt="me" />
          <div className="profile-photo-inner">
            <img src={koFlag} alt="korean" />
          </div>
        </div>
        <div className="profile-text">
          <div>by Zerone Kim</div>
          <div>
            <span></span>FrontEnd Developer
          </div>
          <div> Geex Arts</div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
