import React from "react";
import styles from "./NavBar.module.css"
import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel";

const NavBar = ({props}) => {
  const enfocar = () => {
    console.log(props)
    props.aboutRef.current.focus();
  };
    return(
        <div className={styles.container}>
        <p className={styles.logo}>AmasoCriando</p>
        <nav className={styles.nav}>
       <button onClick={enfocar}>about</button>
        <Link to="/contact">
          Contact
        </Link>
        <Link to="/pictures">
         Pictures
        </Link>
        </nav>
    </div>
    )
}
export default NavBar;