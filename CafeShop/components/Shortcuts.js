import React from 'react'

import styles from '../styles/Shortcuts.module.css'

import Typography from '@material-ui/core/Typography';
import { Card, CardActionArea, CardContent, CardMedia, CardActions } from '@material-ui/core';
import Link from '@material-ui/core/Link'

import makeyourown from '../images/makeYourOwn.jpg'

const Shortcuts = (props) => {
    return (
        <div className={styles.shortcuts}>
            <Card style={{
                boxShadow: "none",
                flex: 1,
                borderRadius: 0,
                position: 'relative',
                margin: '2rem'
            }}>
                <CardActionArea>
                    <CardContent style={{ padding: '1rem 0 0 0' }}>
                        <Typography gutterBottom variant="h2" >
                            Frequently Ordered
                        </Typography>
                        <Typography variant="h4" color="textSecondary" component="p">
                            Product Name
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        alt="Coffee image that you can't see"
                        height="200"
                        src='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                        title="Coffee image that you can't see"
                    />

                </CardActionArea>
            </Card>
            <Card style={{
                boxShadow: "none",
                flex: 1,
                borderRadius: 0,
                position: 'relative',
                margin: '2rem'
            }}>
                <Link href='http://localhost:3000/customProduct' underline = "none">
                <CardActionArea>                    
                    <CardContent style={{ padding: '1rem 0 0 0' }}>
                        <Typography gutterBottom variant="h2" >
                            Be Your Own Barista
                        </Typography>
                        <Typography variant="h4" color="textSecondary" component="p">
                            Make Your Own Bevarage
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        alt="Coffee image that you can't see"
                        height="200"
                        src='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                        title="Coffee image that you can't see"
                    />               
                </CardActionArea>
               </Link>
            </Card>
        </div>
    );
}

export default Shortcuts;