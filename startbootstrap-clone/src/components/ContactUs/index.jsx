import React from "react";
const ContactUs = () => {
  return (
    <div
      id="contact-us"
      className="py-5"
      style={{
        backgroundColor: "#282828",
        backgroundImage:
          'url("https://startbootstrap.github.io/startbootstrap-agency/assets/img/map-image.png")',
        // height: "100vh",
        // marginTop: "-120px",
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <div className=" p-5 d-flex flex-column justify-content-center">
          <div className="h1 text-center text-white pb-3">CONTACT US</div>
          <div
            className=" text-center text-bold fst-italic mb-5"
            style={{ color: "#6c757d" }}
          >
            Lorem ipsum dolor sit amet consectetur.
          </div>
        </div>
        <div className="container">
          <div className="row pb-4">
            <div className="col-sm mx-2">
              <div className="row mb-4">
                <input
                  className="contact-form"
                  placeholder="Your Name*"
                  size={10}
                />
              </div>
              <div className="row mb-4">
                <input className="contact-form" placeholder="Your Email*" />
              </div>
              <div className="row mb-4">
                <input className="contact-form" placeholder="Your Phone*" />
              </div>
            </div>
            <div class="col-sm mx-2">
              <textarea
                className="contact-form"
                rows={8}
                placeholder="Your Message"
              />
            </div>
          </div>
          <div className="text-center">
            <button className="btn-custom py-4 text-white px-5 fw-bold rounded">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

const debounce = (fn) => {
  let frame;

  return (...params) => {
    if (frame) {
      cancelAnimationFrame(frame);
    }
    frame = requestAnimationFrame(() => {
      fn(...params);
    });
  };
};
const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
};
document.addEventListener("scroll", debounce(storeScroll), { passive: true });

storeScroll();
