import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Grid, Typography, Box, Chip, Button } from '@material-ui/core';
import NumberFormat from 'react-number-format';
import SnackBar from 'my-react-snackbar';
import shoppingCartContext from '../../context/shoppingCart/shoppingCartContext'
import Discount from '../Discount'
import { useStyles } from './styles';

const Product = ({ product }) => {
    const shoppingsCartContext = useContext(shoppingCartContext)
    const { 
        agregarProducto, 
        productSeleted, 
        handleDrawerCart
    } = shoppingsCartContext;
    const classes = useStyles();

    const handleAddProduct = () => {
        agregarProducto(product);
        productSeleted(product)
        // handleDrawerCart(true)
    }

    return (
        <Fragment>
            <Grid className={classes.sectProduct}>
                <Grid className={classes.sectImage}>
                    <img className={classes.imageProduct} style={{ width: '100%' }} src={`http://${product.image}`} alt=""/>
                </Grid>
                <Grid className={classes.sectDescription}>
                    <Grid className={classes.sectTitle}>
                        <Typography variant="p" className="title">
                            <Box component="span" className="brand">
                                {product.brand}
                            </Box>
                            {' '}
                            {product.description}
                        </Typography>
                    </Grid>
                    <Grid>
                        <Grid 
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                        >
                            <Typography className="price" variant="p">
                                <NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                            </Typography>
                            <Discount/>
                        </Grid>
                        {/* <Typography className="old-price">
                            $700.000
                        </Typography> */}
                    </Grid>
                    <Grid className={classes.sectTags}>
                        <Chip variant="outlined" color="primary" size="small" label="Clickable"/>
                    </Grid>
                    <Grid>
                        <Button variant="outlined" color="primary" onClick={() => handleAddProduct()}>
                            Agregar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
}
 
export default Product;