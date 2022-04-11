const products = 
[
    {
    "id": "1",
    "cod": "uno",
    "nombre": "Anillo Maggie",
    "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228653075-WHPTXCS63EID1951JW35/SQSP_Jewelry_Product_101_7423+2.jpg?format=750w",
    "precio": "€150.00"
},
{
    "id": "2",
    "cod": "dos",
    "nombre": "Anillo Ketey",
    "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228649233-EA2226P5ZORRRLG94NPQ/SQSP_Jewelry_Product_102_7472.jpg?format=750w",
    "precio": "€150.00"
},
{
    "id": "3",
    "cod": "tres",
    "nombre": "Anillo Jude",
    "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228644232-YNYTI3Z822TE0M1UI8P9/SQSP_Jewelry_Product_103_7506.jpg?format=750w",
    "precio": "€150.00"
},
{
    "id": 4,
    "cod": "cuatro",
    "nombre": "Aros Gaspard",
    "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228643233-VRDM0BHESRR2KZMEDP3X/SQSP_Jewelry_Product_115_7874.jpg?format=750w",
    "precio": "€150.00"
},
{
    "id": 5,
    "cod": "cinco",
    "nombre": "Aros Dev",
    "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228626036-8VRWB1VMXSZTDD1LEDS3/SQSP_Jewelry_Product_114_7893.jpg?format=750w",
    "precio": "€150.00"
},
{
    "id": 6,
    "cod": "seis",
    "nombre": "Aros Troy",
    "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228621749-CQ0SAJQIKX1J5U7AB1FN/SQSP_Jewelry_Product_113_7910-%281%29.jpg?format=750w",
    "precio": "€150.00"
},
{
    "id": 7,
    "cod": "siete",
    "nombre": "Collar Jason",
    "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228620722-6LEII5T712N4ZGNDD52Z/SQSP_Jewelry_Product_107_7729.jpg?format=750w",
    "precio": "€150.00"
},
{
    "id": 8,
    "cod": "ocho",
    "nombre": "Collar Brock",
    "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228617263-AQXAA162M54M1QCP21V3/SQSP_Jewelry_Product_108_7746.jpg?format=750w",
    "precio": "€150.00"
},
{
    "id": 9,
    "cod": "nueve",
    "nombre": "Collar Jack",
    "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228636563-9V29YKUMR01LKI0I4P3B/SQSP_Jewelry_Product_106_7708.jpg?format=750w",
    "precio": "€150.00"
},
{
    "id": 10,
    "cod": "diez",
    "nombre": "Pulsera Ben",
    "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228628003-PYGSIT56ZU2247LOYIUR/SQSP_Jewelry_Product_110_7783.jpg?format=750w",
    "precio": "€150.00"
},
{
    "id": 11,
    "cod": "once",
    "nombre": "Pulsera River",
    "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228648249-RUBQE6T12G7BUFCCOZ8F/SQSP_Jewelry_Product_112_7816.jpg?format=750w",
    "precio": "€150.00"
},
{
    "id": 12,
    "cod": "doce",
    "nombre": "Pulsera Jeff",
    "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228631051-R9T6H5NFVFR0P63L3WD8/SQSP_Jewelry_Product_111_7800.jpg?format=750w",
    "precio": "€150.00"
}
];

export const traerProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
            console.log(traerProducto);
        }, 1000);
    });
};

