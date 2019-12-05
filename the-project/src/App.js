import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from "./components/pages/home/home"
import About from "./components/pages/about/about"

function App() {
  return (
    <div className="App">
       <BrowserRouter>
              <div>
                {routes.map((route, index) => {
                        return (<Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />)
                    })
                }
              </div>
            </BrowserRouter>
    </div>
  );
}

let routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    exact: true,
    component: About
  },
  {
    path: "/outro",
    exact: true,
    component: Home
  }
]

export default App;
