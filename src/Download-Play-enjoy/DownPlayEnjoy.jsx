import React from "react";
import "./down-play-enjoy-style.css";
import iphones from "./img/iphones.png";
function DownPlayEnjoy() {
  return (
    <div>
      <div className="Down-Play-Enjoy-main">
        <div className="Down-Play-Enjoy-left-content">
          <div className="bg-yellow-line"></div>
          <div className="content">
            <div className="title-Down-Play-Enjoy">
              <p>Download, Play, Enjoy.</p>
              <p className="second-title">Better than Spotify.</p>
              <p className="description">
                White Gold began gaining popularity in the early 1900’s as an
                alternative to platinum. Platinum was steadily becoming more
                fashionable, but because of its rarity many could not afford it.
                Then, during World War II the government put a ban on the use of
                Platinum for any non-military functions and the demand for White
                Gold skyrocketed.
              </p>
            </div>
          </div>
        </div>
        <div className="Down-Play-Enjoy-right-content">
          <img src={iphones} alt="" />
        </div>
      </div>
    </div>
  );
}
export default DownPlayEnjoy;
