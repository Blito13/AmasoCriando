import React from "react";
import styles from "./Home.module.css"
import About from "../About/AboutUs";
import Contact from "../Contact/Contact";
import { useEffect  , useState , useRef} from "react";
import Carousel from "../Carousel/Carousel";


const Home = () => {

    return (
   
        <div className={styles.container}>
            <About/>
            <Carousel/>
            <Contact/>
        </div> 
    )
};
export default Home;