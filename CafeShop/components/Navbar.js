import React from 'react'
import Link from '@material-ui/core/Link';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styles from '../styles/Navbar.module.css'
import Typography from '@material-ui/core/Typography';


const Navbar = (props) => {
    return (
        <div className={styles.navbar} >
            <Typography variant="h2" style={{ color: 'white' }} >Cafe GOAT</Typography>
            <ul className={styles.links}>
                <li><Link style={{ color: 'white' }} href='/'>Home</Link></li>
                <li><Link style={{ color: 'white' }} href='/customProduct'>Make Your Own</Link></li>
                <li><Link style={{ color: 'white', position: 'relative' }} href='http://localhost:3000/checkout/cartDetails'><ShoppingCartIcon /><p style={{
                    width: '1.5rem',
                    height: '1.5rem',
                    textAlign: 'center',
                    padding: '1px',
                    borderRadius: '50%',
                    backgroundColor: 'rgb(255, 101, 101)',
                    color: 'white',
                    position: 'absolute',
                    top: '-5px',
                    right: '-15px'
                }}>{props.counter}</p></Link></li>
            </ul>
        </div >
    )
}

export default Navbar
