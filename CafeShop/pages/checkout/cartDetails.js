import React , {useContext}from 'react'
import { products } from '../../constants/products'
import { Button } from '@material-ui/core'
import styles from '../../styles/Home.module.css'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { HandleAddToCartContext } from '../../app/helpers';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
} from '@material-ui/core'
import Fab from '@material-ui/core/Fab'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Container from '@material-ui/core/Container'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

const cartDetails = () => {
  const contextHandle = useContext(HandleAddToCartContext)

  if (typeof localStorage !== 'undefined') {
    var cart = JSON.parse(localStorage.getItem('cart'))
    console.log("CART: ", cart)
  }

  let cartProducts = []

  const getProducts = () => {
    cart.forEach((element) => {
      let prod = products.find((x) => x.id == element.prodId)
      const newProduct = { ...prod, quantity: element.quantity }
      cartProducts.push(newProduct)
    })
    return cartProducts
  }

  if (cart) getProducts()

  const getTotalPrice = () => {
    var total = 0
    cartProducts.forEach((x) => {
      let q= x.quantity
      total += (x.price*q)
    })
    return total
  }


  const add = (item) => {
    const productIndex = cartProducts.findIndex((obj => obj.id == item));
    cartProducts[productIndex].quantity++;
    document.getElementById(item).innerHTML="quantity: "+cartProducts[productIndex].quantity;
  }

  const sub = (item) => {
    const productIndex = cartProducts.findIndex((obj => obj.id == item));
    cartProducts[productIndex].quantity--;
    document.getElementById(item).innerHTML="quantity: "+cartProducts[productIndex].quantity; //  this updates DOM 
  }

  console.log(cartProducts)

  return (
    <div className = {styles.bigDiv}>
      <Card
            style={{
              height: '70%',
              width: '70%',
              marginTop: '50px',
            }}
          >
        {cartProducts.map((item) => (          
            <div
              className={styles.productInCart}
              style={{
                position: 'relative',
              }}
              key={item.id}
            >
              <img
                src='https://images.unsplash.com/photo-1541167760496-1628856ab772?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1194&q=80'
                width='125'
                alt=''
              />
              <h2>{item.name}</h2>
              <h2 id={item.id}>quantity: {item.quantity}</h2>
              <h2>{item.price}$</h2>
              <Fab
                onClick={(e) => {
                  e.preventDefault();
                  contextHandle(item.id, -1)
                }}
                size='small'
                color='primary'
                aria-label='add'
                style={{
                  position: 'absolute',

                  right: 140,
                }}
              >
                 <RemoveIcon></RemoveIcon>
              </Fab>

              <Fab
                onClick={(e) => {
                  e.preventDefault();
                  contextHandle(item.id, 1)
                }}
                size='small'
                color='primary'
                aria-label='remove'
                style={{
                  position: 'absolute',

                  right: 80,
                }}
              >
               
                <AddIcon></AddIcon>
              </Fab>
            </div>
          

        ))}
      </Card>
      <div>Total price: {getTotalPrice()}</div>
      <Button variant='contained' color='primary' href='personalDetails'>
        checkout
      </Button>
    </div>
  )
}

export default cartDetails
