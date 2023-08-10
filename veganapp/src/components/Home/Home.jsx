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
            <h1>P.I.V</h1>
        </div> 
    )
};
export default Home;