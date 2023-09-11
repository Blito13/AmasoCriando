import React, { useState  , useEffect} from "react";
import styles from "./Carousel.module.css"
import { productos } from "../../utils/utils";
const Carousel = ()=>{
  const [animation , setAnimation] = useState("");
  const [index , setIndex] = useState("");
console.log(productos.slice(2,4))
    return(
           <div className={styles.container}>
            <div className={styles.content}>
          {   <div className={styles.static}>
                <h1>100% vegan bakery</h1>
                <p>
                  Nuestros productos estan realizados con harina integral organica , azucar mascabo y leches vegetales ,
                  en su mayoria elaborados con productos sin refinar y 100% veganos.
                </p>
             </div>}
             <div className={styles.move}>
           <div className={styles.first}>
              {productos.slice(0,2).map( e => 
              <img className={styles.image}src={e.imgn} alt="" />
             ) }
              </div> 
             <div className={styles.second}>
           {productos.slice(2,4).map( e => 
              <img className={styles.image}src={e.imgn} alt="" />
              )}
              </div>
            </div>
             </div>
            </div>
    )
}
export default Carousel;