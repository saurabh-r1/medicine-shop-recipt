import React, { useState } from "react";
import { useMedicineContext } from "./MedicineContext";

function AddMedicine() {
  const [medicineName, setMedicineName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const { addMedicine } = useMedicineContext();

  const handleMedicine = () => {
    const newMedicine = {
      name: medicineName,
      description: description,
      price: price,
    };

    addMedicine(newMedicine);

    setMedicineName("");
    setDescription("");
    setPrice("");
  };

  return (
    <div className="container mb-5">
      <h4 className="mt-4">Add medicine</h4>
      <hr className="m-1"/>
      <hr className="m-1 mb-3" />
      <div className="row">
        <div className="">
          <input 
            className="col-3 m-1"
            type="text"
            placeholder="Medicine name"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
          />
          <input
            className="col-4 m-1"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="col- m-1"
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button
            className="btn btn-primary col-2"
            onClick={handleMedicine}
          >
            Add Medicine
          </button>
        </div>
      </div>
      <hr className="m-1 mt-4"/>
      <hr className="m-1" />
    </div>
  );
}

export default AddMedicine;
