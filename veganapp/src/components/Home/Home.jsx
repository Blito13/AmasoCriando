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
    return (
   
        <div className={styles.container}>
             <About></About>

       
            <h2>Algunos de Nuestros Productos</h2>
            <button  className={styles.buttons} onClick={e=>{handlePrev(e)}}>
                prev
            </button>
           <div className={styles.cardContainer}>
            <div className={styles.movement } style = {animated? animated : null}>
            {
            cartas.map(e => 
               <div key = {e.texto}className={styles.card}>
                 <img  className={styles.imagens}src={e.imgn} alt="pics" />
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
};
export default Home;