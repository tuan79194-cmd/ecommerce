import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
// import { products } from '../../starting-code/data/products';
import './HomePage.css';
// import { formatMoney } from '../../utils/money';
import { ProductsGrid } from './ProductsGrid';

export function HomePage({ cart }) {
    /*
    fetch('http://localhost:3000/api/products')
        .then((response) => {
            console.log(response);
            return response.json();
        }).then((data) => {    
            console.log(data);
        });
    */
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products')
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
        });

    }, []);

    return (
        <>
            <title>Ecommerce Project</title>
            <link rel="icon" type="image/svg+xml" href="/images/home-favicon.png" />

            <Header cart={cart}/>

            <div className="home-page">
                <ProductsGrid products={products} />
            </div>
        </>
    );
}