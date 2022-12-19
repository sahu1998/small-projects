import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
const PortfolioModal = ({ showModal, handleCloseModal, data }) => {
  //   const [show, setShow] = useState(false);
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  console.log("Data ", data);
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        dialogClassName="modal-90w"
        size="lg"
        // fullscreen={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable={true}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <div className="h1 mb-1">PROJECT NAME</div>
            <div className=" fst-italic mb-5" style={{ color: "#6c757d" }}>
              Lorem ipsum dolor sit amet consectetur.
            </div>
            <div>
              <img src={data.url} />
            </div>
            <div className="py-5">
              Use this area to describe your project. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Est blanditiis dolorem culpa
              incidunt minus dignissimos deserunt repellat aperiam quasi sunt
              officia expedita beatae cupiditate, maiores repudiandae, nostrum,
              reiciendis facere nemo!
            </div>
            <div>
              <b>Client:</b> {data.heading}
            </div>
            <div>
              <b>Category:</b> {data.subheading}
            </div>
            <button
              className="btn-custom mt-4 py-4 text-white px-5 fw-bold rounded"
              onClick={() => {
                handleCloseModal();
              }}
            >
              <i class="bi bi-x-lg"></i> CLOSE PROJECT
            </button>
          </div>
        </Modal.Body>
        {/* <Modal.Footer></Modal.Footer> */}
      </Modal>
    </>
  );
};

export default PortfolioModal;
