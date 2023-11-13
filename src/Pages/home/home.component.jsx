import React from "react";

import HomeComponent from "../../components/home-component/home.component";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsAsync } from "../../store/products/product.action";


export default function Home(){
    const dispatch = useDispatch();

    //Fetching product on application loading
    useEffect(() => {
        const getProducts = async () => {
        dispatch(fetchProductsAsync());
        };
        getProducts();
    }, );

    return <HomeComponent />;
}