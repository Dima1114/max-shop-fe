import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import {Navigation} from "./components/Navigation";
import {ProductsGrid} from "./components/ProductsGrid";
import Footer from "./components/Footer";
import {getEntityList} from "./actions/listActions";
import {MenuDrawer} from "./components/MenuDrawer";
import {CircularProgress} from "@material-ui/core";
import {getUserInfo} from "./actions/authActions";

function Content() {

    const dispatch = useDispatch()
    const profile = useSelector(state => state.auth?.profile?.data)
    const menu = useSelector(state => state.list?.menu?.data.content || [])

    const [openDrawer, setOpenDrawer] = useState(false)

    const toggleDrawer = (event) => {
        event.preventDefault()
        setOpenDrawer(!openDrawer)
    }

    useEffect(() => {
            dispatch(getUserInfo())
        },
        [dispatch])

    useEffect(() => {
            if (profile) {
                dispatch(getEntityList("menu", "categories", {}))
            }
        },
        [dispatch, profile])

    return (
        <div className="App">
            {profile ?
                <React.Fragment>
                    <Navigation toggleDrawer={toggleDrawer}/>
                    <MenuDrawer menuList={menu} open={openDrawer} toggle={toggleDrawer}/>
                    <ProductsGrid/>
                </React.Fragment> :
                <CircularProgress/>}

            <Footer/>
        </div>
    );
}

export default Content;
