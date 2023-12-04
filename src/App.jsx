import { useState, useRef, useEffect } from "react";
import "./App.css";
import Intro from "./components/Intro";
import Page1 from "./components/Page1";
import gsap from "gsap";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";

function App() {
  const [mouseX, setMouseX] = useState(null);
  const [mouseY, setMouseY] = useState(null);
  const [changeView, setChangeView] = useState(false);
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const waveRef = useRef(null);

  const AppRef = useRef(null);
  const canvasRef = useRef(null);

  const [intro, setIntro] = useState("intro-visible");
  // const [intro, setIntro] = useState("intro-hide");
  const [waveActive, setWaveActive] = useState("hide");
  const [mouseDown, setMouseDown] = useState(false);

  const moveHandle = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
    innerRef.current.style.top = e.clientY + "px";
    innerRef.current.style.left = e.clientX + "px";

    gsap.to(outerRef.current, {
      left: e.clientX + "px",
      top: e.clientY + "px",
      duration: 0.5,
    });
  };
  const downHandle = (e) => {
    setMouseDown(true);
    console.log("down");
    innerRef.current.style.transform = " translate(-50%, -50%) scale(0.7)";
    outerRef.current.style.transform = " translate(-50%, -50%) scale(0.5)";

    waveRef.current.style.top = e.clientY + "px";
    waveRef.current.style.left = e.clientX + "px";
    setWaveActive("");
  };

  const upHandle = (e) => {
    if (mouseDown) {
      console.log("up");
      setWaveActive("active");
      innerRef.current.style.transform = " translate(-50%, -50%) scale(1)";
      outerRef.current.style.transform = " translate(-50%, -50%) scale(1)";
    }
  };
  console.log(intro);
  return (
    <div
      className={`App ${intro}`}
      onMouseMove={(e) => moveHandle(e)}
      onMouseDown={(e) => downHandle(e)}
      onMouseUp={(e) => upHandle(e)}
      ref={AppRef}
    >
      <div className="mouseBox">
        <div className={`wave ${waveActive}`} ref={waveRef}></div>
        <div className="outer" ref={outerRef}></div>
        <div className="inner" ref={innerRef}></div>
      </div>
      <Intro setIntro={setIntro} />
      <Page1 mouseX={mouseX} mouseY={mouseY} intro={intro} />
      <Page2 />
      <Page3 />
    </div>
  );
}

export default App;
