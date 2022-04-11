import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import NavBarMobile from "./Components/NavBar/NavBarMobile.jsx";
import ItemDetailContainer from "./Components/DetailsProducts/ItemDetailContainer.jsx";
import ItemDetail from "./Components/DetailsProducts/ItemDetail.jsx";
import Items from "./Components/ItemList/Items";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import MainContainer from "./Components/Main/MainContainer";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <NavBarMobile/>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/MainContainer" element={<MainContainer/>}/>
          <Route exact path="/Items" element={<Items/>}/>
          <Route exact path="/ItemDetailContainer" element={<ItemDetailContainer/>}/>
          <Route exact path="/ItemDetail/:id" element={<ItemDetail/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
    
    </>
  );
}
