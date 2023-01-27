import React, { useEffect, useReducer } from "react";
import { useContext } from "react";
import axios from "axios";

//create context
import { createContext } from "react";
import ProductReducer from "../reducers/productreducer"; //make reducerfn in new folder file and export here
const createcontext = createContext();
const api = "https://api.pujakaitem.com/api/products";

//make provider wrapper
const AppProviderr = ({ children }) => {
  //start using reducerhook to maintain state
  const initialstate = {
    isloading: false,
    isError: false,
    product: [],
    featureproducts: [],
    //singleproduct
    isSingleLoading: false,
    singleProduct: {},
  };
  const [state, dispatch] = useReducer(ProductReducer, initialstate);
  //access api using axios liberary
  const getdata = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      //dispatch product from here
      dispatch({ type: "MY_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  //make single product api
  const getSingleproduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getdata(api);
  }, []);

  return (
    <createcontext.Provider value={{ ...state, getSingleproduct }}>
      {children}
    </createcontext.Provider>
  );
};

//custom hook
const useProductContext = () => {
  return useContext(createcontext);
};

export { AppProviderr, createcontext, useProductContext };
