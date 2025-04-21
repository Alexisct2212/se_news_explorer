import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";
import "./SuccessModal.css";

function SucessModal({closeActiveModal,handleLoginModal,isOpen}){


  return (
    <ModalWithForm
      title=""
      isOpen={isOpen}
      onClose={closeActiveModal}
      name="success"
      buttonText=""    
    >
      <button
        className="modal__close"
        type="button"
        onClick={closeActiveModal}
        
      />
      <p className="successful_text">Registration Successfully completed!</p>
      <button
          type="button"
          className="modal__success-button"
          onClick={handleLoginModal}
        >
        Sign in
        </button>
    </ModalWithForm>
   
  );
};

export default SucessModal;