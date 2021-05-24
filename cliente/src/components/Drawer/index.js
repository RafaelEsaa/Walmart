import React, { Fragment, useContext } from 'react';
import { Grid, Typography, Drawer } from '@material-ui/core';
import NumberFormat from 'react-number-format';
import shoppingCartContext from '../../context/shoppingCart/shoppingCartContext'
import { useStyles } from './styles';

const TemporaryDrawer = ({ open, onHandleDrawer }) => {
    const shoppingsCartContext = useContext(shoppingCartContext)
    const { productsInCart, totalPrice } = shoppingsCartContext;
    const classes = useStyles();

    const list = () => {
        return (
            <Grid className={classes.drawer}>
                <Typography className={classes.title}>Productos en el carrito</Typography>
                <Grid className={classes.productsInCart}>
                    {productsInCart && productsInCart.map((product, key) => {
                        return (
                            <Grid key={key} className={classes.product}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                >
                                    <img className="image" src={`http://${product.image}`}/>
                                </Grid>
                                <Grid 
                                    className="description-product"
                                    container
                                    direction="column"
                                >
                                    <Typography variant="p">{product.brand}</Typography>
                                    <Typography variant="p">{product.description}</Typography>
                                    <Typography variant="p">
                                        <NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                    </Typography>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        )
    };

    return (
        <div>
            <Fragment>
                <Drawer anchor={'right'} open={open} onClose={() => onHandleDrawer()}>
                    {list()}
                    <Grid className={classes.totalPrice}>
                        <Typography variant="p">Precio final: {totalPrice}</Typography>
                    </Grid>
                </Drawer>
            </Fragment>
        </div>
    );
}

export default TemporaryDrawer;