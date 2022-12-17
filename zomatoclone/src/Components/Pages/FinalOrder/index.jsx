import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const FinalOrder = () => {
  const { data } = useSelector((state) => state.countItems);
  const { totalBill } = useSelector((state) => state.countItems);

  return (
    <div>
      <Container className="bg-danger rounded my-5 text-white">
        {data.map((order) => {
          return (
            <div key={order.foodName}>
              {order.count !== 0 && (
                <div class="d-flex align-items-center py-5">
                  <div class="flex-shrink-0">
                    <img
                      src={order.foodPath}
                      alt={order.foodName}
                      width="150px"
                    />
                  </div>
                  <div class="flex-grow-1 ms-3 w-100 d-flex justify-content-between">
                    <div>
                      <div>{order.foodName}</div>
                      <div>
                        <i className="bi bi-currency-rupee"></i>
                        {order.price}
                      </div>
                    </div>
                    <div>
                      <div>
                        <span className="fw-bold">Items: </span>
                        {order.count}
                      </div>
                      <div>
                        <span className="fw-bold">Amount: </span>
                        <i className="bi bi-currency-rupee"></i>
                        {order.count * order.price}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </Container>
      <div
        className="container fix-at-btm text-white d-flex justify-content-between bg-danger px-5 py-2"
        style={{ maxWidth: "100%" }}
      >
        <div>
          <span className="fw-bold">Total Items: </span>
          <span>{totalBill.count}</span>
          <br />
          <span className="fw-bold">Total Amount: </span>
          <span>
            <i className="bi bi-currency-rupee"></i>
            {totalBill.bill}
          </span>
        </div>
        <div>
          <NavLink to="/">
            <button className="btn btn-danger border me-2">
              <i className="bi bi-arrow-bar-left"></i>
              Edit Order
            </button>
          </NavLink>
          {/* <NavLink to="/finalorder"> */}
          <button className="btn btn-danger border ms-2">
            Confirm Order <i className="bi bi-arrow-bar-right"></i>
          </button>
          {/* </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default FinalOrder;
