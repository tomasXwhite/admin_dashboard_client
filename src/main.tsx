import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "bootstrap/scss/bootstrap.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom"
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
)
