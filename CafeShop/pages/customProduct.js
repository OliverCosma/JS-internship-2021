import React, {useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { lighten, Typography } from '@material-ui/core';
import Image from 'next/image';
import espresso from '../images/ingredients/coffee/espresso.jpg'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ingredients } from '../constants/products';
import { products } from '../constants/products';
import { GridList, Card, CardActionArea, CardContent, CardMedia, CardActions } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";
import { FormatIndentIncrease } from '@material-ui/icons';
import { HandleAddToCartContext } from '../app/helpers';
import { IconButton } from '@material-ui/core';
import RemoveCircleOutlineSharpIcon from '@material-ui/icons/RemoveCircleOutlineSharp';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';



export const getStaticProps = async () => {
  const res = await fetch('http://1c3075124a07.ngrok.io/ingredients');
  const data = await res.json();

  return {
    props: {
      ingredients: data.data
    }
  }
}

export default function customProduct({ ingredients }) 
{

  const contextHandle = useContext(HandleAddToCartContext)

  const [priceProduct, setPriceProduct]=useState(0);
  const [ing, setIngredients] = useState([]);
  const [name, setName] = useState('')
  const [prodId, setId] = useState('')
  const [quantity, setQuantity] = useState(1);

  function add(props) {

    const ingredientFromList = ing.find( ({ id }) => id  === props.id );            //if we find the product already in our cart

    if (!ingredientFromList)
    {
    let newIng = ing;
    newIng.push({
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: 1
    })
    
    setPriceProduct(priceProduct+props.price)
    setIngredients(newIng)
    // console.log(ing);
    var ul = document.getElementById("ingrediente");
    var li = document.createElement("li");
    li.setAttribute('id', props.id)
    li.appendChild(document.createTextNode(props.name));
    ul.appendChild(li);
    }
    else
    {
      increase(props.id);
      // console.log(ing);
    }

  }

  function removeFromList (ingredientID)
  {
    const myIngredientIndex = ing.findIndex((obj => obj.id === ingredientID));
    ing.splice(myIngredientIndex, 1)
    var myobj = document.getElementById(ingredientID);
    myobj.remove();
  }

  function increase (ingredientID)
    {
        const myIngredientList = ingredients.findIndex((obj => obj.id === ingredientID));
        const myIngredientIndex = ing.findIndex((obj => obj.id === ingredientID));

        if (ingredients[myIngredientList].stock-ing[myIngredientIndex].quantity>0) 
        {
          setPriceProduct(priceProduct+ing[myIngredientIndex].price)
        ing[myIngredientIndex].quantity++;
        document.getElementById(ingredientID).innerHTML=ing[myIngredientIndex].name +" x "+ing[myIngredientIndex].quantity;
        }
        else 
        {
            alertStock(productFromList.name)
        }
    }

    const incrementProduct = () => {
      setQuantity(quantity + 1);
  }

    const decrementProduct = () => {
        if (quantity > 0)
            setQuantity(quantity - 1);
        // console.log(quantity);
    }


    function sub (ingredientID)
    {
      
      const myIngredientIndex = ing.findIndex((obj => obj.id === ingredientID));
      if (ing[myIngredientIndex]===undefined)
      return null;
      else 
      {
      if ((ing[myIngredientIndex].quantity)-1===0) 
      {
          setPriceProduct(priceProduct-ing[myIngredientIndex].price)
          removeFromList(ingredientID);
          
      }
      else
      {
        setPriceProduct(priceProduct-ing[myIngredientIndex].price)
        ing[myIngredientIndex].quantity--;
        // console.log(ing);
        document.getElementById(ingredientID).innerHTML=ing[myIngredientIndex].name +" x "+ing[myIngredientIndex].quantity;
      }
    }
  
  }


  function alertStock(nume_produs)
  {
      alert("Stoc insuficient pentru ingredientul " + nume_produs);
  }
 
  const plusMinus = {
    display: 'flex',
    alignItems: 'center',
    margin: '1rem 0',
    padding: '8px 0px',
  }


  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 200,
      boxShadow: "none"
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    }
  }))
  const classes = useStyles();


  const handleAddProduct=()=>{
    if(name){
      let product={name:name,ingredients:[]}
      if(ing){
        let ings=[];
        ing.forEach(element=>{
          let i={id:element.id, qty:element.quantity}
          ings.push(i)
        })
       product.ingredients=ings;
       console.log(product);
       (async () => {
        const rawResponse = await fetch('http://1c3075124a07.ngrok.io/products', {
          method: 'POST',
          headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(product)
        });
        const content = await rawResponse.json();
      console.log(content);
      let newProdId=content.data.id
        setId(newProdId);
        console.log('p: ', newProdId, ' q: ', quantity)
        contextHandle(newProdId,quantity);
      })();
      }
    }
  }
  // console.log("ing, ", ing)
  return (
    <>  <h3>Ingredients available:</h3>
      <Grid container spacing={10}>

        <Grid item xs={6}>
          <GridList style={{maxHeight: 532, overflow: 'auto'}} spacing="5" cols="3">
            {
              ingredients.map(
                (ingredient) =>
                  <Card style={{
                    boxShadow: "none",
                    maxWidth: 300,
                    borderRadius: 0,
                    position: 'relative'
                  }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Coffee image that you can't see"
                        height="200"
                        src='https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
                        title="Coffee image that you can't see"
                      />
                      <CardContent style={{ padding: '1rem 0 0 0' }}>
                        <Typography gutterBottom variant="h4" >
                          {ingredient.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="price">
                          ${ingredient.price/100}
                        </Typography>
                      </CardContent>

                    </CardActionArea>
                    <CardActions style={{ padding: 0 }}>
                    <Fab onClick={() => sub(ingredient.id)} size='small' color="primary" aria-label="add" style={{
                        position: 'absolute',
                        bottom: 70,
                        left: 10
                      }}>
                        <RemoveIcon />
                      </Fab>
                      <Fab onClick={() => add(ingredient)} size='small' color="primary" aria-label="add" style={{
                        position: 'absolute',
                        bottom: 70,
                        right: 10
                      }}>
                        <AddIcon />
                      </Fab>
                    </CardActions>
                  </Card>
              )
            }
          </GridList>
        </Grid>
        <Grid item xs={6}>
          <ul id='ingrediente'>
            <li><h3>Here you'll see what you've chosen</h3> </li>
            <li><h4>Price until now: {priceProduct/100}</h4></li>
          </ul>
          <div>Add a name <input type="text" id="name" onChange={event => setName(event.target.value)} value={name}></input></div>
          <Typography varian="p">{name}</Typography>
          
          <div style={plusMinus}>
            
            <IconButton size='small' onClick={decrementProduct}><RemoveCircleOutlineSharpIcon /></IconButton>
            <Typography variant='h3' style={{
                margin: 0,
                padding: '0 1rem 0 1rem'
              }}>{quantity}
            </Typography>
            <IconButton size='small' onClick={incrementProduct}>
                <AddCircleOutlineOutlinedIcon />
            </IconButton>
          </div>

          <Button variant="contained" onClick={ () => handleAddProduct()} >Add your recipe as product</Button>
         

        </Grid>
        
      </Grid>
   
    </>

  )
}