import dayjs from 'dayjs';
import { formatMoney } from "../../utils/money";
// import { Fragment } from "react";
// import { Link } from "react-router";
import { OrderDetailsGrids } from './OrderDetailsGrid';
import { OrderHeader } from './OrderHeader';

export function OrderGrid({ orders }) {
    return(
        <div className="orders-grid">
            {
                orders.map((order) => {
                    return (
                        <div key={order.id} className="order-container">
                            <OrderHeader 
                                order={order}/>
                            <OrderDetailsGrids 
                                order={order}/>

                        </div>                                     
                    );
                
                })
            }
        </div>
    );
}