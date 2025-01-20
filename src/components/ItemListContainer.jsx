import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemCard from './ItemCard';
import { getProducts } from '../firebase/firebase.js';

export default function ItemListContainer ({title}) {


  const [productos, setProductos] = useState([]);

  const { catId } = useParams();

  useEffect(() => {
    if (catId == 'Notebooks') {
      setProductos(["/notebook1.jpg", "/notebook2.jpg", "/notebook3.jpg", "/notebook4.jpg", "/notebook5.jpg", "/notebook6.jpg"]);
    } 
    else if (catId == 'Perifericos') {
      setProductos(["/periferico1.jpg", "/periferico2.jpg", "/periferico3.jpg", "/periferico4.jpg", "/periferico5.jpg", "/periferico6.jpg"]);
    } 
    else if (catId == 'Kits') {
      setProductos(["/kits1.jpg", "/kits2.jpg", "/kits3.jpg", "/kits4.jpg", "/kits5.jpg", "/kits6.jpg"]);
    } 
    else {
      setProductos(["/notebook1.jpg", "/notebook2.jpg", "/notebook3.jpg", "/notebook4.jpg", "/notebook5.jpg", "/notebook6.jpg", "/periferico1.jpg", "/periferico2.jpg", "/periferico3.jpg", "/periferico4.jpg", "/periferico5.jpg", "/periferico6.jpg", "/kits1.jpg", "/kits2.jpg", "/kits3.jpg", "/kits4.jpg", "/kits5.jpg", "/kits6.jpg"]);
    }
  },[getProducts(catId)]);


  return (
    <>
      <h1>{title}</h1>
      <div className='productos'>
      {productos.map((prod) => (
        <ItemCard key={prod.id} prod={prod} />  
      ))}
    </div>
    </>
  );
}