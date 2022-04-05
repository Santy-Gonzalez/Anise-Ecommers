import React, {useState} from "react";
import Items from "./Items";
import {Grid, Box} from '@material-ui/core'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const ItemList =() => {
  const [products, setProducts] = useState([
    {
        "id": 1,
        "cod": "uno",
        "nombre": "Anillo Maggie",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228653075-WHPTXCS63EID1951JW35/SQSP_Jewelry_Product_101_7423+2.jpg?format=750w",
        "precio": 1099900,
    },
    {
        "id": 2,
        "cod": "dos",
        "nombre": "Anillo Ketey",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228649233-EA2226P5ZORRRLG94NPQ/SQSP_Jewelry_Product_102_7472.jpg?format=750w",
        "precio": 2229900,
    },
    {
        "id": 3,
        "cod": "tres",
        "nombre": "Anillo Jude",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228644232-YNYTI3Z822TE0M1UI8P9/SQSP_Jewelry_Product_103_7506.jpg?format=750w",
        "precio": 503944,
    },
    {
        "id": 4,
        "cod": "cuatro",
        "nombre": "Anillo Christiana",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228638971-7GSWH0IY0TQSKYS87HY9/SQSP_Jewelry_Product_104_7674.jpg?format=750w",
        "precio": 1999900,
    },
    {
        "id": 5,
        "cod": "cinco",
        "nombre": "Anillo Hardy",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228635675-AWRTBDYUDETB88HAZ7QF/SQSP_Jewelry_Product_105_7680.jpg?format=750w",
        "precio": 3185941,
    },
    {
        "id": 6,
        "cod": "seis",
        "nombre": "Aros Gaspard",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228643233-VRDM0BHESRR2KZMEDP3X/SQSP_Jewelry_Product_115_7874.jpg?format=750w",
        "precio": 704953,
    },
    {
        "id": 7,
        "cod": "siete",
        "nombre": "Aros Dev",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228626036-8VRWB1VMXSZTDD1LEDS3/SQSP_Jewelry_Product_114_7893.jpg?format=750w",
        "precio": 5949000,
    },
    {
        "id": 8,
        "cod": "ocho",
        "nombre": "Aros Troy",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228621749-CQ0SAJQIKX1J5U7AB1FN/SQSP_Jewelry_Product_113_7910-%281%29.jpg?format=750w",
        "precio": 2199000,
    },
    {
        "id": 9,
        "cod": "nueve",
        "nombre": "Collar Jason",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228620722-6LEII5T712N4ZGNDD52Z/SQSP_Jewelry_Product_107_7729.jpg?format=750w",
        "precio": 2199000,
    },
    {
        "id": 10,
        "cod": "diez",
        "nombre": "Collar Brock",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228617263-AQXAA162M54M1QCP21V3/SQSP_Jewelry_Product_108_7746.jpg?format=750w",
        "precio": 2199000,
    },
    {
        "id": 11,
        "cod": "once",
        "nombre": "Collar Jack",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228636563-9V29YKUMR01LKI0I4P3B/SQSP_Jewelry_Product_106_7708.jpg?format=750w",
        "precio": 2199000,
    },
    {
        "id": 12,
        "cod": "doce",
        "nombre": "Pulsera Ben",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228628003-PYGSIT56ZU2247LOYIUR/SQSP_Jewelry_Product_110_7783.jpg?format=750w",
        "precio": 2229900,
    },
    {
        "id": 13,
        "cod": "trece",
        "nombre": "Pulsera River",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228648249-RUBQE6T12G7BUFCCOZ8F/SQSP_Jewelry_Product_112_7816.jpg?format=750w",
        "precio": 2229900,
    },
    {
        "id": 14,
        "cod": "catorce",
        "nombre": "Pulsera Jeff",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228631051-R9T6H5NFVFR0P63L3WD8/SQSP_Jewelry_Product_111_7800.jpg?format=750w",
        "precio": 2229900,
    },
    {
        "id": 15,
        "cod": "quince",
        "nombre": "Pulsera Jeff",
        "imagen": "https://cdn.shopify.com/s/files/1/0054/3283/6185/products/il_fullxfull.2571884625_6od1_2608e27e-779b-4361-98f9-638f4fdc203b_470x.jpg?v=1623349414",
        "precio": 2229900,
    },
]);

  return (
      <>
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={4} sm={4} md={4}>
                <Item>
                {products.map((product) => {
                        return (
                                <Items
                                    key = {product.id}
                                    cod = {product.cod}
                                    name = {product.nombre}
                                    image = {product.imagen}
                                    price = {product.precio}
                                />
                        )
                        })}
                </Item>
            </Grid>
            </Grid>
        </Box>
      </>
  );
}

export default ItemList;

