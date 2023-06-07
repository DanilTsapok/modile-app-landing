import React from "react";
import "./options-style.css";

import icon_apple from "./img/apple logo.png";
import icon_google_play from "./img/google-play.png";

const Options=(props)=>{
    return(
        <div>
            <div className={`${props.className}`}>
            <div className="App-Store">
              <img src={icon_apple} alt="" />
              <a href="#">App Store</a>
            </div>
            <div className="Google-play">
              <img src={icon_google_play} alt="" />
              <a href="#">Google-play</a>
            </div>
          </div>
        </div>
    )
}
export default Options