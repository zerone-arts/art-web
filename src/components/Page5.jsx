import React, { useEffect, useRef, useState } from "react";
import "../assets/css/Page5.css";
import page5Object1Img from "../assets/img/p5-object1-img.png";
function Page5(props) {
  const [page5Start, setPage5Start] = useState("");
  const [page5Object2Start, setPage5Object2Start] = useState("");
  const page5Ref = useRef(null);
  const page5Object2Ref = useRef(null);

  const menuBar = new Array(9).fill("");

  const onScroll = () => {
    if (page5Ref.current?.getBoundingClientRect().top > 0) {
      setPage5Start("");
    } else {
      setPage5Start("active");
    }

    if (page5Object2Ref.current?.getBoundingClientRect().top - 200 > 0) {
      setPage5Object2Start("");
    } else {
      setPage5Object2Start("page2Active");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={`p5-container ${page5Start} ${page5Object2Start}`}
      ref={page5Ref}
    >
      <div className={`p5-bgLight ${page5Start}`}></div>
      <div className="p5-object1">
        <div className={`p5-object1-circle ${page5Start}`}></div>
        <img
          className={`p5-object1-img ${page5Start}`}
          src={page5Object1Img}
          alt="object1-img"
        />
        <ul className={`p5-object1-topBar ${page5Start}`}>
          <li>ZEROART</li>
          <li>home</li>
          <li>about</li>
          <li>products</li>
          <li>contact</li>

          <li className={`p5-object1-menu ${page5Start}`}>
            {menuBar.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={`p5-object1-menu-item ${page5Start}`}
                ></div>
              );
            })}
          </li>
        </ul>
        <div className={`p5-object1-title ${page5Start}`}>
          <h2>
            Black
            <br /> and White <br />
            <span>Art</span>
          </h2>
        </div>
        <div className={`p5-object1-text ${page5Start}`}>
          <p>Lorem ipsum dolor sit,</p>
          <p>amet consectetur.</p>
          <p> Necessitatibus enim </p>
          <p>maxime quod molestias.</p>
        </div>
      </div>
      <div
        className={`p5-object2 ${page5Object2Start}`}
        ref={page5Object2Ref}
      ></div>
    </div>
  );
}

export default Page5;
