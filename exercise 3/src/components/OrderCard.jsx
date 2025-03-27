import React, {useEffect, useState} from "react";

export default function OrderCard({productName, unitPrice, quantity, updateEntry}) {
    const [quant, setQuant] = useState(quantity);
    const [btnStyle, setBtnStyle] = useState("order-button");
    const decreaseQuantity = () => {
        if (quant > 0) {
            setQuant(quant - 1);
        }
    }
    const increaseQuantity = () => {
        setQuant(quant + 1);
        setBtnStyle("order-button");
    }
    useEffect(() => {
        quantity = quant;
        if (quant === 0) {
            setBtnStyle("order-button disable");
        } else {
            setBtnStyle("order-button");
        }
        updateEntry({productName, quantity});
    }, [quant])

    const getBtnStyle = () =>{
        return btnStyle;
    }
    return (
        <div className="order">
            <div>
                <h4>{productName}</h4>
                <small>${unitPrice}</small>
            </div>

            <div className="order-quantity">
                <div className={getBtnStyle()} onClick={decreaseQuantity}>-</div>
                <h4>{quant}</h4>
                <div className="order-button" onClick={increaseQuantity}>+</div>
            </div>
        </div>
    );
}
