import React from 'react';
import ReactDOM from 'react-dom';
import { hydrate, render } from "react-dom";
import Routes from "./routes"
//import store from './store'
import { GlobalStyle, AppStyle } from './globalStyle'
import { Provider } from 'react-redux'



class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <GlobalStyle/>
                <AppStyle>
                    <Routes/>
                </AppStyle>
            </React.Fragment>
        )
    }
}

const rootElement = document.getElementById('app')
if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement)
} else {
    render(<App />, rootElement);
}
