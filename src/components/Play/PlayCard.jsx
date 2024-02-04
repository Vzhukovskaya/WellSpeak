import React, { useState, useEffect, useRef } from 'react';
import './playcard.css';

function PlayCard({ english, transcription, russian, showInfo, incrementWordsLearned, wordsLearned }) {
    const [flipped, setFlipped] = useState(false);
    const viewTranslationButtonRef = useRef(null);

    useEffect(() => {
        viewTranslationButtonRef.current.focus();
    }, [english, transcription, russian]);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    const handleViewTranslationClick = () => {
        incrementWordsLearned();
        setFlipped(!flipped);
    };

    return (
        <div className="parent-element" id="motion-card">

            <div className="front-element">
                <button className='translation-btn' ref={viewTranslationButtonRef} onClick={handleViewTranslationClick}>
                    Click here, to mark as learned
                </button>
                <span className="words-learned">Words learned: {wordsLearned}</span>
            </div>

            <div
                className={`word-card ${flipped ? " flipped" : ""}`}
                title="Click on the card to see the translation"
                onClick={handleFlip}
            >
                <div className="front">
                    <div className="english">{english}</div>
                    <div className="transcription">{transcription}</div>
                </div>
                <div className="back">
                    <div className="russian">{russian}</div>
                </div>
            </div>
            {showInfo && (
                <span className="quantity-slider-info">Congratulations! You finished learning words.</span>
            )}
        </div>
    );
}

export default React.memo(PlayCard);
