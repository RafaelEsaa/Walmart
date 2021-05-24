import React, { useEffect, useState, useContext } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { getAllProduct } from '../../services/product';
import { getAllDiscount } from '../../services/discount';
import shoppingCartContext from '../../context/shoppingCart/shoppingCartContext'
import Product from '../Product';
import SnackBar from 'my-react-snackbar';

const AllProducts = () => {
    const shoppingsCartContext = useContext(shoppingCartContext)
    const { 
        createDiscountList, 
        addProducts,
        //
        productsInCart, 
        brandToRecommend,
        fnTotalPrice
    } = shoppingsCartContext;

    const [productsApi, setProductsApi] = useState(null);

    const [openAlert, setOpenAlert] = useState(false);
    const [messageAlert, setMessageAlert] = useState(null)
    const [messageAlertDiscount, setMessageAlertDiscount] = useState(null)

    const getApiAllProducts = async () => {
        const result = await getAllProduct();
        if(result.data.length){
            setProductsApi(result.data)
            addProducts(result.data)
        }else{
            setProductsApi(null)
        }
    }
    
    const getApiAllDiscount = async () => {
        const result = await getAllDiscount();
        if(result.data.length) {
            createDiscountList(result.data)
        }
    }

    const findDiscount = () => { 
        let priceTotalProducts = 0;
        
        const sumPriceAndThresholdByBrand = brandToRecommend.map(brand => {
            let sumPrice = 0;
            let products = {
                brand: '',
                sumPrice: null,
                threshold: null,
                discount: null
            }
            productsInCart.map(productInCart => {
                if(productInCart.brand === brand.brand){
                    sumPrice += productInCart.price;
                    products = {
                        brand: brand.brand,
                        sumPrice,
                        threshold: brand.threshold,
                        discount: brand.discount
                    }
                }
            })
            return products
        })

        sumPriceAndThresholdByBrand.map((product, key) => {
            priceTotalProducts += product.sumPrice
            if(product.sumPrice < product.threshold){
                const result = product.threshold - product.sumPrice
                setMessageAlert(`Agrega ${result} de la marca ${product.brand} para obtener un descuento de ${product.discount}`)
            }else{
                setMessageAlert(`Se aplico un descuento de ${product.discount} por haber comprado ${priceTotalProducts} de productos de la marca ${product.brand}`)
                priceTotalProducts -= product.discount
            }
        })
        fnTotalPrice(priceTotalProducts)
    }

    const clearSnackbar = () => setTimeout(() => {
        setOpenAlert(false)
      }, 3500);

    useEffect(() => {
        if(messageAlert) {
            setOpenAlert(true)
            clearSnackbar()
        }
    }, [messageAlert])

    useEffect(() => {
        if(messageAlertDiscount) {
            setOpenAlert(true)
            clearSnackbar()
        }
    }, [messageAlertDiscount])

    useEffect(() => {
        if(brandToRecommend) {
            findDiscount()
        }
    }, [brandToRecommend])

    useEffect(() => {
        getApiAllProducts()
        getApiAllDiscount()
    }, [])

    return (
        <Grid container style={{padding: 20}}>
            {productsApi !== null ? productsApi.map((product, key) => {
                return (
                    <Grid item xs={3} key={key}>
                        <Product product={product}/>
                    </Grid>
                )
            }) : (
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <CircularProgress color="primary" />
                </Grid>
            )}
            <Grid>
                <SnackBar
                    open={openAlert}
                    message={messageAlert}
                    position='top-left'
                    type='success'
                    yesLabel='Ok'
                    onYes={() => { setOpenAlert(false) }}
                />
            </Grid>
        </Grid>
    );
}
 
export default AllProducts;