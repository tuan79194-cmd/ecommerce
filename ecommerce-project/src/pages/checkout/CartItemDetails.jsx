import { formatMoney } from "../../utils/money";
import axios from 'axios';
import { useState } from "react";

export function CartItemDetails({ cartItem, loadCart }) {
    const [isUdpatingQuantity, setIsUdpatingQuantity] = useState(false);

    const deleteCartItem = async() => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`);
        await loadCart();
    };

    const updateQuantity = () => {
        setIsUdpatingQuantity(isUdpatingQuantity => !isUdpatingQuantity);
    };
    return(
        <>
            <img className="product-image"
                src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {
                        cartItem.product.name
                    }
                </div>
                <div className="product-price">
                    {
                        formatMoney(cartItem.product.priceCents)
                    }
                </div>
                <div className="product-quantity">
                    <span>
                        Quantity: 
                        {
                            isUdpatingQuantity ? 
                            <input 
                                type="text" 
                                className="inputQuantity"
                            />
                            : 
                            <span className="quantity-label">
                                {cartItem.quantity}
                            </span>
                        }
                    </span>
                    <span className="update-quantity-link link-primary"
                        onClick={updateQuantity}>
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary"
                        onClick={deleteCartItem}>
                        Delete
                    </span>
                </div>
            </div>
        </>
    );
}