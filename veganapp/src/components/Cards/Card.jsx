import React from "react";
import style from "./Card.module.css"
const cartas = [
    {
    texto : "soga",
    imgn :"https://www.recetasderechupete.com/wp-content/uploads/2019/11/Brownie-768x530.jpg",
    langa :12
    },
    {
    texto : "curcuma",
    imgn :"https://www.rebanando.com/media/pan-de-centeno-y-espelta-integral_crop.jpg/rh/pan-integral.jpg",
    langa :12
    },
    {
    texto : "andamio",
    imgn :"",
    langa :12
    },
    {
    texto : "melon",
    imgn :"",
    langa :12
    },
];
const Card = ()=>{
    return(
        <div className = {style.container}>
            {cartas.map(e => 
            <img  src = {e.imgn }className = {style.card}>
                {/* {Object.values(e)} */}
                </img>)}
            <h1></h1>
        </div>
    )
}
export default Card;