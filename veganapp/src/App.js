
import './App.css';


import styles from './App.css';
import Home from "./components/Home/Home";
import Start from "./components/Start/StartComponent"
import NavBar from "./components/NavBar/NavBar"
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
      <Route path = '/start' element={<Start/>}/>
    </Routes>
    </Provider>
  );
}
export default App;