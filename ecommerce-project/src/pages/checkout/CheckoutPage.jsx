import './CheckoutPage.css';
import { CheckoutHeader } from '../../components/CheckoutHeader';
// import { formatMoney } from '../../utils/money';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import dayjs from 'dayjs';
import CartFavicon from '../../../public/images/cart-favicon.png';
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';

export function Checkoutpage({ cart, loadCart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);

    /*
    useEffect(() => {
        axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            .then((response) => {
                setDeliveryOptions(response.data);
            });
        
        axios.get('/api/payment-summary')
            .then((response) => {
                setPaymentSummary(response.data);
            });
    }, []);
    */
    /*
    useEffect(() => {
        const fetchCheckoutData = async() => {
            let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
            setDeliveryOptions(response.data);
            
            response = await axios.get('/api/payment-summary');
            setPaymentSummary(response.data);
        };

        fetchCheckoutData();
    }, [cart]);
    */
    /*
    Problem with old useEffect : 
    Whenever the cart has changed (add/delete items), React must call both APIs.
    However, deliveryOptions (multiple options : Fast delivery, save delivery) are always 
    static data, it doesn't change based on how many items you buy

    Solution : Seperate fetching deliveryOptions task into an useEffect ran only once
    ([]), and also, seperate fetching paymentSummary into another useEffect ran after the cart 
    has changed ([cart]) 

    */
    // First useEffect : Only run once whenever the page has loaded (to choose delivery options )
    useEffect(() => {
        const fetchDeliveryOptions = async() => {
            let response = await axios.get('api/delivery-options?expand=estimatedDeliveryTime');
            setDeliveryOptions(response.data);
        };
    }, []);
    // Second useEffect : original useEffect before being seperated
    useEffect(() => {
        const fetchPaymentSummmary = async() => {
            let response = await axios.get('/api/payment-summary');
            setPaymentSummary(response.data);
        }
    }), [cart];
    return (
        <>
            <title>Checkout</title>
            <link rel="icon" type="image/svg+xml" href={ CartFavicon } />

            <CheckoutHeader 
                cart={cart}/>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary 
                        cart={cart} 
                        deliveryOptions={deliveryOptions}
                        loadCart={loadCart}/>
                    <PaymentSummary 
                        paymentSummary={paymentSummary}
                        loadCart={loadCart} />
                </div>
            </div>
        </>
    );
}