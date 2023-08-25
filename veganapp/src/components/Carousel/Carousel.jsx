import React from "react";
import styles from "./Carousel.module.css";
import { useEffect  , useState} from "react";
import {mock ,productos} from "../../utils/utils";

const Carousel = ()=>{

    return(
        
           <div className={styles.container}>
            <span className={styles.prueva}></span>
             <span className={styles.move}></span>
             <span className={styles.movement }></span>
        </div>
    )
}
export default Carousel;
