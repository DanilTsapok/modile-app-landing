import React, { useEffect } from "react";
import "./how-it-works-style.css";
import Options from "../Options/options";
import register from "../../assets/register.png";
import fav from "../../assets/fav.png";
import listen from "../../assets/listen.png";

const Howworks = () => {
  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const img = document.querySelector(".Down-Play-Enjoy-right-content");
      const img_phone = document.querySelector('#image');
      const howworks=document.querySelector('#main-items');
      const yellow_line= document.querySelector('.bg-yellow-line');
      console.log(yellow_line)
      console.log(img_phone)
      // console.log(img);
      console.log(currentScrollY)
      if (currentScrollY > 800 && currentScrollY < 3000) {
        img.classList.add("anim");
       
      } else {
        img.classList.remove("anim");
        howworks.classList.remove("anim");
      }
      if (currentScrollY > 0 && currentScrollY <500) {
        img_phone.classList.add("anim_phone");
        
      } 
      if (currentScrollY >500 || currentScrollY <10){
        img_phone.classList.remove("anim_phone");
        
      }
      prevScrollY = currentScrollY;

      if (currentScrollY>50){

        howworks.classList.add("anim");
      }

      if (currentScrollY >600 ){
        yellow_line.style.transition= '20s ease ';
        yellow_line.style.height='100%';
      }
    };



    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="main">
        <div className="main-title">How it works</div>
        <div className="main-items" id='main-items'>
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
};
export default Howworks;
