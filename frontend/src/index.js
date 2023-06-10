import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap.min.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreens from "./screens/ProductScreens";
import store  from './utils/store'
import { Provider } from 'react-redux'
import CartScreen from "./screens/CartScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />

      <Route path="/product/:id" element={<ProductScreens />} />

      <Route path="/cart" element={<CartScreen/>} />


    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
    <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
