
import React from 'react';
import "./modal.css";

function CongratulationsModal({ isOpen, onClose, totalWords }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Congratulations!</h2>
                <p>You have finished learning all {totalWords} words!</p>
                <button onClick={onClose} className="close-button">Close</button>
            </div>
        </div>
    );
}

export default React.memo(CongratulationsModal);
