import "./DeleteHabit.scss";
import React, { useState } from "react";

function DeleteHabit({ setShowModal, showModal, onDelete }) {
  const handleConfirmDelete = () => {
    onDelete();
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="delete">
          <div className="delete__message">
            <p>are you sure you want to delete this habit?</p>
            <div className="delete__btn-container">
              <button className="delete__btn" onClick={handleConfirmDelete}>
                delete
              </button>
              <button className="delete__btn" onClick={handleCancelDelete}>
                cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteHabit;
