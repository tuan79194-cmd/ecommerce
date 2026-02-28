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

    /*
    useEffect(() => {
        axios.get('/api/products')
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
        });

    }, []);
    */
   // The inner function in useEffect should not return a Promise
   // it is sort of breaking the rules of useEffect
   // It should only return nothing or a cleanup function like this: 
   /*
    useEffect(() => {
        window.addEventListener('scroll', () => {
            
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);
   */
    // A cleanup function is useful If we want to do some cleanup when this component is removed
   /*
    useEffect(async() => {
        const response = await axios.get('/api/products')
        setProducts(response.data);
    }, []);
    */
   // to solve this, we usually create a new function inside useEffect:
    useEffect(() => {
        // Temporarily add console.log to check if useEffect runs once.
        console.log('useEffect');
        const getHomeData = async() => {
            const response = await axios.get('/api/products')
            setProducts(response.data);
        };

        getHomeData();
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