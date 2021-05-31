import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import Navigation from "./components/Navigation";
import ProductsGrid from "./components/ProductsGrid";
import Footer from "./components/Footer";
import {getEntityList} from "./actions/productsActions";
import {Button} from "@material-ui/core";

// const products = [
//     <ProductCard title={"React JS"}
//                  shortDescription={"awesome react courses"}
//                  price={"399.99"}
//                  salePrice={"299.99"}/>,
//     <ProductCard title={"React JS"}
//                  shortDescription={"awesome react courses"}
//                  price={"399.99"}
//                  salePrice={"299.99"}/>,
//     <ProductCard title={"React JS"}
//                  shortDescription={"awesome react courses"}
//                  price={"399.99"}
//                  salePrice={"299.99"}/>,
//     <ProductCard title={"React JS"}
//                  shortDescription={"awesome react courses"}
//                  price={"399.99"}
//                  salePrice={"299.99"}/>,
//
// ]

function Content() {

    const dispatch = useDispatch()
    const products = useSelector(state => state.productsReducer?.products?.data || [])
    // const [reducer, dispatch] = userReducer()

    const [page, setPage] = useState(0)

    useEffect(() => {
            dispatch(getEntityList("products", "products", {page}))
        },
        [dispatch, page])

    return (
        <div className="App">
            <Navigation/>
            <ProductsGrid products={products}/>
            <Button
                onClick={() => setPage(page - 1)}>
                previous
            </Button>
            <Button
                onClick={() => setPage(page + 1)}>
                next
            </Button>
            <Footer />
            {/*<img src="/logo512.png" alt="image" />*/}
            {/*<header className="App-header">*/}
            {/*  <img src={logo} className="App-logo" alt="logo" />*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.js</code> and save to reload.*/}
            {/*  </p>*/}
            {/*  <a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    Learn React*/}
            {/*  </a>*/}
            {/*</header>*/}
        </div>
    );
}

export default Content;
