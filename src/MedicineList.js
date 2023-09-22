import React, { useState } from "react";
import { useMedicineContext } from "./MedicineContext";

function MedicineList() {
  const { medicines, addToCart } = useMedicineContext();
  const [quantityValues, setQuantityValues] = useState({});

  const handleQuantityChange = (medicineName, newValue) => {
    // Ensure that the quantity is not less than 0
    const newQuantity = Math.max(0, parseInt(newValue));

    setQuantityValues((prevValues) => ({
      ...prevValues,
      [medicineName]: newQuantity,
    }));
  };

  const handleAddToCart = (medicine) => {
    const quantity = quantityValues[medicine.name] || 0;

    if (quantity === 0) {
      // Display a message if quantity is 0
      alert("Please add some quantity before adding to the cart.");
      return;
    }

    addToCart(medicine, quantity);
    setQuantityValues((prevValues) => ({
      ...prevValues,
      [medicine.name]: 0,
    }));
  };

  return (
    <div className="container mt-4">
      <h4>Medicines List</h4>
      {medicines.length === 0 ? (
        <p>No medicines available.</p>
      ) : (
        <table className="table bg-success">
          <thead className="thead-dark">
            <tr>
              <th scope="col-3">Medicine name</th>
              <th scope="col-4">Description</th>
              <th scope="col-2">Price</th>
              <th scope="col-1">Quantity</th>
              <th scope="col-2"></th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((medicine, index) => (
              <tr key={index}>
                <td className="col-3">{medicine.name}</td>
                <td className="col-4">{medicine.description}</td>
                <td className="col-2">₹ {medicine.price}</td>
                <td className="col-1">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="0"
                    value={quantityValues[medicine.name] } 
                    onChange={(e) =>
                      handleQuantityChange(medicine.name, e.target.value)
                    }
                  />
                </td>
                <td className="col-2">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(medicine)}
                  >
                    Add to Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MedicineList;
