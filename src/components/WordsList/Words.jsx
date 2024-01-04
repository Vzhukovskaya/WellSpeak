import React, { useState } from 'react';
import './wordslist.css';

const WordsList = ({ data }) => {
    const [editedWords, setEditedWords] = useState(data.map(word => ({ ...word, isEditMode: false })));

    const toggleEditMode = (index) => {
        setEditedWords(prevState =>
            prevState.map((word, i) => ({
                ...word,
                isEditMode: i === index ? !word.isEditMode : word.isEditMode
            }))
        );
    };

    const handleChange = (event, index, field) => {
        const value = event.target.value;
        setEditedWords(prevState =>
            prevState.map((word, i) =>
                i === index ? { ...word, [field]: value } : word
            )
        );
    };

    const handleSaveCancelClick = (reset = false) => {
        setEditedWords(prevState =>
            reset ? data.map(word => ({ ...word, isEditMode: false })) : prevState.map(word => ({ ...word, isEditMode: false }))
        );
    };

    const renderRows = (word, index) => (
        <tr key={index.id || index}>
            {['english', 'transcription', 'russian', 'tags'].map(field => (
                <td key={field}>
                    {word.isEditMode ? (
                        <input type='text' value={word[field]} onChange={(e) => handleChange(e, index, field)} />
                    ) : (
                        word[field]
                    )}
                </td>
            ))}
            <td>
                {word.isEditMode ? (
                    <>
                        <button className="save-button" onClick={() => handleSaveCancelClick()}>Save</button>
                        <button className="cancel-button" onClick={() => handleSaveCancelClick(true)}>Cancel</button>
                    </>
                ) : (
                    <button className="change-button" onClick={() => toggleEditMode(index)}>Change</button>
                )}
                <button className="delete-button">Delete</button>
            </td>
        </tr>
    );

    return (
        <table>
            <thead>
                <tr>
                    <th>Word</th>
                    <th>Transcription</th>
                    <th>Translation</th>
                    <th>Classification</th>
                    <th width="20%">Actions</th>
                </tr>
            </thead>
            <tbody>{editedWords.map(renderRows)}</tbody>
        </table>
    );
}

export default WordsList;