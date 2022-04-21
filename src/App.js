import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import NavBarMobile from "./Components/NavBar/NavBarMobile.jsx";
import ItemDetailContainer from "./Components/DetailsProducts/ItemDetailContainer.jsx";
import ItemListContainer from "./Components/ItemList/ItemListContainer";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import MainContainer from "./Components/Main/MainContainer";
import CartContainer from "./Components/Cart/CartContainer";
import CartContextProvider from "./Context/CartContextProvider.jsx";

export default function App() {
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <NavBarMobile/>
          <Routes>
            <Route exact path="/" element={<Main/>}/>
            <Route exact path="/MainContainer" element={<MainContainer/>}/>
            <Route exact path="/category/:category" element={<ItemListContainer />} />
            <Route exact path="/ItemListContainer" element={<ItemListContainer/>}/>
            <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route exact path="/cart" element={<CartContainer/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
    </>
  );
}
