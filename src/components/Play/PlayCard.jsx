import React, { useState } from "react";
import "./playcard.css";

function PlayCard({ english, transcription, russian, showInfo }) {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };
    return (
        <div className="parent-element" id="motion-card">
            <div className={`word-card ${flipped ? " flipped" : ""}`} title="Нажмите на карточку, чтобы увидеть перевод"
                onClick={handleFlip}>
                <div className="front">
                    <div className="english">{english}</div>
                    <div className="transcription">{transcription}</div>
                </div>
                <div className="back">
                    <div className="russian">{russian}</div>
                </div>
            </div>
            {showInfo && <span className="quantity-slider-info">Congratulations! You finished learning words.</span>}
        </div>
    );
};

export default PlayCard;