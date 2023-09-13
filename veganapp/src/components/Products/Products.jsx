import styles from "./Products.module.css";
import {mock ,productos} from "../../utils/utils";
import Card from "../Card/Card";
import React,{useState  } from "react";
const Products = () =>{
console.log(mock);
const [from ,setFrom ] = useState(0);
const [to , setTo] = useState(3);
const [opac ,setOpac] =useState("");

const handleNext = () =>{
  if(to >= 7) return;
  setOpac({transition : "2s" ,opacity: "0.0" });
    setTimeout(()=>{
      setOpac({transition : "1s" ,opacity: "1" });
      setFrom(to);
      setTo(to + 3);
    }, 1000)
;
};
const handlePrev = () =>{
    if (from === 0) return ;
    setOpac({transition : "2s" ,opacity: "0.0" });
    setTimeout(()=>{
        setOpac({transition : "1s" ,opacity: "1" });
    setFrom(from - 3);
    setTo(to - 3);
    },1000);
};
return (
    <div className={styles.container}>
       <button onClick={handlePrev}>Prev</button>
   { <div className = {styles.cards} style={opac? opac : null}>
             {mock.slice(from,to).map(e =>
                <Card 
                 imgn ={e.imgn}
                 texto ={e.texto}
                 id = {e.id}
                 name = {e.name}>
                </Card>
                )}
           </div>}
           <button onClick={handleNext}>Next</button>
    </div>
)
};
export default Products;
