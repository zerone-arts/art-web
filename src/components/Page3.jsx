import React from "react";
import "../assets/css/Page3.css";
import page3Bg from "../assets/img/page3-bg.png";
import page3BgTitle from "../assets/img/page3-bg-title.png";
import page3Object2Img from "../assets/img/page3-object2-Img2.jpeg";
import page3ObjectMan from "../assets/img/page3-object2-1.png";
import page3ObjectGirl from "../assets/img/page3-object2-2.jpeg";
import page3Object3Img from "../assets/img/page3-object3-img.png";
import page3Object4Img from "../assets/img/page3-object4-img.png";
import page3Object5Img1 from "../assets/img/page2-object5-Img1.jpeg";
import page3Object5Img2 from "../assets/img/page2-object5-Img2.jpeg";
import page3Object6Sign from "../assets/img/page3-object6-sign2.png";
import page3Object6qr from "../assets/img/page3-object6-qr2.png";
import page3Object6Img2 from "../assets/img/page3-object6-img2.jpeg";

const object5TitleCircle = "Naci para conocerte. Luceat lux.";
const object5TitleCircleArr = Array.from(object5TitleCircle);

function Page3(props) {
  return (
    <div className="p3-container">
      <div className="p3-bg-anime">
        <div className="p3-bg-anime-circle"></div>
      </div>
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
        <div className="p3-object2-title">
          It's impossible <br />
          <span>but</span>
        </div>
        <div className="p3-object2-date">April 12, 2023</div>
        <div className="p3-object2-Topnumber">02</div>
        <div className="p3-object2-Bottomnumber">27</div>
        <div className="p3-object2-bottom-title">Never Not</div>
        <div className="p3-object2-left-bottom">
          <p>
            In my <span>heart</span> with the
          </p>
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

      <div className="p3-object5">
        <ul className="p3-object5-topBar">
          <li>
            <i className="fa-solid fa-magnifying-glass"></i>
          </li>
          <li>story</li>
          <li>feeds/post</li>
          <li>reels </li>
        </ul>
        <ul className="p3-object5-leftBar">
          <li>05</li>
          <li></li>
          <li>MINIMALIST TYPOGRAPHY</li>
          <li></li>
          <li>+</li>
          <li>+</li>
          <li>+</li>
        </ul>
        <div className="p3-object5-imgBox1">
          <img src={page3Object5Img1} alt="page3Object5Img1" />
        </div>
        <div className="p3-object5-imgBox2">
          <img src={page3Object5Img2} alt="page3Object5Img2" />
        </div>
        <ul className="p3-object5-textBox1">
          <li>
            Minimal
            <br />
            list
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi nemo
            odio, molestias, hic consequuntur amet recusandae eligendi quaerat
            error commodi accusantium.
          </li>
          <li>view more</li>
        </ul>
        <ul className="p3-object5-textBox2">
          <li>
            Typography<span>Stories</span>
          </li>
          <li>12/11/2023</li>
          <li>
            Instastory<span>Challenge</span>
          </li>
          <li>18:57 PM</li>
        </ul>

        <div className="p3-object5-rightTop">
          <i className="fa-solid fa-moon"></i>
        </div>
      </div>
      <div className="p3-object6">
        <div className="p3-object6-imgBox">
          <img src={page3Object6Img2} alt="Object6Img" />
        </div>
        <div className="p3-object6-titleBox">
          <div className="p3-object6-titleBox-circle">
            {object5TitleCircleArr.map((item, idx) => {
              return (
                <span key={idx} style={{ transform: `rotate(${idx * 9}deg)` }}>
                  {item}
                </span>
              );
            })}
          </div>
          <div className="p3-object6-titleBox-title">Yarrow</div>
        </div>
        <div className="p3-object6-sign">
          <img src={page3Object6Sign} alt="sign" />
        </div>
        <ul className="p3-object6-leftText">
          <li>Photography</li>
          <li>Illustration</li>
          <li>Daily Instagram</li>
        </ul>
        <ul className="p3-object6-rightText">
          <li>Typography</li>
          <li></li>
          <li>
            <span></span>
            <span></span>
            <span></span>
          </li>
        </ul>
        <div className="p3-object6-qrcode">
          <img src={page3Object6qr} alt="qrcode" />
        </div>
        <ul className="p3-object6-iconLogo">
          <li>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-pinterest-p"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="p3-object4">
        <img src={page3Object4Img} alt="page3Object4Img" />
        <ul className="p3-object4-topBar">
          <li>illust</li>
          <li>04</li>
        </ul>
        <ul className="p3-object4-date">
          <li>2023</li>
          <li>December 10</li>
        </ul>
        <ul className="p3-object4-profile">
          <li>
            <span>An</span>drew
          </li>
          <li>chunsik</li>
          <li>
            Lorem ipsum dolor,
            <br /> sit amet consectetur <br />
            adipisicing elit. Quibusdam adipisci dolore saepe tempore corrupti
            assumenda. <br />
            Lorem ipsum dolor
            <br /> sit amet.
          </li>
        </ul>
        <div className="p3-object4-rightLine"></div>
        <ul className="p3-object4-colorBlock">
          <li>White</li>
          <li>
            <div>illustration</div>
            <img src={page3Object4Img} alt="page3Object4Img" />
          </li>
          <li></li>
        </ul>
        <div className="p3-object4-bottombar">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non deleniti
          voluptates, nihil corporis modi dolor!
        </div>
      </div>
    </div>
  );
}

export default Page3;
