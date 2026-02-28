import { Header } from '../../components/Header';
// import { Link } from "react-router";
import './OrdersPage.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import OrderFavicon from '../../../public/images/orders-favicon.png';
// import { formatMoney } from '../../utils/money';
// import dayjs from 'dayjs';
import { OrderGrid } from './OrdersGrid';

export function OrdersPage({ cart }) {
    const [orders, setOrders] = useState([]);
    
    /*
    useEffect(() => {
        axios.get('/api/orders?expand=products')
            .then((response) => {
                setOrders(response.data);
            });
    }, []);
    */
    useEffect(() => {
        const fetchOrdersData = async() => {
            let response = await axios.get('/api/orders?expand=products');
            setOrders(response.data);
        };
        fetchOrdersData();
   }, []);

    return (
        <>
            <title>
                Orders
            </title>
            <link rel="icon" type="image/svg+xml" href={OrderFavicon} />

            <Header cart={cart}/>

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <OrderGrid 
                    orders={orders}/>
            </div>
        </>
    );
}