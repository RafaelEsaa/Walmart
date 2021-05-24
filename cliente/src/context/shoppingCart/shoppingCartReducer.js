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

export default (state, action) => {
    switch (action.type) {
        case ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload
            }
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                productsInCart: [...state.productsInCart, action.payload]
            }
        case ADD_ALL_DISCOUNT:
            return {
                ...state,
                discounts: action.payload
            }
        case DRAWER_CART:
            return {
                ...state,
                drawerCart: action.payload
            }
        case PRODUCT_SELECTED:
            return {
                ...state,
                productAdded: action.payload
            }
        case DISCOUNT_PRODUCTS:
            return {
                ...state,
                discountProducts: action.payload
            }
        case BRAND_RECOMMEND:
            return {
                ...state,
                brandToRecommend: action.payload
            }
        case BRAND_WITH_DISCOUNT:
            return {
                ...state,
                brandWithDiscountApply: [...state.brandWithDiscountApply, action.payload]
            }
        case TOTAL_PRICE:
            return {
                ...state,
                totalPrice: action.payload
            }
        default:
            return state
    }
};