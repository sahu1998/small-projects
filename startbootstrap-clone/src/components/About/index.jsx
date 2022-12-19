import { Avatar } from "@mui/material";
import React from "react";
import "./index.m.css";
const about_list = [
  {
    id: "1",
    logo: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/about/1.jpg",
    duration: "2009-2011",
    heading: "Our Humble Beginnings",
  },
  {
    id: "2",
    logo: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/about/2.jpg",
    duration: "March 2011",
    heading: "An Agency is Born",
  },
  {
    id: "3",
    logo: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/about/3.jpg",
    duration: "December 2015",
    heading: "Transition to Full Service",
  },
  {
    id: "4",
    logo: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/about/4.jpg",
    duration: "July 2020",
    heading: "Phase Two Expansion",
  },
];

const About = () => {
  return (
    <div id="about" className="p-5">
      <div className=" p-5 d-flex flex-column justify-content-center">
        <div className="h1 text-center mb-1">ABOUT</div>
        <div
          className=" text-center fst-italic mb-5"
          style={{ color: "#6c757d" }}
        >
          Lorem ipsum dolor sit amet consectetur.
        </div>
      </div>

      <div className="container vr-line">
        {about_list.map((data, index) => {
          return (
            <div
              className={`d-flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse "
              } row pb-5`}
              style={
                index % 2 === 0
                  ? { marginRight: "178px" }
                  : { marginLeft: "178px" }
              }
            >
              <div
                // style={
                //   index % 2 === 0
                //     ? { paddingRight: "124px" }
                //     : { paddingLeft: "124px" }
                // }
                className={`col ${
                  index % 2 === 0 ? "text-end" : "text-start"
                } ps-2 pb-2`}
              >
                <div className="fw-bold h3">{data.duration} </div>
                <div className="fw-bold h3">{data.heading} </div>
                <div
                  className="about-para"
                  style={
                    index % 2 === 0
                      ? { paddingLeft: "155px" }
                      : { paddingRight: "155px" }
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  ut voluptatum eius sapiente, totam reiciendis temporibus qui
                  quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                  dolore laudantium consectetur!
                </div>
              </div>
              <div
                className={`col d-flex ${
                  index % 2 === 0
                    ? "justify-content-start"
                    : "justify-content-end"
                }`}
              >
                <Avatar sx={{ width: 170, height: 170 }}>
                  <img
                    src={data.logo}
                    className="card-img-top "
                    alt={data.heading}
                    style={{
                      maxWidth: "100%",
                      border: "7px solid #dfd0d0",
                      borderRadius: "50%",
                    }}
                  />
                </Avatar>
              </div>
            </div>
          );
        })}
        <div className={`row d-flex justify-content-center`}>
          <Avatar sx={{ width: 170, height: 170, backgroundColor: "#ffc800" }}>
            <span className="fw-bold text-center lh-sm">
              Be Part
              <br /> Of Our
              <br /> Story!
            </span>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default About;
