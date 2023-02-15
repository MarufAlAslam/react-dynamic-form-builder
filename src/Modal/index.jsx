import React from "react";
import "../assets/styles/style.css";
import { ImCross } from "react-icons/im";

const ModalPreview = ({ closeModalHandler }) => {
  return (
    <div className="modal-preview p-10">
      <div className="text-right">
        <button className="btn" onClick={closeModalHandler}>
          <ImCross />
        </button>
      </div>
    </div>
  );
};

export default ModalPreview;
