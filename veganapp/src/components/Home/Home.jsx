import React ,{useState}from "react";
import styles from "./Home.module.css"
import About from "../About/AboutUs";
import Contact from "../Footer/Footer";
import CarouselReply from "../CarouselReply/CarouselReply";
import * as AllImages from '../../media/realMedia/indexMedia.js';
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import { mock , productos } from "../../utils/utils";
const Home = () => {
const [from ,setFrom ] = useState(0);
const [to , setTo] = useState(3);
const [opac ,setOpac] =useState("");

const handleNext = () =>{
    if(to >= 7) return;
    setOpac({transition : "2s" ,opacity: "0.0" });
    setTimeout(()=>{
        setFrom(to);
        setTo(to + 3);
        setOpac({transition : "1s" ,opacity: "1" });
    }, 1500)
;
};
const handlePrev = () =>{
    if (from === 0) return ;
    setOpac({transition : "2s" ,opacity: "0.0" });
    setTimeout(()=>{
        setFrom(from - 3);
        setTo(to - 3);
        setOpac({transition : "1s" ,opacity: "1" });
    },1500);
};
    return (
        <div className={styles.container}>   
                <Carousel></Carousel>
           <div className={styles.content}>
            <button onClick={handlePrev}>Prev</button>
           <div className = {styles.cards} style={opac? opac : null}>
             {mock.slice(from,to).map(e =>
                <Card 
                 imgn ={e.imgn}
                 texto ={e.texto}
                 id = {e.id}
                 name = {e.name}>
                </Card>
                )}
           </div>
            <button onClick={handleNext}>Next</button>
           </div>
          
            
        </div> 
    )
};
export default Home;