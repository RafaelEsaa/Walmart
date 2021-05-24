import React, { useContext, useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Product from '../Product'
import shoppingCartContext from '../../context/shoppingCart/shoppingCartContext'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Recommend = () => {
    const shoppingsCartContext = useContext(shoppingCartContext)
    const { productsInCart, discounts, allProducts, fnBrandRecommend } = shoppingsCartContext;
    const [discountBrandRelatedProducts, setDiscountBrandRelatedProducts] = useState(null)

    
    const createProductsRecommend = () => {
        //ordeno las marcas de mayor a menor
        const sortDiscountHigher = discounts.sort((a, b) => b.discount - a.discount);
        
        //todas las marcas que estan en los productos del carrito
        let brands = productsInCart.map(product => {
            const result = sortDiscountHigher.filter(discount => discount.brand === product.brand);
            return {
                brand: result[0].brand,
                discount: result[0].discount,
                threshold: result[0].threshold
            }
        })

        //marcas no repetidas
        const brandsInTheCart = [];
        for(var indice = 0; indice < brands.length; indice++) {
            const brand = brands[indice];
            let esDuplicado = false;
            for(var i = 0; i < brandsInTheCart.length; i++) {

                if (brandsInTheCart[i].brand === brand.brand) {
                esDuplicado = true;
                break;
                }
            }
            
            if (!esDuplicado) {
                brandsInTheCart.push(brand);
            }
        }

        brandsInTheCart.sort((a, b) => b.discount - a.discount)

        fnBrandRecommend(brandsInTheCart)
        let productsToRecommend = allProducts.filter(product => product.brand === brandsInTheCart[0].brand)
        console.log('productos en el carrito: ', productsInCart)
        
        //products recomendados segun marca con mayor descuento
        setDiscountBrandRelatedProducts(productsToRecommend);









        // allProducts.map(products => {
        //     productsInCart.map(productInCart => {
        //         if(productInCart._id !== products._id){
        //             productsToCompare.push(products)
        //         }
        //     })
        // })
        //
        // var props = ['id', 'brand', 'description', 'image'];
        // var productsToRecommend = allProducts.filter(function(o1){
        //     // filter out (!) items in result2
        //     return productsInCart.some(function(o2){
        //         return o1.brand === o2.brand && o2._id !== o1._id;
        //     });
        // }).map(function(o){
        //     // use reduce to make objects with only the required properties
        //     // and map to apply this to the filtered array as a whole
        //     return props.reduce(function(newo, name){
        //         newo[name] = o[name];
        //         return newo;
        //     }, {});
        // });
        
        // console.log('productos a recomendar: ', productsToRecommend)
        // setDiscountBrandRelatedProducts(productsToRecommend)
    }

    useEffect(() => {
        if(productsInCart.length) {
            createProductsRecommend()
        }
    }, [productsInCart])

    return (
        <Grid container style={{padding: 20}}>
            <Typography variant="h6">Mayor descuento en esta marca según tu carrito</Typography>
            {discountBrandRelatedProducts ? (
                <Carousel plugins={['arrows']}>
                    {discountBrandRelatedProducts.map((product, key) => (
                        <Grid item xs={6} lg={4} key={key}>
                            <Product product={product}/>
                        </Grid>
                    ))}
              </Carousel>
            ) : (
                <Typography variant="h6">No hay recomendaciones</Typography>
            )}
        </Grid>
    );
}
 
export default Recommend;