import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import NavBarMobile from "./Components/NavBar/NavBarMobile.jsx";
import ItemDetailContainer from "./Components/DetailsProducts/ItemDetailContainer.jsx";
import ItemListContainer from "./Components/ItemList/ItemListContainer";


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

