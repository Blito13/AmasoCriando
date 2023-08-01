
import './App.css';
import styles from './App.css';
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import About from './components/About/AboutUs';
import Contact from "./components/Contact/Contact";
import { useRef } from 'react';
import { Provider } from "react-redux";
import generateStore from "./store";
import { Route, Routes  , HashRouter} from 'react-router-dom';
import Carousel from './components/Carousel/Carousel';

function App() {
  const store = generateStore();
  const aboutRef =  useRef(null);
  return (
    <Provider store={store}>
    <NavBar props = {aboutRef}/>
    <About ref ={aboutRef}/>
    <Contact/>
   <Carousel/>
    
  
    </Provider>
  );
}
export default App;