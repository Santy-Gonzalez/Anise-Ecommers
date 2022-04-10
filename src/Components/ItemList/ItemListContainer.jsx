import React from "react";
import ItemList from "./ItemList";
import "./styleItems.css"

export default function ItemListContainer() {
  
  return (
    <>
    <div className="back">
       { <ItemList/>}
    </div>
    </>
  );
}
