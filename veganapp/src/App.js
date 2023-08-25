import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import About from './components/About/AboutUs';
import Contact from "./components/Contact/Contact";
import Products from "./components/Products/Products";
import Detail from "./components/Detail/Detail";
import { Provider } from "react-redux";
import generateStore from "./store";
import { Route, Routes } from 'react-router-dom';


function App() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <NavBar/>
    <Routes>
      <Route path = '/' element={<Home/>}/>
      <Route path = '/products' element={<Products/>}>
      <Route exact path="detail/:id" element={<Detail/>}/>
      </Route>
    </Routes>
    <Contact/>
    </Provider>
    )
  };
  export default App;