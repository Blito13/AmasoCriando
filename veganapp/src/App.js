import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";
import Detail from "./components/Detail/Detail";
import { Provider } from "react-redux";
import generateStore from "./store";
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer/Footer";


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
    <Footer/>
    </Provider>
    )
  };
  export default App;