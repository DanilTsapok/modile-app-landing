import React from "react";
import "./bg-style.css";
import iphone from "../../assets/iphone.png";
import Options from "../Options/options";



function Bg() {
  return (
    <div>
      <div className="bg">
        <div className="bg-left-content">
          <div className="bg-title-mashApp">
            <p>MeshApp -</p>
          </div>
          <div className="bg-second-title-mashApp">
            <p>Play Songs Like Never Before.</p>
          </div>
          <div className="bg-line"></div>
          <div className="description">
            Don’t leave your shopping to the last minute. The more time you have
            to shop around, the more you can negotiate.
          </div>
          <Options className="options" />
        </div>
        <div className='bg-right-content' id="image">
          <img src={iphone} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Bg;
