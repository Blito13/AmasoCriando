import React, { useState } from "react";
import styles from "./Carousel.module.css"
import { productos } from "../../utils/utils";

const Carousel = ()=>{
    return(
           <div className={styles.container}>
             <span className={styles.move}>
               <h1>100% Vegan Bakery</h1>
               <button className={styles.button}>Shop now</button>
             </span>
            </div>
    )
}
export default Carousel;