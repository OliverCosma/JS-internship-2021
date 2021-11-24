/* eslint-disable react/prop-types */
import React from 'react';
import './CardComponent.css';

const CardComponent = (props) => {
    return (
        <div className="products">
            {
                // eslint-disable-next-line react/prop-types
                props.products.map((product) => (
                    <div key={product.id}>
                        <div className="gallery">
                            <img alt="image_cart" src={product.img}></img>
                            <div className="desc">
                                {product.name} at price: {product.price}
                            </div>
                            <div
                                className="button1"
                                onClick={props.addToCart.bind(this, product.id, props.products)}
                            >
                                Add product
                            </div>
                            <div className="button2">
                                Stock:
                                {product.stock}{' '}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default CardComponent;
