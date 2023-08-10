/*   */
import * as AllImages from '../media/realMedia/indexMedia.js';


const productos = [
    {
    texto : "Brownies",
    imgn :"https://www.recetasderechupete.com/wp-content/uploads/2019/11/Brownie-768x530.jpg",
    
    },
    {
    texto : "Pan de centeno",
    imgn :"https://www.rebanando.com/media/pan-de-centeno-y-espelta-integral_crop.jpg/rh/pan-integral.jpg",
    
    },
    {
    texto : "Rolls de canela y manzana",
    imgn :"https://recetas-rapidas.es/wp-content/uploads/2018/10/Rollos-de-canela-receta-724x477.jpg",
    
    },
    {
    texto : "Variedad en budines",
    imgn :"https://www.almacenconsciente.com/2018/wp-content/uploads/2016/12/budin.jpg",
    
    },
];
const mock = [
    {
    texto : "Alfajores integrales con coco rallado y relleno de chocolate bariloche",
    imgn : AllImages.alfajoresChocolate,
    id : 0,
    name : "alfajoresChocolate",
    },
    {
    texto : "Alfajores integrales con coco rallado y relleno de dulce de leche de coco",
    imgn :AllImages.alfajoresCoco,
    id : 1,
    name : "alfajoresCoco",
    },
    {
    texto : "Bizcochos integrales con mix de semillas",
    imgn :AllImages.bizcochos,
    id : 3,
    name : "bizcochos",
    },
    {
    texto : "Medialunas integrales rellenas de chocolate bariloche",
    imgn :AllImages.medialunasChocolate,
    id : 4,
    name :"medialunasChocolate" ,
    },
    {
    texto : "Medialunas integrales rellenas de dulce de leche de coco",
    imgn :AllImages.medialunasCoco,
    id : 5,
    name : "medialunasCoco",
    },
    {
    texto : "Pan integral de centeno y mix de semillas",
    imgn :AllImages.panCenteno,
    id : 6,
    name : "panCenteno",
    },
    {
    texto : "pan integral de semillas",
    imgn :AllImages.panIntegralSemillas,
    id : 7,
    name : "panIntegralSemillas",
    },
    {
    texto : "budines integrales (banana , zanahoria , chocolate , remolacha)",
    imgn :AllImages.budinChocolate,
    id : 8,
    name : "budinChocolate",
    },
];
export  {
    mock,
    productos
};