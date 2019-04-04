import React from 'react';

import './FileForm.css';
import ButtonPrimary from '../buttons/ButtonPrimary';

export default function FileForm(props) {
    const { label, onChange } = props;
    const chooseFile = () => {
        const file = document.querySelector('input[type="file"]');
        file.click();
    }
    
    const handleChange = () => {
        const file = document.querySelector('input[type="file"]');
        const fileName = document.querySelector('.file-name');
        fileName.textContent = file.files[0] ? file.files[0].name : '';
        onChange(file.files[0]);
    }

    return (
        <div className="FileForm">
            <label htmlFor={label}>
                <span className="label-name">{label}</span>
                <div className="select-file">
                    <ButtonPrimary handleClick={chooseFile}>Choose file</ButtonPrimary>
                    <span className="file-name">Choose image, video, audio</span>
                </div>
                <input
                    accept="image/*, video/*, audio/*"
                    onChange={handleChange}
                    tabIndex="1" 
                    type="file" 
                    id={label} 
                    name={label} 
                />
            </label>
        </div>
    );
}