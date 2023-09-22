import React, { createContext, useState, useContext } from "react";

const MedicineContext = createContext();

export function MedicineProvider({ children }) {
  const [medicines, setMedicines] = useState([]);
  const [cartItems, setCartItems] = useState({});

  const addMedicine = (newMedicine) => {
    setMedicines([...medicines, newMedicine]);
  };

  const addToCart = (medicine, quantity) => {
    const itemName = medicine.name;

    if (cartItems[itemName]) {
      // If the item is already in the cart, update its quantity
      setCartItems({
        ...cartItems,
        [itemName]: cartItems[itemName] + quantity,
      });
    } else {
      // If the item is not in the cart, add it with the specified quantity
      setCartItems({
        ...cartItems,
        [itemName]: quantity,
      });
    }
  };

  return (
    <MedicineContext.Provider value={{ medicines, addMedicine, cartItems, addToCart }}>
      {children}
    </MedicineContext.Provider>
  );
}

export function useMedicineContext() {
  return useContext(MedicineContext);
}
