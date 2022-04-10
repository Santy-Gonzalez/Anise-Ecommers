import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import NavBarMobile from "./Components/NavBar/NavBarMobile.jsx";
import ItemDetailContainer from "./Components/DetailsProducts/ItemDetailContainer.jsx";
import ItemDetail from "./Components/DetailsProducts/ItemDetail.jsx";
import ItemListContainer from "./Components/ItemList/ItemListContainer";
import Main from "./Components/Main/Main";
/* import MainContainer from "./Components/Main/MainContainer"; */

export default function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <NavBarMobile/>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/ItemListContainer" element={<ItemListContainer/>}/>
          <Route exact path="/ItemDetailContainer" element={<ItemDetailContainer/>}/>
          <Route exact path="/ItemDetail/:id" element={<ItemDetail/>}/>
        </Routes>
    </BrowserRouter>
    
    </>
  );
}
