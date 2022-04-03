import React from "react";
import ItemList from "./ItemList";

export default function ItemListContainer() {

  return (
    <>
      <div className="flex">
        <div className="grid">
          <div className="space_">
          <ItemList/>
          </div>
        </div>
      </div>
    </>
  );
}

