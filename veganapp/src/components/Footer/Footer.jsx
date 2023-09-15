import React from "react";
import styles from "./Footer.module.css";
import { useState , useRef } from "react";
import emailjs from '@emailjs/browser';
import * as AllImages from '../../media/realMedia/indexMedia.js';
import { Link  } from "react-router-dom"; 

const {whatsapp , facebook , instagram , email , twitter} = AllImages;
console.log(whatsapp)
const lang = "ES";
const Key1 =  process.env.REACT_APP_KEY_1;
const Key2 =  process.env.REACT_APP_KEY_2;
const Key4 =  process.env.REACT_APP_KEY_3;
const Footer = () => {
  console.log(AllImages)
    return (
    <div className={styles.container}>
    <div className={styles.innercontainer}>
        <div className={styles.innercontainer2}>
            <h3 className={styles.bluetitle}>Amasocriando Store</h3>
            <p className={styles.texto}>Almacen de pasteleria integral vegana Cordoba Argentina</p>
            {/* <Link to='/shop' style={{ textDecoration: 'none' }} className={styles.link}>
                <button className={styles.buttonshop}>Shop Now</button>
            </Link> */}
        </div>
        {/* <ul className={styles.footernav}>
        <h3 className={styles.footertitles}>Home</h3>
        <div className={styles.lista_resp}>
        <li><a href="#" className={styles.flink}>About us</a></li>
            <li><a href="#" className={styles.flink}>Blog</a></li>
            <li><a href="#" className={styles.flink}>Press</a></li>
            <li><a href="#" className={styles.flink}>iOS App</a></li>
            <li><a href="#" className={styles.flink}>Android App</a></li>
        </div>
        </ul> */}
     {/*    <ul className={styles.footernav}>
        <h3 className={styles.footertitles}>Shop</h3>
        <div className={styles.lista_resp}>
        <li><a href="#" className={styles.flink}>Categories</a></li>
            <li><a href="#" className={styles.flink}>All</a></li>
            <li><a href="#" className={styles.flink}>Women</a></li>
            <li><a href="#" className={styles.flink}>Men</a></li>
        </div>
        </ul> */}
        <ul className={styles.sociallinks}>
        <h3 className={styles.footertitles}>Contact</h3>
        <div className={styles.lista_resp}>
            <li><img src={facebook} className={styles.icono}/>Facebook</li>
            <li><img src={whatsapp} className={styles.icono}/>Whatsapp</li>
            <li><img src={instagram} className={styles.icono}/>Instagram</li>
        </div> 
        </ul>
    </div>
    <div className={styles.copyright}>
        <p>Copyright &copy; 2023 by Amasocriando. All rights reserved</p>
    </div>  
  </div>
    )
};
export default Footer;
