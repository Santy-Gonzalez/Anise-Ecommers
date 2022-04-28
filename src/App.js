import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import NavBarMobile from "./Components/NavBar/NavBarMobile.jsx";
import ItemDetailContainer from "./Components/DetailsProducts/ItemDetailContainer.jsx";
import ItemListContainer from "./Components/ItemList/ItemListContainer";
import Footer from "./Components/Footer/Footer";
import MainContainer from "./Components/Main/MainContainer";
import CartContainer from "./Components/Cart/CartContainer";
import CartContextProvider from "./Context/CartContextProvider.jsx";
import Contact from "./Components/Contact/Contact";
import initializeFirebase from './Components/Utils/FireBaseData';
import AboutContainer from "./Components/About/AboutContainer";
initializeFirebase();

export default function App() {
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <NavBarMobile/>
          <Routes>
            <Route exact path="/" element={<MainContainer/>}/>
            <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
            <Route exact path="/ItemListContainer" element={<ItemListContainer/>}/>
            <Route exact path="/Contact" element={<Contact/>}/>
            <Route exact path="/About" element={<AboutContainer/>}/>
            <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route exact path="/cart" element={<CartContainer/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
    </>
  );
}
