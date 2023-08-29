import React from "react";
import styles from "./Carousel.module.css";
import { useEffect  , useState} from "react";
import {mock ,productos} from "../../utils/utils";

const Carousel = ()=>{
    return(
           <div className={styles.container}>
             <span className={styles.move}>
                {
                    productos.map(e => 
                        <img src={e.imgn} className={styles.image}></img>
                        )
                }
             </span>
            </div>
    )
}
export default Carousel;
