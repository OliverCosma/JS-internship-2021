import React from 'react'
import { useState, useEffect } from 'react'

import Navbar from './Navbar'
import Footer from './Footer'
import Comp from './Comp'
import { HandleAddToCartProvider } from '../app/helpers'
// import { products, ingredients } from '../constants/products'

import styles from '../styles/Home.module.css'
// export const getStaticProps = async () => {
//     const res = await fetch('http://1c3075124a07.ngrok.io/products');
//     const data = await res.json();
  
//     return {
//       props: {
//         products: data.data
//       }
//     }
//   }
//   export const getStaticProps2 = async () => {
//     const res = await fetch('http://1c3075124a07.ngrok.io/ingredients');
//     const data = await res.json();
  
//     return {
//       props: {
//         ingredients: data.data
//       }
//     }
//   }
const Layout = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [counter, setCounter] = useState(0);
    const [error, setError] = useState(false)
    const [products, setProducts] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    if (typeof localStorage !== 'undefined') {
        let localCart = localStorage.getItem("cart");
        let localCounter = localStorage.getItem("counter")
        useEffect(() => {
            //turn it into js
            localCart = JSON.parse(localCart);
            localCounter = JSON.parse(localCounter)
            //load persisted cart into state if it exists
            if (localCart) setCartItems(localCart)
            if (localCounter) setCounter(localCounter)
        }, [])
    }
    useEffect(() => {
            fetch(`http://1c3075124a07.ngrok.io/products`)
            .then((data => data.json()))
            .then((res => { setProducts(res.data)
                 console.log(res)}
            ))
            .catch((err => setError(err)));
        
    }, []);
    useEffect(() => {
        fetch(`http://1c3075124a07.ngrok.io/ingredients`)
        .then((data => data.json()))
        .then((res => { setingredients(res.data)
             console.log(res)}
        ))
        .catch((err => setError(err)));
    
}, []);
    const checkStock = (id, quantity) => {
        console.log(id)
        let ok = 1;
        console.log('checkstock:', products);
        var itemIngredients = products.find(prod => prod.prodId === id);
        // itemIngredients.every((i) => {
        //     var ingredient = ingredients.find(ing => ing.id === i.id)
        //     let qty = i.qty;
        //     if ((ingredient.stock - (quantity * qty)) < 0) {
        //         ok = "We only have " + ingredient.stock + " on stock right now!";
        //     }
        // })
        console.log('item ings:',itemIngredients)
        return ok

    }
    const addProducts = (id, q) => {
        var x = cartItems.findIndex((e) => e.prodId === id);
        if (x !== -1) {
            var ok = checkStock(id, q + cartItems[x].quantity)
            if (ok === 1) {
                cartItems[x].quantity += q;
                return 1;
            }
            else {
                console.log(ok);
                return 0;
            }
        } else if (checkStock(id, q) === 1) {
            let product = products.find(product => product.id === id);
            let newCart = cartItems;
            newCart.push({ prodId: id, quantity: q });
            setCartItems(newCart);
            return 1;
        }
        else {
            console.log(ok);
            return 0
        }
    }
    const handleAddToCart = (id, q) => {
        if(id && q){
        if (addProducts(id, q)) {
            localStorage.setItem('counter', JSON.stringify(counter + q))
            setCounter(counter + q)
            localStorage.setItem('cart', JSON.stringify(cartItems))
            console.log(cartItems);
            return 'success'
        }
        else return 'error';
    }

    }
    const val = "test"
    return (
        <>
            <HandleAddToCartProvider value={handleAddToCart}>
                <Navbar counter={counter} />
                {props.children}
                <Footer />
            </HandleAddToCartProvider>
        </>
    )
}

export default Layout
