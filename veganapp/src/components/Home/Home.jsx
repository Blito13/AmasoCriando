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
    const [animated , setAnimated] =  useState(false);
    const handleNext =() =>{
    setAnimated(`${styles.moveNext}`);
    setTimeout(() => {
        console.log("Delayed for 1 second.");
      }, "1000");
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
            <div className={`${styles.movement} ${animated.length > 0 ?animated :""}`}>
            {
            cartas.map(e => 
               <div key ={e.texto}className={styles.card}>
                 <img  className={styles.imagens }src={e.imgn} alt="pics" />
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