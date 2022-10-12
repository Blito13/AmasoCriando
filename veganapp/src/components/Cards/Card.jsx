import React from "react";
import style from "./Card.module.css"
const cartas = [
    {
    texto : "soga",
    imgn :"",
    langa :12
    },
    {
    texto : "curcuma",
    imgn :"",
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
]
const Card = ()=>{
    return(
        <div className = {style.container}>
            {cartas.map(e => <div className = {style.card}>{Object.values(e)}</div>)

            }
            <h1>cardumen</h1>
        </div>
    )
}
export default Card;