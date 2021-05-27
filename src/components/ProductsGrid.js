import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ProductCard from "./ProductCard";
import {Box} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function ProductsGrid({products}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {products && <Box display="flex" ustifyContent="center" flexWrap={"wrap"}>
                {products.map((it, i) =>
                    <Box p={1}>
                        <ProductCard title={it.title} price={it.price} salePrice={it.salePrice}/>
                    </Box>)}
            </Box>}
        </div>
    )
}
