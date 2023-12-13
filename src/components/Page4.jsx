import React, { useState, useEffect } from "react";
import "../assets/css/Page4.css";
const page4List = [
  { no: 1, title: "Photography" },
  { no: 2, title: "Illustration" },
  { no: 3, title: "Photography" },
  { no: 4, title: "Illustration" },
  { no: 6, title: "Photography" },
  { no: 7, title: "Illustration" },
  { no: 8, title: "Illustration" },
  { no: 9, title: "Illustration" },
  { no: 10, title: "Illustration" },
];
// const page4Lists = [...page4List];

// page4Lists.unshift(...page4List);
function Page4(props) {
  return (
    <div className="p4-container">
      <div className="p4-title">Art Magazine</div>
      <div className="p4-slide-Wrapper">
        <ul>
          {page4List.map((item, idx) => {
            return <li key={idx}>{item.no}</li>;
          })}
        </ul>
        <ul>
          {page4List.map((item, idx) => {
            return <li key={idx}>{item.no}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Page4;
