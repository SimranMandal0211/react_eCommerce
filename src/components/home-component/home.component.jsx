import Products from '../products/products.component';
import './homeComp.styles.css';

export default function HomeComponent(){
    return (
        <div className="home-container">
            <p>Sort</p>
            <Products />
        </div>
    );
}