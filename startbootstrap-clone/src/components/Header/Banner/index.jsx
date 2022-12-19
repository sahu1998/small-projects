import React from "react";

const Banner = () => {
  return (
    <div id="navigation" className="banner-main">
      <div className="container text-center text-white">
        <div className="fst-italic mb-2" style={{ fontSize: "40px" }}>
          Welcome To Our Studio!
        </div>
        <div className="fw-bold mb-5" style={{ fontSize: "80px" }}>
          IT'S NICE TO MEET YOU
        </div>
        <div className="text-center">
          <button className="btn-custom py-4 text-white px-5 fw-bold rounded">
            TELL ME MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
