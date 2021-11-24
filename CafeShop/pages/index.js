import React, { useContext } from 'react'

import Typography from '@material-ui/core/Typography';
import { Card, CardActionArea, CardContent, CardMedia, CardActions } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import styles from '../styles/Home.module.css'

import Shortcuts from '../components/Shortcuts'
import Divider from '../components/Divider'
import { HandleAddToCartContext } from '../app/helpers';


export const getStaticProps = async () => {
  const res = await fetch('http://1c3075124a07.ngrok.io/products');
  const data = await res.json();

  return {
    props: {
      products: data.data
    }
  }
}

export default function Home({ products }) {
  const contextHandle = useContext(HandleAddToCartContext)
  return (
    <>

      <div className={styles.bckimage}>
        {/* <Navbar/> */}
        <main className={styles.mainHomePage}>
          <Typography variant="h1" style={
            {
              color: '#fff',
              marginTop: '50px'
            }
          }>Fresh <span className={styles.spanes}>coffee</span> for you<br></br> every day.</Typography>
          <Typography variant="h4" className={styles.white}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi assumenda, soluta praesentium<br></br> quasi magnam dolore! Expedita beatae enim molestiae labore soluta consequatur vel nisi itaque, temporibus<br></br> voluptas eveniet voluptates in ullam debitis vitae maiores distinctio accusamus adipisci neque quae libero?</Typography>
          <Button variant="contained" color="primary" style={
            {
              padding: "10px 20px",
              width: "200px"
            }
          }>See Products</Button>
        </main>
      </div>
      <Shortcuts products={products} />

      <div className="products" style={{
        margin: '3rem auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>

        <Typography variant="h2">Our Specialities</Typography>
        <Typography variant="h4">Choose One of Our Special Recipes</Typography>
        <Divider />
        <Grid container spacing={5} justifyContent='center' style={{
          width: '100%',
          padding: '0 10vw 0 10vw'
        }}>

          {products.map((product) => (
            <Grid item xs={6} sm={4} md={3} key={product.id}>
              <Link href={product.id}>
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
                      src='https://images.unsplash.com/photo-1541167760496-1628856ab772?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1194&q=80'
                      title="Coffee image that you can't see"
                    />
                    <CardContent style={{ padding: '1rem 0 0 0' }}>
                      <Typography gutterBottom variant="h4" >
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p" className="price">
                        ${product.price / 100}
                      </Typography>
                    </CardContent>

                  </CardActionArea>
                  <CardActions style={{ padding: 0 }}>
                    <Fab size='small' color="primary" aria-label="add" style={{
                      position: 'absolute',
                      bottom: 70,
                      right: 10
                    }} onClick={(e) => {
                      e.preventDefault();
                      contextHandle(product.id, 1)
                    }}>
                      <AddShoppingCartIcon />

                    </Fab>
                  </CardActions>
                </Card>
              </Link>
            </Grid>

          ))}
        </Grid>

      </div>
    </>
  );
}
