import React, {useState} from "react";
import Items from "./Items";

const ItemList =() => {
  const [products, setProducts] = useState([
    {
        "id": 1,
        "nombre": "Anillo Maggie",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228653075-WHPTXCS63EID1951JW35/SQSP_Jewelry_Product_101_7423+2.jpg?format=750w",
        "precio": 1099900,
    },
    {
        "id": 2,
        "nombre": "Anillo Ketey",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228649233-EA2226P5ZORRRLG94NPQ/SQSP_Jewelry_Product_102_7472.jpg?format=750w",
        "precio": 2229900,
    },
    {
        "id": 3,
        "nombre": "Anillo Jude",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228644232-YNYTI3Z822TE0M1UI8P9/SQSP_Jewelry_Product_103_7506.jpg?format=750w",
        "precio": 503944,
    },
    {
        "id": 4,
        "nombre": "Anillo Christiana",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228638971-7GSWH0IY0TQSKYS87HY9/SQSP_Jewelry_Product_104_7674.jpg?format=750w",
        "precio": 1999900,
    },
    {
        "id": 5,
        "nombre": "Anillo Hardy",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228635675-AWRTBDYUDETB88HAZ7QF/SQSP_Jewelry_Product_105_7680.jpg?format=750w",
        "precio": 3185941,
    },
    {
        "id": 6,
        "nombre": "Aros Gaspard",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228643233-VRDM0BHESRR2KZMEDP3X/SQSP_Jewelry_Product_115_7874.jpg?format=750w",
        "precio": 704953,
    },
    {
        "id": 7,
        "nombre": "Aros Dev",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228626036-8VRWB1VMXSZTDD1LEDS3/SQSP_Jewelry_Product_114_7893.jpg?format=750w",
        "precio": 5949000,
    },
    {
        "id": 8,
        "nombre": "Aros Troy",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228621749-CQ0SAJQIKX1J5U7AB1FN/SQSP_Jewelry_Product_113_7910-%281%29.jpg?format=750w",
        "precio": 2199000,
    },
    {
        "id": 9,
        "nombre": "Collar Jason",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228620722-6LEII5T712N4ZGNDD52Z/SQSP_Jewelry_Product_107_7729.jpg?format=750w",
        "precio": 2199000,
    },
    {
        "id": 10,
        "nombre": "Collar Brock",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228617263-AQXAA162M54M1QCP21V3/SQSP_Jewelry_Product_108_7746.jpg?format=750w",
        "precio": 2199000,
    },
    {
        "id": 11,
        "nombre": "Collar Jack",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228636563-9V29YKUMR01LKI0I4P3B/SQSP_Jewelry_Product_106_7708.jpg?format=750w",
        "precio": 2199000,
    },
    {
        "id": 12,
        "nombre": "Pulsera Ben",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228628003-PYGSIT56ZU2247LOYIUR/SQSP_Jewelry_Product_110_7783.jpg?format=750w",
        "precio": 2229900,
    },
    {
        "id": 13,
        "nombre": "Pulsera River",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228648249-RUBQE6T12G7BUFCCOZ8F/SQSP_Jewelry_Product_112_7816.jpg?format=750w",
        "precio": 2229900,
    },
    {
        "id": 14,
        "nombre": "Pulsera Jeff",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228631051-R9T6H5NFVFR0P63L3WD8/SQSP_Jewelry_Product_111_7800.jpg?format=750w",
        "precio": 2229900,
    },
]);

  return (
      <div className="row">
        {products.map((product) => {
          return (
            <Items
            key = {product.id}
            name = {product.nombre}
            image = {product.imagen}
            price = {product.precio}
            />
          )
        })}
      </div>
    
  );
}

export default ItemList;