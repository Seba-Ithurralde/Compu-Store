import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ItemCard (){

    const [prod, setProd] = useState([]);

    useEffect(() => {
        setProd(prod);
    }, []);

    return (
        <div key={prod.id}>
            <article>
            <img src={prod.image} alt={prod.name}/>
            <h4>{prod.name}</h4>
            <p>Precio: ${prod.price}</p>
            <p>Stock: {prod.stock}</p>
            <button className='boton'>
            <Link to={`/item/${prod.id}`}> Ver detalles </Link>
            </button>
            </article>
        </div>
    );
}