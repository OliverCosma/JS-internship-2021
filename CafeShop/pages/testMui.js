import React from 'react'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Card, CardActionArea, CardContent, CardMedia, CardActions } from '@material-ui/core';
import image from '../images/products/coffee1.jpg'
import Fab from '@material-ui/core/Fab';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import style from '../styles/Home.module.css'
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
const testMui = () => {
    const classes = useStyles();
    return (
        <>
            <Button variant="contained" color="primary" >
                Primary
            </Button>
            <Typography variant="h1">This is an h1</Typography>
            <Typography variant="h2">This is an h2</Typography>
            <Typography variant="h3">This is an h3</Typography>
            <Card className={classes.root} style={{
                boxShadow: "none",
                maxWidth: 200,
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
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="price">
                            $12
                        </Typography>
                    </CardContent>

                </CardActionArea>
                <CardActions style={{ padding: 0 }}>
                    <Fab size='small' color="primary" aria-label="add" style={{
                        position: 'absolute',
                        bottom: 70,
                        right: 10
                    }}>
                        <AddShoppingCartIcon />
                    </Fab>
                </CardActions>
            </Card>



        </>
    );
}

export default testMui;