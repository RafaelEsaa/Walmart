import React, { Fragment, useContext, useState, useEffect } from 'react';
import SnackBar from 'my-react-snackbar';
import AllProducts from '../components/AllProducts';
import Recommend from '../components/Recommend';
import shoppingCartContext from '../context/shoppingCart/shoppingCartContext'

const Dashboard = () => {
    const shoppingsCartContext = useContext(shoppingCartContext)
    const { productsInCart } = shoppingsCartContext;

    const [openAlert, setOpenAlert] = useState(false);

    const clearSnackbar = () => setTimeout(() => {
        setOpenAlert(false)
      }, 1500);

    useEffect(() => {
        if(productsInCart.length) {
            setOpenAlert(true)
            clearSnackbar()
        }
    }, [productsInCart])

    return (
        <Fragment>
            <SnackBar
                open={openAlert}
                message={'Producto agregado al carrito'}
                position='bottom-center'
                type='success'
                yesLabel='Ok'
                onYes={() => { setOpenAlert(false) }}
            />
            {productsInCart.length ? (
                <Recommend/>
            ) : (
                null
            )}
            <AllProducts/>
        </Fragment>
    );
}
 
export default Dashboard;