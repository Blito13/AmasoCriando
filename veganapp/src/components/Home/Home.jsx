import React from "react";
import styles from "./Home.module.css";
import About from "../About/AboutUs";
import Carousel from "../Carousel/Carousel";
import Contact from "../Contact/Contact";
import Card from "../Cards/Card";
import {useDispatch} from "react-redux"
import { useEffect  , useState} from "react";
import cartas from "../../utils/utils.js";
import NavBar from "../NavBar/NavBar";

const Home = () => {
    return (
        <div className={styles.container}>

            <NavBar/>
            <div className = {styles.fragments}>
                <About></About>
            </div>
            <div>
                <Contact></Contact>
            </div>
            <div>
                <Carousel></Carousel>
            </div>
        </div>

    

        
    )
};
export default Home;