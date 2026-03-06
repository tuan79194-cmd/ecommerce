import { formatMoney } from "../../utils/money";
import axios from 'axios';
import { useState } from "react";

export function CartItemDetails({ cartItem, loadCart }) {
    const [isUdpatingQuantity, setIsUdpatingQuantity] = useState(false);
    const [quantity, setQuantity] = useState(cartItem.quantity);

    const deleteCartItem = async() => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`);
        await loadCart();
    };

    const updateQuantity = async () => {
        if (isUdpatingQuantity) {
            await axios.put(`/api/cart-items/${cartItem.productId}`, 
                {
                    quantity: Number(quantity),
                }
            );
        await loadCart();
        setIsUdpatingQuantity(false);
        }
        else {
            setIsUdpatingQuantity(true);
        }
    };

    const updateQuantityInput = (event) => {
        setQuantity(event.target.value);
    };

    const pressKeyInput = (event) => {
        if (event.key === "Enter") {
            updateQuantity();
        }
        else if (event.key === "Escape") {
            setQuantity(cartItem.quantity);
            setIsUdpatingQuantity(false);
        }
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
                                value={quantity}
                                onChange={updateQuantityInput}
                                onKeyDown={pressKeyInput}
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