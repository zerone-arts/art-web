import React from "react";
import "../assets/css/Page3.css";
function Page3(props) {
  return (
    <div className="p3-container">
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
          <p>Category</p>
          <p>
            <span>Collections</span> Galleries
          </p>
          <ul className="list4-moon">
            <li className="list4-halfmoon"></li>
            <li className="list4-cresent"></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Page3;
