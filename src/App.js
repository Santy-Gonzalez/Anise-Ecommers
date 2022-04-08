import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import NavBarMobile from "./Components/NavBar/NavBarMobile.jsx";
/* import ItemDetailContainer from "./Components/DetailsProducts/ItemDetailContainer.jsx"; */
import ItemListContainer from "./Components/ItemList/ItemListContainer";
import Main from "./Components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <NavBarMobile/>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/ItemListContainer" element={<ItemListContainer/>}/>
{/*           <Route exact path="/ItemDetailContainer" element={<ItemDetailContainer/>}/> */}
        </Routes>
    </BrowserRouter>
    
    </>
  );
}

