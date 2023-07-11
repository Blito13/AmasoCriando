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
    const [animated , setAnimated] =  useState(0);
    const handleNext =() =>{
        
    };
    const handlePrev =() =>{
        
    };
    return (
        <div>
             <About></About>
    <section  >
       
        <div className={styles.container}>
            <h2>Algunos de Nuestros Productos</h2>
            {
            cartas.map(e => 
                <div className={styles.card}>
                <h3>{e.texto}</h3>
               <img  className={styles.imagens}src={e.imgn} alt="pics" />
            </div> )
            }
           {/*  <h3>Brownies</h3>
            <div className={styles.card}>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam incidunt dignissimos velit aspernatur asperiores distinctio. Necessitatibus porro, cum nam earum explicabo excepturi vero facilis quibusdam repellat, dolorum reprehenderit odio quisquam.</p>
            </div>
            <h3>Baggles</h3>
            <div className={styles.card}>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sapiente aperiam esse, deserunt blanditiis similique temporibus nulla rem ab at nisi quisquam distinctio iusto id ea animi enim consequuntur recusandae!</p>
            </div> */}
        
        </div>

    </section>
    {/* Aca se debe renderizar el componente Contact */}
        </div>
    )
}
export default Home;