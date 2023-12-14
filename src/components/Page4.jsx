import React, { useState, useEffect, useRef } from "react";
import "../assets/css/Page4.css";
import { DownUseInterval } from "../assets/utils";

function Page4(props) {
  const slideUlRef = useRef(null);
  const [isPlay, setIsPlay] = useState(true);
  const [playHover, setPlayHover] = useState(false);
  const [px, setPx] = useState(0);

  console.log(px);
  let ulWidth = slideUlRef.current?.clientWidth;
  console.log(ulWidth);

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
          style={{ transform: `translateX(-${px}px)` }}
        >
          <li className="page4-object1">
            <ul className="page4-objectImgWrapper">
              <li className="page-object1-left">왼쪽</li>
              <li className="page-object1-center">중간</li>
              <li className="page-object1-right">오른쪽</li>
            </ul>
          </li>
          <li className="page4-object2"></li>
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
