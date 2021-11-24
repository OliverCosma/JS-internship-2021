import React from 'react'
import './CardComponent.css'
import Decrease from './Decrease';
import Increase from './Increase';
import Remove from './Remove';
import Hook from "./Hook";
import { counter } from "./Counter";
const CardComponent = (props) => 
{
      

   
    return (
        <div className="products">
            {
                props.products.map(
                (product) => 
               <div key={product.id}>   
                <div className="gallery">
                  <img alt="image_cart" src={product.img} ></img>
                  <div className="desc">{product.name} at price: {product.price}</div> 
                 <Increase></Increase>
                 <Decrease></Decrease>
                         
                </div>
               </div>       
                )
            }
        </div>
    );
};
   

export default CardComponent;