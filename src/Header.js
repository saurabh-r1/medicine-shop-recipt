import React from "react";
import Cart from "./Cart";

function Header() {
  return (
    <div className="container-fluid py-2" style={{background:"#757c88"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <h1 className="mt-4 fw-bolder">Medicine Shop Inventory</h1>
          </div>
          <div className="col-md-6 d-flex justify-content-end align-items-center">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
