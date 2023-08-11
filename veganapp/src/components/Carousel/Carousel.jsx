import React from "react";
import styles from "./Carousel.module.css";
import { useEffect  , useState} from "react";
import {mock ,productos} from "../../utils/utils";

const Carousel = ()=>{
    const [animated , setAnimated] =  useState({ transition:'2s', marginLeft : "0%"});
    const [variation , setVariation] = useState("0%");  

    const handleNext =(e) =>{
        e.preventDefault();
        if(variation === "-300%"){
           return
        }else{
            setAnimated({
                marginLeft : `${parseInt(variation)-100}%`,
                transition:'2s'
            });
       setVariation(`${parseInt(variation)-100}%`)
       console.log(animated , "NEXTT")
        }
    };
    
    const handlePrev =(e) =>{
        e.preventDefault();
        if(variation === "0%"){
            return
         }else{
             setAnimated({
                 marginLeft : `${parseInt(variation)+100}%`,
                 transition:'2s'
             });
             setVariation(`${parseInt(variation)+100}%`)
            console.log(animated, "PPRREV")
         }
        
    };
    return(
        <div id="contact" className = {styles.container}>
         
         <button  className={styles.buttons} onClick={e=>{handlePrev(e)}}>
                prev
            </button>
           <div className={styles.cardContainer}>
            <div className={styles.movement } style = {animated? animated : null}>
            {
            productos.map(e => 
               <div key = {e.texto}className={styles.card}>
                 <img key = {e} className={styles.imagens}src={e.imgn} alt="pics" />
                </div> 
               )
            };
             </div>
            </div> 
            <button className={styles.buttons} onClick={e=> {handleNext(e)}}>
                next
            </button>
        </div>
    )
}
export default Carousel;
