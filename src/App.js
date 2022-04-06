import React from "react";
import ItemDetail from "./Components/DetailsProducts/ItemDetail";
import ItemListContainer from "./Components/ItemList/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import NavBarMobile from "./Components/NavBar/NavBarMobile.jsx";


export default function App() {
  return (
    <>
    <NavBar/>
    <NavBarMobile/>
    <ItemListContainer/>
    <ItemDetail/>
    </>
  );
}

