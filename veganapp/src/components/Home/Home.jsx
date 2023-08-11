import React from "react";
import styles from "./Home.module.css"
import About from "../About/AboutUs";
import Contact from "../Contact/Contact";
import { useEffect  , useState , useRef} from "react";
import Carousel from "../Carousel/Carousel";
import NavBar from "../NavBar/NavBar";
import * as AllImages from '../../media/realMedia/indexMedia.js'

const Home = () => {
   console.log(AllImages);
    return (
        <div className={styles.container}>
            
            <About/>
        
            <Carousel></Carousel>
            
        </div> 
    )
};
export default Home;