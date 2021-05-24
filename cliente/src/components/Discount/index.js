import React from 'react';
import { Box } from '@material-ui/core';
import { useStyles } from './styles';

const Discount = () => {
    const classes = useStyles();
    
    return (
        <Box component="span" className={classes.discount}>
            25%
        </Box>
    );
}
 
export default Discount;