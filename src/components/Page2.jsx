import React from "react";
import "../assets/css/Page2.css";
import Simg from "../assets/img/page2-object2-3.png";
import Mimg from "../assets/img/page2-object2-2.jpeg";
import Limg from "../assets/img/page2-object2-1.png";
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
        <div id="page2-object3"></div>
        <div id="page2-object4"></div>
        <div id="page2-object5"></div>
      </div>
    </div>
  );
}

export default Page2;
