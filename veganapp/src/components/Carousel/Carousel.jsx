import React, { useState  , useEffect} from "react";
import styles from "./Carousel.module.css"
import { productos } from "../../utils/utils";
const Carousel = ()=>{
  const [animation , setAnimation] = useState("");
  const [index , setIndex] = useState("");

    return(
           <div className={styles.container}>
            <div className={styles.prueva}>
             <div className={styles.move}>
                <h1>100% vegan bakery</h1>
                <p>
                  Nuestros productos estan realizados con harina integral organica , azucar mascabo y leches vegetales ,
                  en su mayoria elaborados con productos sin refinar y 100% veganos.
                </p>
             </div>
             {productos.map( e => 
              <img className={styles.image} /* style ={{transition :"2s" ,left: "1px"}}  */src={e.imgn} alt="" />
             )}
            </div>
            </div>
    )
}
export default Carousel;