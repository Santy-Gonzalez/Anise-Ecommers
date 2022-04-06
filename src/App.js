import React from "react";
import ItemDetailContainer from "./Components/DetailsProducts/ItemDetailContainer";
import ItemListContainer from "./Components/ItemList/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import NavBarMobile from "./Components/NavBar/NavBarMobile.jsx";


export default function App() {
  return (
    <>
    <NavBar/>
    <NavBarMobile/>
    <ItemListContainer/>
    <ItemDetailContainer/>
    </>
  );
}

