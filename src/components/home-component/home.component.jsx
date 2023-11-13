import Products from '../products/products.component';
import Sort from '../sort/sort.component';

import { ClipLoader } from "react-spinners";

import { useSelector } from "react-redux";
import { selectIsLoading } from "../../store/products/product.selector";

import './homeComp.styles.css';

const override = {
    display: "block",
    margin: "20% auto",
};

export default function HomeComponent(){
    const isLoading = useSelector(selectIsLoading);

    return (
        <div className="home-container">
            <Sort />
            {isLoading ? <ClipLoader cssOverride={override} /> : <Products />}
        </div>
    );
}