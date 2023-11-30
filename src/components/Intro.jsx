import React, { useEffect, useState, useRef } from "react";
import "../assets/css/Intro.css";
import { DownUseInterval, UpUseInterval } from "../assets/utils.js";

function Intro({ setIntro }) {
  const [mouseDown, setMouseDown] = useState(false);
  const [mouseUp, setMouseUp] = useState(true);
  const [introHide, setIntroHide] = useState("");
  // const [introHide, setIntroHide] = useState("hide");
  const [opacity, setOpaicty] = useState(1);
  const [changeView, setChangeView] = useState(false);
  let [scale, setScale] = useState(1);

  let maxScale = 18;
  let minScale = 1;

  const holdBoxRef = useRef(null);

  const mouseDownHandle = () => {
    setMouseDown(true);
  };
  const mouseUpHandle = () => {
    setMouseUp(true);
    setMouseDown(false);
  };

  DownUseInterval(
    () => {
      setScale((prev) => (prev += 0.175));

      setOpaicty(1 - (scale - 1) / maxScale);
      if (opacity <= 0.06) setOpaicty(0);

      if (scale >= maxScale) setMouseDown(false);

      if (opacity <= 0.1) {
        setIntroHide("hide");
        setIntro("intro-hide");
      }
    },
    mouseDown ? 10 : null
  );
  UpUseInterval(
    () => {
      setScale((prev) => (prev -= 0.175));
      setOpaicty(1 - (scale - 1) / maxScale);
      if (scale <= minScale) setMouseUp(false);
    },
    mouseUp ? 10 : null
  );

  return (
    <div className={`introBox ${introHide}`}>
      <button
        className="holdBox"
        onMouseDown={mouseDownHandle}
        onMouseUp={mouseUpHandle}
        ref={holdBoxRef}
        style={{ transform: `scale(${scale})` }}
      >
        <h2 style={{ opacity: opacity }}>Hold</h2>
      </button>
      <div className="textBox" style={{ opacity: opacity }}>
        <i className="fa-solid fa-headphones"></i>
        <h2>Use HeadPhones</h2>
        <p>For better immersion in the world of drawing.</p>
        <p>use your favorite headphones.</p>
      </div>
    </div>
  );
}

export default Intro;
