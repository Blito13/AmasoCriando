import React from "react";
import styles from "./Home.module.css"
import About from "../About/AboutUs";
import Contact from "../Contact/Contact";
import CarouselReply from "../CarouselReply/CarouselReply";
import * as AllImages from '../../media/realMedia/indexMedia.js';
import Card from "../Card/Card";
import { mock } from "../../utils/utils";
const Home = () => {
   console.log(AllImages);
    return (
        <div className={styles.container}>
            <section>
            <About/>
            </section>
            <section>
            {<CarouselReply></CarouselReply>}
            </section>
           <div className = {styles.cards}>
            {
            mock.map(e =>
                <Card imgn ={e.imgn} texto = {e.texto} id = {e.id} name = {e.name}></Card>
            )}
           </div>
            <section>
           
            </section>
            <section>
            
            </section>
            
        </div> 
    )
};
export default Home;