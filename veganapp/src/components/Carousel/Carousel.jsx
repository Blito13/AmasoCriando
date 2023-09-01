import React, { useState } from "react";
import styles from "./Carousel.module.css"
import { productos } from "../../utils/utils";

function Carousel () {
const images = productos;
const [currentimage , setCurrentImage] = useState(0);
const [animationDirection , setAnimationDirection] = useState(false);
const [opac , setOpac] = useState("");
const nextImage = (e) => {
  e.preventDefault();
  setCurrentImage((currentimage + 1) % images.length);
  setAnimationDirection(`${styles.animate}`);
  setTimeout(()=>{
    setAnimationDirection(false);
  },1000);
};

const prevImage = () =>{ 
  setCurrentImage((currentimage-1+images.length) % images.length);
  setAnimationDirection(`${styles.animatedBack}`);
  setTimeout(()=>{
    setAnimationDirection(false);
  },1000);
}; 

return (
<div className={styles.carousel}>
  <button className={styles.prevButton} onClick={e=>prevImage(e)}>
    Prev
  </button>
  <div className={styles.imgCont}>
  <img className = {`${styles.carouselImage} ${animationDirection}`} style={{opac}} src = {images[currentimage]["imgn"]} alt="carusel"/>
  </div>
  <button className={styles.nextButton} onClick={nextImage}>
    Next
  </button>
</div>
)
}
export default Carousel;