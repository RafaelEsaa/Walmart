import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    drawer: {
        padding: 30
    },
    productsInCart: {
        paddingTop: 10
    },
    title: {
        fontSize: 22,
        fontWeight: 700
    },
    product: {
        border: '1px solid #CBCBCB',
        borderRadius: 10,
        margin: '20px 0px',
        '& .image': {
            width: '100px'
        },
        '& .description-product': {
            padding: 10
        }
    },
    totalPrice: {
        padding: '0px 30px'
    }
}))