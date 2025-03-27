import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
    {
        product: "Banana",
        price: 54.6,
        quantity: 3,
    },
    {
        product: "Computer",
        price: 100.5,
        quantity: 4,
    },
    {
        product: "Table",
        price: 1070,
        quantity: 3,
    },
];

export default function App() {
    const [orders, setOrders] = React.useState(ORDERS);
    const [total, setTotal] = React.useState(
        ORDERS.reduce((acc, cur) => acc + cur.price * cur.quantity,0)
    );


    // to update the ORDERS
    const updateOrders = (inputEntry) => {
        let newOrders = orders;
        newOrders.forEach((order) => {
            if (order.product === inputEntry.productName) {
                order.quantity = inputEntry.quantity;
            }
        });
        setOrders(newOrders);
        setTotal(
            ORDERS.reduce((acc, cur) => acc + cur.price * cur.quantity,0)
        );
        //console.log(orders);
    }

    return (
        <>
            <header>
                <h1>Your orders</h1>
            </header>

            <div className="order-list">
                {ORDERS.map((order, index) => (
                    <OrderCard key={index} productName={order.product} unitPrice={order.price}
                               quantity={order.quantity} updateEntry={updateOrders} />
                ))}

            </div>

            <CheckoutButton total={total}></CheckoutButton>
        </>
    );
}
