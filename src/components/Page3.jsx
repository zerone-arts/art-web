import React from "react";
import "../assets/css/Page3.css";
import page3Bg from "../assets/img/page3-bg.png";
import page3BgTitle from "../assets/img/page3-bg-title.png";
import page3Object2Img from "../assets/img/page3-object1-img.png";
import page3ObjectMan from "../assets/img/page3-object2-1.png";
import page3ObjectGirl from "../assets/img/page3-object2-2.jpeg";
import page3Object3Img from "../assets/img/page3-object3-img.png";

function Page3(props) {
  return (
    <div className="p3-container">
      <div className="p3-bg">
        <img src={page3Bg} alt="page3Bg" />
      </div>
      <ul className="page3-topBar">
        <li>
          <ul className="page3-topBar-list1-logo">
            <li className="cresent"></li>
            <li className="halfmoon"></li>
            <li className="fullmoon"></li>
          </ul>
          <div id="page3-topBar-list1-title">
            <p>The main gallery</p>
            <p>emphasis on art</p>
          </div>
        </li>
        <li>
          <p>Main Font</p>
          <p>
            <span>Montserrat</span> Font
          </p>
        </li>
        <li>
          <p>Sub Font</p>
          <p>
            <span>Playfair</span> Font
          </p>
        </li>
        <li>
          <p>Source</p>
          <p>
            <span>Pinterest, unsplash</span>
          </p>
          <ul className="list4-moon">
            <li className="list4-halfmoon"></li>
            <li className="list4-cresent"></li>
          </ul>
        </li>
      </ul>
      <div className="p3-bg-title">
        <img src={page3BgTitle} alt="page3BgTitle" />
      </div>
      <div className="p3-pageBg"></div>
      <div className="p3-object1">
        <div className="p3-object1-num">01</div>
        <div className="p3-object1-man">
          <img src={page3ObjectMan} alt="man" />
          <div className="p3-object1-man-title">Andrew ChunSik</div>
          <div className="p3-object1-man-explain">
            <p>
              27 years old, <br />
              my occupation is a developer, <br />
              and I currently live in Jeju.
            </p>
          </div>
        </div>
        <div className="p3-object1-girl">
          <img src={page3ObjectGirl} alt="girl" />
          <div className="p3-object1-girl-title">Emma Jiwoo</div>
          <div className="p3-object1-girl-explain">
            <p>
              27 years old and <br />
              my occupation is a designer.
            </p>
          </div>
        </div>
      </div>
      <div className="p3-object2">
        <div className="p3-object2-imgBox">
          <img src={page3Object2Img} alt="img" />
        </div>
        <div className="p3-object2-title">Violet Chun sik</div>
        <div className="p3-object2-date">April 12, 2023</div>
        <div className="p3-object2-Topnumber">02</div>
        <div className="p3-object2-Bottomnumber">27</div>
        <div className="p3-object2-bottom-title">Never Not</div>
        <div className="p3-object2-left-bottom">
          <p>In my heart with the</p>
          <p>memories we made</p>
        </div>
      </div>

      <div className="p3-object3">
        <div className="p3-object3-imgBox">
          <div className="p3-object3-num">03</div>
          <div className="p3-object3-name">Emma.</div>
          <div className="p3-object3-explain">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </div>

          <img src={page3Object3Img} alt="object3Img" />
        </div>
        <div className="p3-object3-titleBox">
          <div className="p3-object3-titleBox-logo">
            <p>oow</p>
          </div>
          <div className="p3-object3-titleBox-center">
            <div>JIWOO</div>
            <p className="p3-object3-titleBox-center-caramel">
              ICE Caramel Macchiato
            </p>
            <p className="p3-object3-titleBox-center-americano">
              Ice Americano
            </p>
          </div>
          <div className="p3-object3-bottomLogo">
            <div className="p3-object3-bottomLogo-circle"></div>
            <div className="p3-object3-bottomLogo-color">#fcdb00</div>
          </div>
          <div className="p3-object3-titleBox-line"></div>
        </div>
      </div>
      <div className="p3-object4"></div>
    </div>
  );
}

export default Page3;
