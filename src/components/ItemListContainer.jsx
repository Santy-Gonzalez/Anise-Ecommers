import React from "react";
import ItemCount from "./ItemCount";

export default function ItemListContainer() {

  return (
    <>
    <div className="flex">
      <div className="space_">
        <div className="card">
          <div className="image">
            <img src="https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228653075-WHPTXCS63EID1951JW35/SQSP_Jewelry_Product_101_7423+2.jpg?format=750w" alt="" />
          </div>
          <div className="count">
            <ItemCount initial = {1} stock = {5}/>
          </div>
        </div>
      </div>
      <div className="space_">
        <div className="card">
          <div className="image">
            <img src="https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228653075-WHPTXCS63EID1951JW35/SQSP_Jewelry_Product_101_7423+2.jpg?format=750w" alt="" />
          </div>
          <div className="count">
            <ItemCount initial = {1} stock = {5}/>
          </div>
        </div>
      </div>
      <div className="space_">
        <div className="card">
          <div className="image">
            <img src="https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228653075-WHPTXCS63EID1951JW35/SQSP_Jewelry_Product_101_7423+2.jpg?format=750w" alt="" />
          </div>
          <div className="count">
            <ItemCount initial = {1} stock = {5}/>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

