import React from 'react';
import CardComponent from './CardComponent';
import './ContentComponent.css'


const ContentComponent = (props) =>
{
    return (
            <div>
                <div class="module">
                    <header>
                        <h1>
                            EvoFashion
                        </h1>
                    </header>
                </div>
             <CardComponent products={props.products} addToCart={props.addToCart}/>
            </div>
    )      
}
export default  ContentComponent;