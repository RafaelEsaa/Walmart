import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import Drawer from '../components/Drawer';
import shoppingCartContext from '../context/shoppingCart/shoppingCartContext';
import { useStyles } from './styles';

const Header = () => {
    const shoppingsCartContext = useContext(shoppingCartContext)
    const { drawerCart, handleDrawerCart, productsInCart } = shoppingsCartContext;
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleOpenDrawer = () => {
        setOpenDrawer(!openDrawer)
        
        //change value drawer in reducer
        handleDrawerCart(!openDrawer)
    }

    return (
        <AppBar position="static">
            <Drawer open={drawerCart} onHandleDrawer={() => handleOpenDrawer()}/>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Walmart
                </Typography>
                <Button color="inherit" onClick={() => handleOpenDrawer()}>
                    {!productsInCart.length ? (
                        <Badge>
                            <ShoppingCart/>
                        </Badge>
                    ) : (
                        <Badge badgeContent={productsInCart.length}>
                            <ShoppingCart/>
                        </Badge>
                    )}
                </Button>
            </Toolbar>
        </AppBar>
    );
}
 
export default Header;