import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import { Provider } from "react-redux";
import generateStore from "./store";
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/Carousel";


function App() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <NavBar/>
    <Routes>
      <Route path = '/' element={<Home/>}>
      <Route exact path ='/' element = {<Products/>}></Route>
      <Route path = 'contact' element = {<Contact/>}></Route>
      </Route>
    </Routes>
    <Footer/>
    </Provider>
    )
  };
  export default App;