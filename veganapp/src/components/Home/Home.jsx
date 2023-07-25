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
    const [varitono , setVaritono] = useState("-100%")  
    /* const [next , setNext]  = useState( { transform: "translateX(0%)"}) */
 
    const handleNext =() =>{
        setAnimated({
            marginLeft : `${varitono}`,
            transition:'2s'
        });
        console.log(varitono-100);
        setTimeout(() => {
           /*  setAnimated({
                marginLeft:"-200%"
            }) */
            setVaritono("-200%")
        }, 2000);
        
        //hacer css inline con el porcentaje de movimiento
    /* setNext(  { transform: "translate(-25%)" }); */
    /* let one= "translateX(-25%)";
    let two = "translateX(-50%)";
    let three = "translateX(-75%)";
       
    console.log(animated.transform)
    if(animated.transform === "translateX(-25%)"){
        setAnimated( { transform: `${two}`});
    }
    if(animated.transform === "translateX(-50%)"){
        setAnimated( { transform: `${three}`});
    }
    if (animated === false ){
        setAnimated( { transform: `${one}`});
    } */
   
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
           {/*  <h3>Brownies</h3>
            <div className={styles.card}>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam incidunt dignissimos velit aspernatur asperiores distinctio. Necessitatibus porro, cum nam earum explicabo excepturi vero facilis quibusdam repellat, dolorum reprehenderit odio quisquam.</p>
            </div>
            <h3>Baggles</h3>
            <div className={styles.card}>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sapiente aperiam esse, deserunt blanditiis similique temporibus nulla rem ab at nisi quisquam distinctio iusto id ea animi enim consequuntur recusandae!</p>
            </div> */}
        
        </div>

    

        
    )
}
export default Home;