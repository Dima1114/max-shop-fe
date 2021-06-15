import React from "react";
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import Content from "./Content";
import configureStore from "./store";
import * as locales from '@material-ui/core/locale';
import {blueGrey, cyan} from "@material-ui/core/colors";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

const store = configureStore();

const theme = {
    palette: {
        primary: {
            main: blueGrey[500],
            dark: blueGrey[600]
        },
        secondary: {
            main: cyan[500],
        },
    },
}

function App() {
    const [locale, setLocale] = React.useState('ruRU');

    return <Provider store={store}>
        <ThemeProvider theme={createMuiTheme(theme, locales[locale])}>
            <BrowserRouter>
                <Content/>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
}

export default App;
