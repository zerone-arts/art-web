import React from "react";
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

function Page2(props) {
  return (
    <div className="p2-container">
      <div className="page2-objects">
        <div id="page2-object1">
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
        <div id="page2-object2">
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
              <i class="fa-solid fa-arrow-right"></i>
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
        <div id="page2-object3">
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
        <div id="page2-object4">
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
                <li>
                  <img src={object4Img1} alt="object4Img1" />
                </li>
                <li>
                  <img src={object4Img2} alt="object4Img2" />
                </li>
                <li>
                  <img src={object4Img3} alt="object4Img3" />
                </li>

                <li>
                  <img src={object4Img7} alt="object4Img4" />
                </li>
                <li>
                  <img src={object4Img5} alt="object4Img5" />
                </li>
                <li>
                  <img src={object4Img6} alt="object4Img6" />
                </li>
                <li>
                  <img src={object4Img4} alt="object4Img7" />
                </li>
                <li>
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
