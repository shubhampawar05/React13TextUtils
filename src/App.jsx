import { useReducer, useState } from "react";
import "./App.css";
import Home from "./Compments/Home/Home";


import {
  Route,createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import About from "./Compments/About/About";
import Contact from "./Compments/Contact/Contact";


const initialState = {
  text: "",
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "text":
      return {
        ...state,
        text: action.payload,
      };
    case "upper":
      return {
        ...state,
        text: state.text.toUpperCase(),
      };
    case "lower":
      return {
        ...state,
        text: state.text.toLowerCase(),
      };
    case "clear":
      return {
        ...state,
        text: "",
      };
    case "trim":

      return {
        ...state,
        text :state.text.trim().split(/\s+/).join(" ")
      };
    default:
      return state;
  }
};


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
          <Route path="" element={<Home text={state.text} dispatch={dispatch}/>}/>
          <Route path="aboutus" element={<About/>}/>
          <Route path="contactus" element={<Contact/>}/>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
