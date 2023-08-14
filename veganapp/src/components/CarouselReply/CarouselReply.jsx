import React, { useState } from "react";
import styles from "./CarouselReply.module.css";
import {mock ,productos} from "../../utils/utils";

function CarouselReply ({props}) {
console.log(productos)
    const [currentimage , setCurrentImage] = useState(0);
    const [animated , setAnimated] =  useState("");
    const nextImage = (e) => {
      e.preventDefault();
      setCurrentImage((currentimage + 1) % productos.length); 
      setAnimated({marginRight: "-200%"})
      setTimeout(()=>{
        setAnimated({transition:'2s' , marginLeft:"0%"});
      },10)
    };
    
    const prevImage = (e) =>{
      e.preventDefault();
      setCurrentImage((currentimage-1+productos.length) % productos.length);
      setAnimated({marginLeft: "-200%"})
      setTimeout(()=>{
        setAnimated({transition:'2s' , marginRight:"0%"});
      },10)
    }; 
    
    return (
    <div className={styles.carousel}>
      <div className={styles.imgCont}/*  style ={animated ? animated : null} */>
      <img className = {styles.carouselImage}  style ={animated ? animated : null} src = {productos[currentimage]["imgn"]} alt="carusel"/>
      </div>
      <button className={styles.prevButton} onClick={prevImage}>
        Prev
      </button>
      <button className={styles.nextButton} onClick={nextImage}>
        Next
      </button>
    </div>
    )
    };
    export default CarouselReply;