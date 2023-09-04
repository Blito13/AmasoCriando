import React ,{useState}from "react";
import styles from "./Home.module.css"
import About from "../About/AboutUs";
import Contact from "../Contact/Contact";
import CarouselReply from "../CarouselReply/CarouselReply";
import * as AllImages from '../../media/realMedia/indexMedia.js';
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import { mock , productos } from "../../utils/utils";
const Home = () => {
const [from ,setFrom ] = useState(0);
const [to , setTo] = useState(3);

const handleNext = () =>{
    if(to >= 7) return;
    setFrom(to);
    setTo(to + 3);
};
const handlePrev = () =>{
    if (from === 0) return ;
        setFrom(from - 3);
        setTo(to - 3)
};
    return (
        <div className={styles.container}>   
           <div className={styles.content}>
           
                <Carousel></Carousel>
           
            
           <div className = {styles.cards}>
            <button onClick={handlePrev}> Prev</button>
            {
            mock.slice(from,to).map(e =>
                <Card imgn ={e.imgn} texto = {e.texto} id = {e.id} name = {e.name}></Card>
                )}
                <button onClick={handleNext}>Next</button>
           </div>
           </div>
          
            
        </div> 
    )
};
export default Home;