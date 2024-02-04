import React from 'react';
import './instruction.css';

const Instruction = ({ children }) => (
    <div className="instructions">
        <p>On the page, you will find interactive flashcards designed for learning words. If you have successfully learned a word, please confirm your achievement by clicking the button. Then, proceed to the next card by pressing the arrow on the right.</p>
    </div>
);

export default Instruction;