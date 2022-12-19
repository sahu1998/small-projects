import { Avatar } from "@mui/material";
import React from "react";

const team_intro = [
  {
    id: "1",
    heading: "Sajal Sahu",
    subheading: "Lead Designer",
    url: "https://media.creativemornings.com/uploads/user/avatar/2923/Spenceroni_Portrait_Square_2.jpg",
  },
  {
    id: "2",
    heading: "Rajani Bijgawne",
    subheading: "Lead Marketer",
    url: "https://timitsolutions.com/wp-content/uploads/2019/04/portrait-square-06.jpg",
  },
  {
    id: "3",
    heading: "Mahi",
    subheading: "Lead Developer",
    url: "https://tse3.mm.bing.net/th?id=OIP.MR_dND6Lr15S8RKo0T_B7gHaHa&pid=Api&P=0",
  },
];
const Team = () => {
  return (
    <div
      id="team"
      className="p-5"
      style={{
        backgroundColor: "#f6f6f6",
      }}
    >
      <div className=" p-5 d-flex flex-column justify-content-center">
        <div className="h1 text-center mb-1">OUR AMAZING TEAM</div>
        <div
          className=" text-center fst-italic mb-5"
          style={{ color: "#6c757d" }}
        >
          Lorem ipsum dolor sit amet consectetur.
        </div>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-lg-3">
          {team_intro.map((list, index) => {
            return (
              // <div className="">
              <div
                key={list.id}
                className=" mx-auto mb-5"
                style={{ width: "25rem" }}
              >
                <div className="d-flex justify-content-center ">
                  <Avatar sx={{ width: 220, height: 220 }}>
                    <img
                      src={list.url}
                      className="card-img-top "
                      alt={list.heading}
                      style={{
                        maxWidth: "100%",
                        border: "7px solid #dfd0d0",
                        borderRadius: "50%",
                      }}
                    />
                  </Avatar>
                </div>
                <div className="card-body p-4">
                  <h4
                    className="card-title text-center  lh-lg"
                    style={{ fontWeight: "500px" }}
                  >
                    {list.heading}
                  </h4>
                  <h6 className="text-center fst-italic card-subtitle mb-4 text-muted">
                    {list.subheading}
                  </h6>
                  <div className="d-flex text-white fs-5 justify-content-center">
                    <Avatar className="bg-dark mx-3">
                      <i className="bi bi-twitter m-2 "></i>
                    </Avatar>
                    <Avatar className="bg-dark fw-bold mx-3">f</Avatar>
                    <Avatar className="bg-dark fw-bold mx-3">in</Avatar>

                    {/* <i className="bi bi-facebook m-2 "></i>
                      <i className="bi bi-linkedin m-2 "></i> */}
                  </div>
                </div>
              </div>
              // </div>
            );
          })}
        </div>
        <div
          className=" text-center mb-5"
          style={{
            color: "#6c757d",
            fontFamily: "initial",
            fontSize: "18px",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
            laboriosam veritatis, quos non quis ad perspiciatis, totam corporis
            ea, alias ut unde.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
