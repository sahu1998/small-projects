import React from "react";

const client_name = [
  {
    id: "1",
    path: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/logos/microsoft.svg",
  },
  {
    id: "2",
    path: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/logos/google.svg",
  },
  {
    id: "3",
    path: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/logos/facebook.svg",
  },
  {
    id: "4",
    path: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/logos/ibm.svg",
  },
];
const Clients = () => {
  return (
    <div className="container py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          {client_name.map((client, index) => {
            return (
              <div key={index} className="col my-3">
                <img
                  className="d-flex mx-auto"
                  src={client.path}
                  alt="client"
                  style={{ maxWidth: "100%", height: "44px" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Clients;
