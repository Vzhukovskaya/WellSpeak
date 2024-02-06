import React, { useState } from 'react';
import './wordslist.css';

const WordsList = ({ data }) => {
    const [editedWords, setEditedWords] = useState(data.map(word => ({ ...word, isEditMode: false })));
    const [isSaveDisabled, setIsSaveDisabled] = useState(false);

    const checkFieldsForEmptyValues = (index) => {
        const hasEmptyField = Object.values(editedWords[index]).some(value => {
            return typeof value === 'string' && value.trim() === '';
        });
        setIsSaveDisabled(hasEmptyField);
    };
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
        checkFieldsForEmptyValues(index);
    };

    const handleSave = (index) => {
        const word = editedWords[index];
        let errorMessage = '';
        const hasError = Object.entries(word).some(([key, value]) => {
            // Пропускаем проверку для ключа isEditMode, так как он не является пользовательским вводом
            if (key === 'isEditMode') return false;

            // Проверяем, является ли значение строкой и пустым
            if (typeof value === 'string' && value.trim() === '') {
                errorMessage = `Field '${key}' is empty.`;
                return true;
            }
            return false;
        });

        if (hasError) {
            console.log(errorMessage);
            alert(errorMessage);
        } else {
            console.log("Saving word:", word);
            // Логика сохранения
            setEditedWords(prevState => prevState.map((w, i) => (i === index ? { ...w, isEditMode: false } : w)));
        }
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
                        <input
                            type='text'
                            value={word[field]}
                            onChange={(e) => handleChange(e, index, field)}
                            className={word[field].trim() === '' ? 'input-error' : ''}
                        />
                    ) : (
                        word[field]
                    )}
                </td>
            ))}
            <td>
                {word.isEditMode ? (
                    <>
                        <button className="save-button" onClick={() => handleSave(index)} disabled={isSaveDisabled}>Save</button>
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