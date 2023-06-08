import React from "react";
import "./how-it-works-style.css";
import Options from "../Options/options";
import register from "../../assets/register.png"
import fav from "../../assets/fav.png"
import listen from '../../assets/listen.png'
function Howworks() {
  return (
    <div>
      <div className="main">
        <div className="main-title">How it works</div>
        <div className="main-items">
            <img src={register} alt="" />
            <img src={fav} alt="" />
            <img src={listen} alt="" />
        </div>
        <div className="options-howworks">
          <Options className="options1 options" />
        </div>
      </div>
    </div>
  );
}
export default Howworks;
