import React from "react";
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import Content from "./Content";
import configureStore from "./store";

const store = configureStore();

function App() {
    return <Provider store={store}>
        <BrowserRouter>
            <Content/>
        </BrowserRouter>
    </Provider>
}

export default App;
