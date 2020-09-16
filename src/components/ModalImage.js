import React from "react";
import { Modal } from "react-bootstrap";

export default function ModalImage(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Pokemon's name: {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <img src={props.image} width="350" />
        </div>
      </Modal.Body>
    </Modal>
  );
}
