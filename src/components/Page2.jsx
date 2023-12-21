import React, { useRef, useEffect, useState } from "react";
import "../assets/css/Page2.css";
import Simg from "../assets/img/page2-object2-3.png";
import Mimg from "../assets/img/page2-object2-2.jpeg";
import Limg from "../assets/img/page2-object2-1.png";
import object4Img1 from "../assets/img/page2-object4-1.jpeg";
import object4Img2 from "../assets/img/page2-object4-2.jpeg";
import object4Img3 from "../assets/img/page2-object4-3.jpeg";
import object4Img4 from "../assets/img/page2-object4-4.jpeg";
import object4Img5 from "../assets/img/page2-object4-5.jpeg";
import object4Img6 from "../assets/img/page2-object4-6.jpeg";
import object4Img7 from "../assets/img/page2-object4-7.jpeg";
import object4Img8 from "../assets/img/page2-object4-8.jpeg";

function Page2({ mouseX, mouseY }) {
  const page2Object1Ref = useRef(null);
  const page2Object2Ref = useRef(null);
  const page2Object3Ref = useRef(null);
  const page2Object4Ref = useRef(null);
  const Page2Ref = useRef(null);
  const object4Img1Ref = useRef(null);
  const object4Img2Ref = useRef(null);
  const object4Img3Ref = useRef(null);
  const object4Img4Ref = useRef(null);
  const object4Img5Ref = useRef(null);
  const object4Img6Ref = useRef(null);
  const object4Img7Ref = useRef(null);
  const object4Img8Ref = useRef(null);

  const [pageX, setPageX] = useState(null);
  const [pageY, setPageY] = useState(null);

  const onScroll = () => {
    if (window.scrollY > page2Object1Ref.current?.getBoundingClientRect().top) {
      page2Object1Ref.current.style.transform = "translateX(0%)";
    }
  };

  useEffect(() => {
    //bg
    page2Object2Ref.current.style.transform = `translate(${
      (mouseX - pageX) * -0.03
    }px,${(mouseY - pageY) * -0.03}px)`;
    page2Object3Ref.current.style.transform = `translate(${
      (mouseX - pageX) * 0.03
    }px,${(mouseY - pageY) * 0.03}px)`;
    page2Object4Ref.current.style.transform = `translate(${
      (mouseX - pageX) * -0.02
    }px,${(mouseY - pageY) * -0.02}px)`;

    object4Img2Ref.current.style.transform = `translate(${
      (mouseX - pageX) * -0.04
    }px,${(mouseY - pageY) * -0.04}px)`;
    object4Img3Ref.current.style.transform = `translate(${
      (mouseX - pageX) * -0.04
    }px,${(mouseY - pageY) * -0.04}px)`;
    object4Img4Ref.current.style.transform = `translate(${
      (mouseX - pageX) * -0.04
    }px,${(mouseY - pageY) * -0.04}px)`;
    object4Img5Ref.current.style.transform = `translate(${
      (mouseX - pageX) * -0.04
    }px,${(mouseY - pageY) * -0.04}px)`;
    object4Img6Ref.current.style.transform = `translate(${
      (mouseX - pageX) * -0.04
    }px,${(mouseY - pageY) * -0.04}px)`;
    object4Img7Ref.current.style.transform = `translate(${
      (mouseX - pageX) * -0.04
    }px,${(mouseY - pageY) * -0.04}px)`;
    object4Img8Ref.current.style.transform = `translate(${
      (mouseX - pageX) * -0.04
    }px,${(mouseY - pageY) * -0.04}px)`;
  }, [mouseX, mouseY]);

  useEffect(() => {
    setPageX(Page2Ref.current.clientWidth / 2);
    setPageY(Page2Ref.current.clientHeight / 2);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  // console.log(page2Object1Ref.current?.getBoundingClientRect().top);
  return (
    <div className="p2-container" ref={Page2Ref}>
      <div className="page2-objects">
        <div
          id="page2-object1"
          ref={page2Object1Ref}
          style={{
            transform: "translateX(100%)",
          }}
        >
          <ul>
            <li>
              <p>
                Large gallery with <br></br>a shop inside
              </p>
            </li>
            <li>
              <a>Main Font</a>
              <h4>Montserrat</h4>
            </li>
            <li>
              <a>Hellow</a>
              <h4>
                My World <span>:)</span>
              </h4>
            </li>
            <li>
              <a>Category</a>
              <h4>
                Collections. <span>store</span>
              </h4>
            </li>
          </ul>
          <ul>
            <li>
              <p>
                Large gallery with <br></br>a shop inside
              </p>
            </li>
            <li>
              <a>Main Font</a>
              <h4>Montserrat</h4>
            </li>
            <li>
              <a>Hellow</a>
              <h4>
                My World <span>:)</span>
              </h4>
            </li>
            <li>
              <a>Category</a>
              <h4>
                Collections. <span>store</span>
              </h4>
            </li>
          </ul>
          <div className="page2-object1-backgroundText">zero</div>
          <div className="page2-object1-titleText">
            <p>
              Art galleries <br></br>and paintinings
            </p>
          </div>
          <div className="page2-object1-titleText2">
            <p>
              Art galleries <br></br>and paintinings
            </p>
          </div>
        </div>
        <div
          id="page2-object2"
          ref={page2Object2Ref}
          style={{
            transform: "translateX(-80%)",
          }}
        >
          <div className="page2-object2-bg">
            <div className="page2-object2-bg-shapes-Square">
              <ul className="page2-object2-bg-shapes-Square-text">
                <li>
                  <p>September 11</p>
                  <p> - October 24, 2018</p>
                </li>
                <li>
                  <p>Director</p>
                  <p> - Young Il Kim</p>
                </li>
              </ul>
            </div>
            <div className="page2-object2-bg-shapes-circle1"></div>
            <div className="page2-object2-bg-shapes-circle2"></div>
            <div className="page2-object2-bg-shapes-Square-left"></div>
            <div className="page2-object2-bg-shapes-Square-right"></div>
            <div className="page2-object2-bg-text">zero</div>
          </div>
          <div className="page2-object2-topBar">
            <div className="page2-object2-topBar-title">
              <h2>Space Gray</h2>
              <i className="fa-solid fa-arrow-right"></i>
            </div>

            <ul>
              <li>
                <p>Ticket</p>
                <p>
                  $20 online <span>- $30 offline</span>
                </p>
              </li>
              <li>
                <p>Time line</p>
                <p>
                  december 25 <span>- AM 00 - AM 00</span>
                </p>
              </li>
              <li>
                <p>Adress</p>
                <p>10-5, Geonju-ro 4-gil</p>
              </li>
            </ul>
          </div>
          <div className="page2-object2-bottom-title">
            <h2>Peeling an Apple</h2>
          </div>
          <div className="page2-object2-s-photo">
            <div className="page2-object2-s-photo-imgBox">
              <img src={Simg} alt="Simg" />
            </div>
            <ul>
              <li>Galleries</li>
              <li>Artists</li>
              <li>Editorial</li>
            </ul>
          </div>
          <div className="page2-object2-l-photo">
            <img src={Limg} alt="Limg" />
            <p>natural titanium</p>
          </div>
          <div className="page2-object2-m-photo">
            <img src={Mimg} alt="Mimg" />
          </div>
        </div>
        <div
          id="page2-object3"
          ref={page2Object3Ref}
          style={{
            transform: "translateX(80%)",
          }}
        >
          <div className="page2-object3-bg">
            <div className="page2-object3-bg-logo">Z</div>
          </div>
          <ul className="page2-object3-topBar">
            <li>001</li>
            <li>From KOR Jeju</li>
            <li>Gallery</li>
          </ul>
          <div className="page2-object3-topBar-next">with art love !</div>
          <div className="page2-object3-title">
            <p>
              Next level
              <br></br>Fairs
            </p>
          </div>
          <div className="page2-object3-line"></div>
          <div className="page2-object3-stitle">Private gallery</div>
          <ul className="page2-object3-bottomBar">
            <li>Stages</li>
            <li>Exhibitions</li>
            <li>Installations</li>
          </ul>
        </div>
        <div
          id="page2-object4"
          ref={page2Object4Ref}
          style={{
            transform: "translateX(-80%)",
          }}
        >
          <div className="page2-object4-bg">
            <div className="page2-object4-bg-shapes-Square">
              <div className="page2-object4-bg-shapes-Square-text1">
                <p>September 11</p>
                <p> - October 24, 2018</p>
              </div>
              <div className="page2-object4-bg-shapes-Square-text2">
                <p>Zero One Kim Gallery</p>
                <p>10-5, Geonju-ro 4-gil, Jeju-si, Jeju-do, KOR</p>
              </div>
            </div>
            <div className="page2-object4-bg-shapes-circle1"></div>
            <div className="page2-object4-bg-shapes-circle2"></div>
            <div className="page2-object4-bg-shapes-Square-left"></div>
            <div className="page2-object4-bg-shapes-Square-right"></div>
          </div>
          <div className="page2-object4-textBox">
            <div className="page2-object4-textBox-topBar">
              <div className="page2-object4-textBox-topBar-left">
                Small Cities
              </div>
              <div className="page2-object4-textBox-topBar-right">
                <p>City of Calgary</p>
                <p>It's been a big week</p>
                <p>in art, With Jim</p>
                <p>Pavilidis</p>
              </div>
            </div>
            <div className="page2-object4-textBox-bottomBar">
              <div className="page2-object4-textBox-bottomBar-left">
                <p> Bigger Art Shows</p>
              </div>
              <div className="page2-object4-textBox-bottomBar-right">
                <p>It`s art and we're proud: 24-hour hummers</p>
                <p>drown out cruel gibes</p>
              </div>
            </div>
            <div className="page2-object4-textBox-center">
              <div>
                We <br />
                have the most <br />
                mobile exhibitions
              </div>
              <div>
                We <br />
                have the most <br />
                mobile exhibitions
              </div>
              <div>
                We <br />
                have the most <br />
                mobile exhibitions
              </div>
              <div>
                We <br />
                have the most <br />
                mobile exhibitions
              </div>
              <div>
                We <br />
                have the most <br />
                mobile exhibitions
              </div>
            </div>
            <div className="page2-object4-imgBox">
              <ul>
                <li ref={object4Img1Ref}>
                  <img src={object4Img1} alt="object4Img1" />
                </li>
                <li ref={object4Img2Ref}>
                  <img src={object4Img2} alt="object4Img2" />
                </li>
                <li ref={object4Img3Ref}>
                  <img src={object4Img3} alt="object4Img3" />
                </li>

                <li ref={object4Img4Ref}>
                  <img src={object4Img7} alt="object4Img4" />
                </li>
                <li ref={object4Img5Ref}>
                  <img src={object4Img5} alt="object4Img5" />
                </li>
                <li ref={object4Img6Ref}>
                  <img src={object4Img6} alt="object4Img6" />
                </li>
                <li ref={object4Img7Ref}>
                  <img src={object4Img4} alt="object4Img7" />
                </li>
                <li ref={object4Img8Ref}>
                  <img src={object4Img8} alt="object4Img8" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="page2-bottomBg"></div>
      </div>
    </div>
  );
}

export default Page2;
