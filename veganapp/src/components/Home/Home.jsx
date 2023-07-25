import React from "react";
import bagels from "../../media/baggles.jpg" 
import styles from "./Home.module.css"
import About from "../About/AboutUs";
import Card from "../Cards/Card";
import {useDispatch} from "react-redux"
import { useEffect  , useState} from "react";
import cartas from "../../utils/utils.js";


const Home = () => {
    const [current , setCurrent] = useState(0);
    const [animated , setAnimated] =  useState({ transition:'2s'});
    const [variation , setVariation] = useState("-100%");  
   
    const handleNext =() =>{
        setAnimated({
            marginLeft : `${variation}`,
            transition:'2s'
        });
        console.log(variation);
        setTimeout(() => {
            if(variation === "-300%" ){
                setVariation("0%")
            }else {
                setVariation(`${parseInt(variation)-100}%`);
            }
        }, 2000);
   
    };
    
    const handlePrev =() =>{
    setAnimated(`${styles.animatePrev}`);
    setTimeout(() => {
        console.log("Delayed for 1 second.");
      }, "1000");
    };
    return (
   
        <div className={styles.container}>
             <About></About>

       
            <h2>Algunos de Nuestros Productos</h2>
            <button  className={styles.buttons} onClick={handlePrev}>
                prev
            </button>
           <div className={styles.cardContainer}>
            <div className={styles.movement } style = {animated}>
            {
            cartas.map(e => 
               <div key = {e.texto}className={styles.card}>
                 <img  className={styles.imagens /* condional */}src={e.imgn} alt="pics" />
                </div> 
               )
            };
             </div>
            </div> 
            <button className={styles.buttons} onClick={handleNext}>
                next
            </button>  
        </div>

    

        
    )
};
export default Home;