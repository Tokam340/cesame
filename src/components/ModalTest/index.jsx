import React from "react";
import "./index.css";
import { FaTimes, FaBook, FaPlay } from "react-icons/fa";

const Modal = ({ isOpen, onClose, serie, time, navi, instruction }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()} // empêche de fermer en cliquant à l'intérieur
      >
        <div className="modal-header">
          <h2>Compréhension Écrite</h2>
          <button className="modal-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="modal-content">
          <h4 className="text-center">Série {serie.id+1}</h4>
          <FaBook className="modal-icon" />

          <h4>39 questions</h4>
          <h4>Durée : {time}</h4>

          <p>{instruction}</p>

          <hr />
{/* `/ce/test/${serie.id}` */}
          <div className="modal-footer" onClick={navi}>
            <a className="start-button">
              Démarrer <FaPlay />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
