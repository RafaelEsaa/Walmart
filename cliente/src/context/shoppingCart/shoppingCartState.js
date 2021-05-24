import React, { useReducer } from 'react';

import ShoppingCartContext from './shoppingCartContext'
import ShoppingCartReducer from './shoppingCartReducer'
// import { v4 as uuidv4 } from 'uuid';
import {
    AGREGAR_PRODUCTO,
    DRAWER_CART,
    ADD_ALL_DISCOUNT,
    PRODUCT_SELECTED,
    ALL_PRODUCTS,
    DISCOUNT_PRODUCTS,
    BRAND_RECOMMEND,
    BRAND_WITH_DISCOUNT,
    TOTAL_PRICE
} from '../../types'

const ProyectoState = props => {
    const initialState = {
        allProducts: [],
        productsInCart: [],
        productAdded: null,
        discounts: [],
        brandToRecommend: null, //array
        drawerCart: false,
        discountProducts: null, //array of products by higher discount brand
        brandWithDiscountApply: [],
        //discount calculated
        totalPrice: null
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(ShoppingCartReducer, initialState)

    //Add all products
    const addProducts = async (products) => {
        //Add all products
        await dispatch({
            type: ALL_PRODUCTS,
            payload: products
        })
    }

    //Add new product to cart
    const agregarProducto = product => {
        //Add product in the state
        dispatch({
            type: AGREGAR_PRODUCTO,
            payload: product
        })
    }

    const productSeleted = (product) => {
        //Add product in the state
        dispatch({
            type: PRODUCT_SELECTED,
            payload: product
        })
    }

    //Open or Close Drawer
    const handleDrawerCart = drawerOpt => {
        dispatch({
            type: DRAWER_CART,
            payload: drawerOpt
        })
    }
    
    //Add all discount
    const createDiscountList = discounts => {
        dispatch({
            type: ADD_ALL_DISCOUNT,
            payload: discounts
        })
    }
    
    const fnDiscountBrandRelatedProducts = (data) => {
        dispatch({
            type: DISCOUNT_PRODUCTS,
            payload: data
        })
    }
    
    const fnBrandRecommend = (brandToRecommend) => {
        dispatch({
            type: BRAND_RECOMMEND,
            payload: brandToRecommend
        })
    }
    
    const fnBrandWithDiscountApply = (product) => {
        dispatch({
            type: BRAND_WITH_DISCOUNT,
            payload: product
        })
    }

    //Price with discount
    const fnTotalPrice = (totalPrice) => {
        dispatch({
            type: TOTAL_PRICE,
            payload: totalPrice
        })
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                //variables
                allProducts: state.allProducts,
                productsInCart: state.productsInCart,
                drawerCart: state.drawerCart,
                discounts: state.discounts,
                productAdded: state.productAdded,
                discountProducts: state.discountProducts,
                brandToRecommend: state.brandToRecommend,
                brandWithDiscountApply: state.brandWithDiscountApply,
                totalPrice: state.totalPrice,
                //functions
                agregarProducto,
                createDiscountList,
                handleDrawerCart,
                productSeleted,
                addProducts,
                fnDiscountBrandRelatedProducts,
                fnBrandRecommend,
                fnBrandWithDiscountApply,
                fnTotalPrice
            }}
        >
            {props.children}
        </ShoppingCartContext.Provider>
    )
}

export default ProyectoState