import "./DeleteHabit.scss";
import React, { useState } from "react";

function DeleteHabit({ onDelete, children }) {
  const [showModal, setShowModal] = useState(false);

  const handleConfirmDelete = () => {
    onDelete();
    setShowModal(false);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  return (
    <>
      {children({
        showModal,
        setShowModal,
      })}

      {showModal && (
        <div className="delete">
          <div className="delete__message">
            <p>Are you sure you want to delete this habit?</p>
            <div className="delete__btn-container">
              <button className="delete__btn" onClick={handleConfirmDelete}>
                Delete
              </button>
              <button className="delete__btn" onClick={handleCancelDelete}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteHabit;
