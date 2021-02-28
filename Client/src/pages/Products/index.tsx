import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Product from './product';
import axios from "axios";
import { IProduct } from "../../interfaces/product";
export default function ProductContainers() {


    interface IState {
        products: IProduct[];
    }


    const [state, setState] = useState<IState>({
        products: []
    });


    useEffect(() => {
        console.log("useEffect  product container");
        const fetchData = async () => {
            const res = await axios.get(process.env.REACT_APP_BASE_URL + "/product");
            if (res.status === 200) {
                const products: IProduct[] = res.data;
                console.log(products);
                setState({ products: products });
            }
        }
        fetchData();
    }, []);

    return (<Product products={state.products}></Product>)

}