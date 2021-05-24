import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    sectProduct: {
        border: '1px solid #CBCBCB',
        borderRadius: 20,
        margin: 20
    },
    sectImage: {
        padding: 20,
        borderBottom: '1px solid #CBCBCB'

    },
    imageProduct: {
        width: '100%'
    },
    sectDescription: {
        padding: 20,
        '& .old-price': {
            textDecoration: 'line-through',
            fontSize: 10
        }
    },
    sectTitle: {
        paddingBottom: 10,
        '& .title': {
            fontWeight: 200,
            paddingBottom: 10,
            '& .brand': {
                fontWeight: 'bold'
            }
        },
        '& .price': {
            fontWeight: 'bold'
        },
    },
    sectTags: {
        padding: '10px 0px'
    }
}))