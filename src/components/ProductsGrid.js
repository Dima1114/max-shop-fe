import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ProductCard from "./ProductCard";
import {Box} from "@material-ui/core";
import {Pagination} from "./Pagination";
import {useDispatch, useSelector} from "react-redux";
import {getEntityList} from "../actions/listActions";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 20
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export const ProductsGrid = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const products = useSelector(state => state.list?.products?.data || [])

    const [page, setPage] = useState(0)
    const [pageSize, setPageSize] = useState(12)

    useEffect(() => {
            dispatch(getEntityList("products", "products", {page, size: pageSize}))
        },
        [dispatch, page, pageSize])

    return (
        <div className={classes.root}>
            {products && products.content &&
            <React.Fragment>
                <Pagination page={products.number}
                            setPage={setPage}
                            size={products.size}
                            setSize={setPageSize}
                            total={products.totalElements}/>
                <Box display="flex" justifyContent="center" flexWrap={"wrap"}>
                    {products.content.map((it, i) =>
                        <Box key={"item_" + i} p={1}>
                            <ProductCard product={it}/>
                        </Box>)}
                </Box>
                <Pagination page={products.number}
                            setPage={setPage}
                            size={products.size}
                            setSize={setPageSize}
                            total={products.totalElements}/>
            </React.Fragment>}
        </div>
    )
}
