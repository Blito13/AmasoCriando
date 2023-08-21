import React from "react";
import styles from "./Contact.module.css";
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
const Contact = () => {
const message = useRef();
const [confirm, setConfirm] = useState(null);
const [sending, setSending] = useState(false);
const [form , setForm ] =  useState({
    nombre: "",
    email : "",
    tel : 0,
    text : "", 
});
console.log(Key1 , Key2 , Key4);
const handleChange = (e) => {
    e.preventDefault();
    const {name , value } = e.target;
    setForm({ ...form, [name]: value });
   console.log(form);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.name.length < 1 ||
      form.name.length > 50 ||
      form.email.length < 1 ||
      form.email.length > 50 ||
      form.form.length < 1 ||
      form.form.length > 700 ||
      form.honeypot.length > 0
    ) {
      setConfirm("exceeded");
      return;
    }
    setConfirm("loading");
    setSending(true);
    /* emailjs.sendForm(Key1, Key2 ,message.current, Key4) */
    console.log(Key1 , Key2 , Key4)
    .then((res)=> {

      console.log(res)
      setConfirm(true);
      setForm({
        name: "",
        email: "",
        tel: 0,
        text :"",
      });
    })
    .catch((err)=>{
      console.log(err)
    })
    setSending(false);
   
  };
  console.log(AllImages)
    return (
/*         <div id="contact"className={styles.contact}>
          <div className={styles.form}>
            <form ref ={message} className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.name}>
                <input
                  type="text"
                  maxLength="50"
                  
                  onChange={handleChange}
                  name="name"
                  value={form.name}
                  placeholder={lang === "EN" ? "Your name" : "Tu nombre"}
                  id="name"
                  required
                />
                <input
                  type="email"
                  maxLength="50"
                 
                  name="email"
                  onChange={handleChange}
                  value={form.email}
                  placeholder={lang === "EN" ? "Your email address" : "Tu email"}
                  id="email"
                  required
                />
              </div>
              <div className={styles.text}>
                <textarea
                
                  maxLength="700"
                  name="form"
                  onChange={handleChange}
                  value={form.form}
                  placeholder={lang === "EN" ? "Your form" : "Tu mensaje"}
                  id="form"
                  required
                />
              </div>
               <button
                  type="submit"
                  className={styles.submit}
                  onClick={handleSubmit}
                >
                  {lang === "EN" ? "Submit" : "Enviar"}
                </button>
              </form>
              </div>
              <div className={styles.btnContainer}>
                {confirm === "loading" && (
                  <div className={styles.confirm}>
                    {lang === "ES" ? "Sending..." : "Enviando..."}
                  </div>
                )}
                {confirm === true && (
                  <div className={styles.confirm}>
                    {lang === "ES" ? "Thanks!" : "Gracias!"}
                  </div>
                )}
                {confirm === "exceeded" && (
                  <div className={styles.confirm}>
                    {lang === "ES"
                      ? "Too many characters"
                      : "Demasiados carácteres"}
                  </div>
                )}
                {confirm === "false" && (
                  <div className={styles.confirm}>"Server Error"</div>
                )}
                <button
                  type="submit"
                  className={styles.submit}
                  onClick={handleSubmit}
                >
                  {lang === "EN" ? "Submit" : "Enviar"}
                </button>
              </div>
           { <div className = {styles.footer}>
            <h4>Tel: 351 000 000</h4><p>Email: info@amasocriando.com</p><p>Direccion: B Smata - Mza C L5</p>
        </div>}
    </div> */
    <div className={styles.container}>
    {/* <Chatbot /> */}
    <div className={styles.innercontainer}>
        <div className={styles.innercontainer2}>
            <h3 className={styles.bluetitle}>BlueBird Store</h3>
            <p className={styles.texto}>Laoreet ligula neque sed non netus nascetur at venenatis dictum, eleifend praesent turpis eget libero cras rutrum semper, magnis inceptos senectus sociis sociosqu auctor fames habitant..</p>
            <Link to='/shop' style={{ textDecoration: 'none' }} className={styles.link}>
                <button className={styles.buttonshop}>Shop Now</button>
            </Link>
        </div>
        <ul className={styles.footernav}>
        <h3 className={styles.footertitles}>Home</h3>
        <div className={styles.lista_resp}>
        <li><a href="#" className={styles.flink}>About us</a></li>
            <li><a href="#" className={styles.flink}>Blog</a></li>
            <li><a href="#" className={styles.flink}>Press</a></li>
            <li><a href="#" className={styles.flink}>iOS App</a></li>
            <li><a href="#" className={styles.flink}>Android App</a></li>
        </div>
        </ul>
        <ul className={styles.footernav}>
        <h3 className={styles.footertitles}>Shop</h3>
        <div className={styles.lista_resp}>
        <li><a href="#" className={styles.flink}>Categories</a></li>
            <li><a href="#" className={styles.flink}>All</a></li>
            <li><a href="#" className={styles.flink}>Women</a></li>
            <li><a href="#" className={styles.flink}>Men</a></li>
        </div>
        </ul>
        <ul className={styles.sociallinks}>
        <h3 className={styles.footertitles}>Contact</h3>
        <div className={styles.lista_resp}>
        <li><img src={email} className={styles.icono}/>bluebird@gmail.com</li>
            <li><img src={facebook} className={styles.icono}/>Facebook</li>
            <li><img src={whatsapp} className={styles.icono}/>Whatsapp</li>
            <li><img src={twitter} className={styles.icono}/>Twitter</li>
            <li><img src={instagram} className={styles.icono}/>Instagram</li>
        </div> 
        </ul>
    </div>
    <div className={styles.copyright}>
        <p>Copyright &copy; 2022 by BlueBird. All rights reserved</p>
    </div>  
  </div>
    )
};
export default Contact;
