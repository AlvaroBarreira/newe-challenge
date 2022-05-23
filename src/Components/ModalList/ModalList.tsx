import React from "react";
import "./ModalList.css";

interface ModalPropsTypes {
  visibilityValue: any;
  name: string;
}

const ModalList = ({visibilityValue, name}: ModalPropsTypes) => {
  return (
    <>
      <div className="modal-list__container" style={{visibility: visibilityValue}}>
        <span>{name}</span>
      </div>
    </>
  );
};

export default ModalList;
