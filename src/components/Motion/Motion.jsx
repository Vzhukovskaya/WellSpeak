import React, { useState, useCallback, useEffect } from "react";
import PlayCard from "../Play/PlayCard";
import CongratulationsModal from "../Modal/CongratulationsModal";
import Instruction from "../Instruction/Instruction";

import "./motion.css";

function Motion({ data, disableFirstAndLast, defaultIndex }) {
    const [currentIndex, setCurrentIndex] = useState(defaultIndex || 0);
    const [flipped, setFlipped] = useState(false);
    const [finished, setFinished] = useState(false);
    const [wordsLearned, setWordsLearned] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [slideDirection, setSlideDirection] = useState("next");

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const incrementWordsLearned = () => {
        const newWordsLearned = wordsLearned + 1;
        setWordsLearned(newWordsLearned);

        if (newWordsLearned === data.length) {
            setIsModalOpen(true);
        }
    };

    const handlePrevClick = useCallback(() => {
        setSlideDirection("prev");
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            if (disableFirstAndLast) {
                setCurrentIndex(data.length - 1);
            }
        }
        setFlipped(false);
        setFinished(false);
    }, [currentIndex, disableFirstAndLast, data]);

    const handleNextClick = useCallback(() => {
        setSlideDirection("next");
        if (currentIndex < data.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            if (disableFirstAndLast) {
                setCurrentIndex(0);
            }
            setFinished(true);
        }
        setFlipped(false);
    }, [currentIndex, disableFirstAndLast, data]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") {
                handlePrevClick();
            } else if (e.key === "ArrowRight") {
                handleNextClick();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [handlePrevClick, handleNextClick]);

    return (
        <div className="motion">
            <Instruction />
            <div className={`motion-content ${slideDirection}`}>
                <button
                    className="prev"
                    title="Previous"
                    onClick={handlePrevClick}
                    disabled={!disableFirstAndLast && currentIndex === 0}
                >
                    &#10149;
                </button>
                {data.length > 0 && data[currentIndex] ? (
                    <PlayCard
                        key={currentIndex}
                        word={data[currentIndex].word}
                        english={data[currentIndex].english}
                        transcription={data[currentIndex].transcription}
                        russian={data[currentIndex].russian}
                        flipped={flipped}
                        setFlipped={setFlipped}
                        wordsLearned={wordsLearned}
                        incrementWordsLearned={incrementWordsLearned}
                        showInfo={finished}
                    />
                ) : (
                    "No current data"
                )}
                <button
                    className="next"
                    title="Next"
                    onClick={handleNextClick}
                    disabled={!disableFirstAndLast && currentIndex === data.length - 1}
                >
                    &#10149;
                </button>
            </div>
            <div className="quantity-slider">
                {currentIndex + 1}/{data.length}
            </div>
            <CongratulationsModal isOpen={isModalOpen} onClose={closeModal} totalWords={data.length} />
        </div>
    );
}

Motion.defaultProps = {
    data: [],
    defaultIndex: 0
};

export default Motion;
