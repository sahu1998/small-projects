import { Avatar } from "@mui/material";
import React from "react";
const Footer = () => {
  return (
    <div className="container w-100">
      <div className="d-flex justify-content-between row row-cols-1 row-cols-sm-1 row-cols-md-3 py-4">
        <div className="col py-1">Copyright &copy; Your Website 2022</div>
        <div className="d-flex justify-content-center col">
          <Avatar className="bg-dark mx-2">
            <i className="bi bi-twitter m-2 "></i>
          </Avatar>
          <Avatar className="bg-dark fw-bold mx-2">f</Avatar>
          <Avatar className="bg-dark fw-bold mx-2">in</Avatar>
        </div>
        <div className="col text-end py-1"><span className="pe-3">Privacy Policy</span><span>Terms of Use</span> </div>
      </div>
    </div>
  );
};

export default Footer;
