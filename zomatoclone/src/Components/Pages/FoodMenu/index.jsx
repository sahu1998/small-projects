import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { operation } from "../../../Actions/action";

const FoodMenu = () => {
  const itemsValue = useSelector((state) => state.countItems);
  // console.log("Your cart: ", itemsValue);
  const dispatch = useDispatch();

  const menuCard = [
    {
      foodName: "Hakka Noodles",
      foodPath:
        "https://b.zmtcdn.com/data/dish_photos/739/bfe074691b78771cd272ddf2f3691739.jpg?output-format=webp",
      price: 140,
      count: itemsValue.HakkaNoodles.count,
      type: "Noodles",
    },
    {
      foodName: "Burger",
      foodPath:
        "https://b.zmtcdn.com/data/pictures/2/19561122/5685725b5c1c267af0efa16119efd6f3_o2_featured_v2.jpg",
      price: 125,
      count: itemsValue.Burger.count,
      type: "Burger",
    },
    {
      foodName: "Biryani",
      foodPath:
        "https://b.zmtcdn.com/data/pictures/chains/5/19281155/1aab6ed03346abae636bdac9cb1626b1_o2_featured_v2.jpg?output-format=webp",
      price: 220,
      count: itemsValue.Biryani.count,
      type: "Biryani",
    },
  ];
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          {menuCard.map((dish, index) => {
            return (
              <div key={index} className="col">
                <div
                  className="card bg-light p-2 rounded mx-auto"
                  style={{ maxWidth: "30rem" }}
                >
                  <div className="">
                    <img
                      src={dish.foodPath}
                      className="rounded"
                      alt={dish.foodName}
                      width="100%"
                      height="200vh"
                      style={{ maxWidth: "100%" }}
                    />
                  </div>
                  <div className="card-body ">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="flex-grow-1">
                        <h5 className="flex-grow-1 card-title">
                          {dish.foodName}
                        </h5>
                        <span>
                          <i class="bi bi-currency-rupee"></i>
                          {dish.price}
                        </span>
                      </div>
                      <div className="flex-shrink-0">
                        {dish.count === 0 ? (
                          <button
                            type="button"
                            className="btn btn-danger px-4"
                            onClick={() =>
                              dispatch(operation(`inc${dish.type}`, dish.price))
                            }
                          >
                            Add
                          </button>
                        ) : (
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic example"
                          >
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() =>
                                dispatch(
                                  operation(`dec${dish.type}`, dish.price)
                                )
                              }
                            >
                              -
                            </button>
                            <button type="button" className="btn btn-danger">
                              {dish.count}
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() =>
                                dispatch(
                                  operation(`inc${dish.type}`, dish.price)
                                )
                              }
                            >
                              +
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="container d-flex justify-content-between bg-danger px-5 py-2"
        style={{ maxWidth: "100%" }}
      >
        <div>
          <span className="fw-bold">Total Amount: </span>
          <span>
            <i className="bi bi-currency-rupee"></i>
            {itemsValue.total.price}
          </span>
        </div>
        <div>
          <button className="btn btn-primary">
            Next <i className="bi bi-forward"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
