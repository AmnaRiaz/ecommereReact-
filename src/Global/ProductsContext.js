import { createContext, useState } from 'react';
import React from 'react';

import shoes from '../img/pic1.jpg';
import shoebags from '../img/pic2.jpg';
import pillow from '../img/pic3.jpg';
import laundry from '../img/pic4.jpg';
import bags from '../img/bags.jpg';
import shirt from '../img/shirt.jpg';
import sneakers from '../img/sneakers.jpg';
import ds1 from '../img/ds1.jpg';
import hover from '../img/hover.jpg';
import glasses from '../img/glasses.jpeg';
import light from '../img/light.jpg';
import dangari from '../img/dangari.jpg';
export const JoDilKary = createContext();

const ProductsContextProvider = (props) => {
 const [products] = useState([
    {id: 1, name: "Bag", price: 500, status: 'hot' , image: bags},
    {id: 2, name: " Shirt", price: 500, status: 'hot' , image: shirt},
    {id: 3, name: "Sneakers", price: 500, status: 'hot' , image: sneakers},
    {id: 4, name: "Dangari", price: 500, status: 'hot' , image: dangari},
    {id: 5, name: "DSLR", price: 500, status: 'hot' , image: ds1},
    {id: 6, name: "Hover Board", price: 500, status: 'hot' , image: hover},
    {id: 7, name: "Glasses", price: 500, status: 'hot' , image: glasses},
    {id: 8, name: "Fancy Lights", price: 500, status: 'hot' , image: light},
     {id: 9, name: "Travel Bag", price: 500, status: 'hot' , image: shoes},
     {id: 10, name: "Travel Shoes Bags", price: 1000, status: 'hot', image: shoebags},
     {id: 11, name: "Travel Pillow", price: 1500, status: 'hot', image: pillow},
     {id: 12, name: "Lundry Bags", price: 2000, status: 'hot' , image: laundry},
    ]);

    return (
        <JoDilKary.Provider value={{products: [...products]}}>
            {props.children}
        </JoDilKary.Provider>
    )
}

export default ProductsContextProvider;