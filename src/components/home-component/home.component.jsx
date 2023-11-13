import Products from '../products/products.component';
import Sort from '../Sort/sort.component';
import './homeComp.styles.css';

export default function HomeComponent(){
    return (
        <div className="home-container">
            <Sort />
            <Products />
        </div>
    );
}