import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import coffee from '../images/products/coffee1.jpg'
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router'
import RemoveCircleOutlineSharpIcon from '@material-ui/icons/RemoveCircleOutlineSharp';
import Alert from '@material-ui/lab/Alert';
import { Typography } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { IconButton } from '@material-ui/core';
import { HandleAddToCartContext } from '../app/helpers';

import { products, ingredients } from '../constants/products'

const ProductId = (  ) => {

    const contextHandle = useContext(HandleAddToCartContext)
    
    const router = useRouter()
    const { productId } = router.query 

    const [status, setStatus] = useState();
    const [quantity, setQuantity] = useState(1);
    const [error, setError] = useState(false)
    const [product, setProduct] = useState({ ingredients:[] });

    useEffect(() => {
        if(productId !== undefined)
        {
            fetch(`http://1c3075124a07.ngrok.io/products/${productId}`)
            .then((data => data.json()))
            .then((res => { setProduct(res.data)
                 console.log(res)}
            ))
            .catch((err => setError(err)));
        }
        
    }, [productId]); 
   

    console.log("id: ", productId);
    console.log("product: ", product);

    const description = {
        margin: '0 auto',
    }

    const plusMinus = {
        display: 'flex',
        alignItems: 'center',
        margin: '1rem 0',
        padding: '8px 0px',
    }

    const priceStyle = {
        marginBottom: 15,
        fontSize: 25,
        padding: 7,
    }

    const contentStyle = {
        display: 'flex',
        width: '60%',
        margin: '0 auto',
        marginTop: 70,
        marginBottom: 160,
        padding: 10,
    }

    const errorMessage = {
        color: 'red',
        marign: 100,
        marginLeft: '41%',
        width: '100%',
        alignItems: 'center',
    }

    const incrementProduct = () => {
        setQuantity(quantity + 1);
    }

    const decrementProduct = () => {
        if (quantity > 0)
            setQuantity(quantity - 1);
        console.log(quantity);
    }

    if (productId !== undefined && product !== undefined) {
        return (
            <div style={contentStyle}>
                <Image src={coffee}
                    width={400}
                    height={400}
                    OobjectFit='cover' />
                <div style={description}>
                    <Typography variant="h2">{product.name}</Typography>
                    <Typography variant="h3">Ingredients :</Typography>
                    <ul>
                        {product.ingredients.map((ingredient) => {
                            const ing = ingredients.find(x => x.id === ingredient.id)
                            return (
                                <li key={ingredient.id}>{ing.name}</li>
                            )
                        })}
                    </ul>
                    <div style={plusMinus}>
                        <IconButton size='small' onClick={decrementProduct}><RemoveCircleOutlineSharpIcon /></IconButton>
                        <Typography variant='h3' style={{
                            margin: 0,
                            padding: '0 1rem 0 1rem'
                        }}>{quantity}</Typography>
                        <IconButton size='small' onClick={incrementProduct}>
                            <AddCircleOutlineOutlinedIcon />
                        </IconButton>
                    </div>
                    <div style={priceStyle} ><Typography variant="h3">Price: ${ product.price * quantity /100 }</Typography></div>
                    <div>
                        { quantity > 0 ? (
                            <Button onClick={() => {setStatus( contextHandle(productId, quantity))}} variant="contained" color="primary" style={{ marginBottom: '1rem' }}> Add to Cart </Button>
                            ) : (
                            <Button disabled variant="contained" color="primary" style={{ marginBottom: '1rem'}}> Add to Cart </Button>

                        )}

                        {console.log("status: ", status)}
                        { status === 'success' ? (
                            <Alert severity="success">It was successfully added to the cart</Alert>
                        ) : status === 'error' ? (
                            <Alert severity = "error" >The product has not been added to the cart!</Alert>
                        ) : ( <div></div>)
                        }
                    </div>
                </div>
            </div >
        )
    }
    return (
        <div>
            <h4 style={errorMessage}>This product does not exist</h4>
            <h2 style={{color: 'green', marginLeft: '44%'}}><a href="http://localhost:3000">Go to HOME</a></h2>
        </div>
    )


}

export default ProductId
