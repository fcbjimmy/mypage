import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { SiJavascript, SiCss3, SiReact } from "react-icons/si";

const Logos = () => {
  const logo = [
    { title: "HTML", logo: <AiFillHtml5 /> },
    { title: "CSS", logo: <SiCss3 /> },
    { title: "Javascript", logo: <SiJavascript /> },
    { title: "React", logo: <SiReact /> },
  ];

  return (
    <div>
      {logo.map((elem, index) => {
        <div key={index}>
          <p>{elem.title}</p>
          <div>{elem.logo}</div>
        </div>;
      })}
    </div>
  );
};

export default Logos;
