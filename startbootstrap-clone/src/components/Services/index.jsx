import { Avatar } from "@mui/material";
import React from "react";

const services_list = [
  {
    id: "1",
    icon: "bi bi-cart3",
    heading: "E-Commerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
  },
  {
    id: "2",
    icon: "bi bi-laptop",
    heading: "Responsive Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
  },
  {
    id: "3",
    icon: "bi bi-lock-fill",
    heading: "Web Security",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
  },
];
const Services = () => {
  return (
    <div id="services">
      <div
        className=" container px-5 pb-5 d-flex flex-column justify-content-center"
        style={{ paddingTop: "80px" }}
      >
        <div className="h1 text-center mb-3">SERVICES</div>
        <div
          className=" text-center fst-italic mb-5"
          style={{ color: "#6c757d" }}
        >
          Lorem ipsum dolor sit amet consectetur.
        </div>

        <div className="container">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3">
            {services_list.map((data, index) => {
              return (
                <div key={index} className="col-sm">
                  <div className="text-center">
                    {/* <div className="rounded-circle bg-warning text-white w-50 m-auto"> */}
                    <Avatar
                      className="bg-warning text-white m-auto"
                      sx={{ width: 120, height: 120 }}
                      alt="Remy Sharp"
                      src="/broken-image.jpg"
                    >
                      <i
                        className={`${data.icon}`}
                        style={{ fontSize: "80px" }}
                      ></i>
                    </Avatar>
                    {/* </div> */}
                  </div>
                  <h5 className="text-center p-2">{data.heading}</h5>
                  <p className="text-center" style={{ color: "#6c757d" }}>
                    {data.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
