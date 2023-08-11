import React from "react";
import styles from "./Contact.module.css";
import { useState } from "react";
import emailjs from '@emailjs/browser'
const Key1 =  process.env.REACT_APP_KEY_1;
const Key2 =  process.env.REACT_APP_KEY_2;
const Key4 =  process.env.REACT_APP_KEY_3;
const Contact = () => {
/* const form = useRef(); */
const [confirm, setConfirm] = useState(null);
const [sending, setSending] = useState(false);
const [form , setForm ] =  useState({
    nombre: "",
    email : "",
    tel : 0,
    form : "",
});
const handleChange = (e) => {
    e.preventDefault();
    const {name , value } = e.target;
    setForm({ ...form, [name]: value });
   console.log(form)
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
    emailjs.sendForm(Key1, Key2 ,form.current, Key4)
    .then((res)=> {

      console.log(res)
      setConfirm(true);
      setMessage({
        name: "",
        email: "",
        form: "",
        honeypot: "",
      });
    })
    .catch((err)=>{
      console.log(err)
    })
    setSending(false);
   
  };
    return (
        <div id="contact"className={styles.form}>
        <div className={styles.formulario}>
        <form ref={form} className={styles.formulario} onSubmit={handleSubmit}>
              <input
                type="text"
                maxLength="50"
                className={styles.name}
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
                className={styles.name}
                name="email"
                onChange={handleChange}
                value={form.email}
                placeholder={lang === "EN" ? "Your email address" : "Tu email"}
                id="email"
                required
              />
              <textarea
                className={styles.text}
                maxLength="700"
                name="form"
                onChange={handleChange}
                value={form.form}
                placeholder={lang === "EN" ? "Your form" : "Tu mensaje"}
                id="form"
                required
              />
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
            </form>
        <div className="info">
            <h4>Tel: 351 000 000</h4>
            <p>Email: info@amasocriando.com</p>
            <p>Direccion: B Smata - Mza C L5</p>
        </div>
    </div>
    </div>
    )

};
export default Contact;
