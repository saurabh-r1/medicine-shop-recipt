import React, { useState } from "react";
import { useMedicineContext } from "./MedicineContext";

function Cart() {
  const { cartItems, medicines } = useMedicineContext();
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const totalQuantity = Object.values(cartItems).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const calculateItemTotalPrice = (itemName) => {
    const quantity = cartItems[itemName];
    const item = medicines.find((medicine) => medicine.name === itemName);
    if (item) {
      return quantity * item.price;
    }
    return 0;
  };

  const grandTotalPrice = Object.keys(cartItems).reduce(
    (accumulator, itemName) =>
      accumulator + calculateItemTotalPrice(itemName),
    0
  );

  return (
    <div className="text-center mt-5">
      <button className="btn btn-primary" onClick={toggleCart}>
        Show Cart ({totalQuantity})
      </button>
      {showCart && (
        <div className="container mt-3 p-4 border">
          <h2>Cart Items</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Medicine name</th>
                <th>x items</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(cartItems).map(([itemName, quantity]) => (
                <tr key={itemName}>
                  <td>{itemName}</td>
                  <td>{quantity} items</td>
                  <td>₹ {calculateItemTotalPrice(itemName)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>Grand Total Price: ₹ {grandTotalPrice}</h4>
        </div>
      )}
    </div>
  );
}

export default Cart;
