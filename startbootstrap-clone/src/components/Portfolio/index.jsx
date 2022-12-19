import React, { useState } from "react";
import PortfolioModal from "./Portfolio-modal";

const portfolio_list = [
  {
    id: "1",
    heading: "Threads",
    subheading: "Illustration",
    url: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/1.jpg",
  },
  {
    id: "2",
    heading: "Explore",
    subheading: "Graphic Design",
    url: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/2.jpg",
  },
  {
    id: "3",
    heading: "Finish",
    subheading: "Identity",
    url: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/3.jpg",
  },
  {
    id: "4",
    heading: "Lines",
    subheading: "Branding",
    url: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/4.jpg",
  },
  {
    id: "5",
    heading: "Southwest",
    subheading: "Website Design",
    url: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/5.jpg",
  },
  {
    id: "6",
    heading: "Window",
    subheading: "Photography",
    url: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/6.jpg",
  },
];

const Portfolio = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState({});

  return (
    <div
      id="portfolio"
      className="p-5"
      style={{
        backgroundColor: "#f6f6f6",
      }}
    >
      <div className=" p-5 d-flex flex-column justify-content-center">
        <div className="h1 text-center mb-1">PORTFOLIO</div>
        <div
          className=" text-center fst-italic mb-5"
          style={{ color: "#6c757d" }}
        >
          Lorem ipsum dolor sit amet consectetur.
        </div>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
          {portfolio_list.map((list, index) => {
            return (
              <div key={list.id} className="col-sm mb-4">
                <div className="bg-white mx-auto" style={{ width: "25rem" }}>
                  <div
                    className="hoverwrap"
                    onClick={() => {
                      setData(list);
                      handleShow();
                    }}
                  >
                    <div>
                      <img
                        src={list.url}
                        className="card-img-top"
                        alt={list.heading}
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                    <div className="overlay">
                      <div className="hovercap text-center">
                        <i className="bi bi-plus"></i>
                      </div>
                    </div>
                  </div>

                  <div className="card-body p-4">
                    <h4
                      className="card-title text-center  lh-lg"
                      style={{ fontWeight: "500px" }}
                    >
                      {list.heading}
                    </h4>
                    <h6 className="text-center fst-italic card-subtitle mb-2 text-muted">
                      {list.subheading}
                    </h6>
                  </div>
                </div>
              </div>
            );
          })}
          <PortfolioModal
            showModal={show}
            handleCloseModal={handleClose}
            data={data}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
