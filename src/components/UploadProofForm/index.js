import React from 'react';
import { useState } from 'react'
import './UploadProofForm.css'

export default function UploadProofForm(props) {
    const [file, setFile] = useState();
    const [validationMessage, setValidationMessage] = useState(false);

    function handleFile(e) {
        setFile(e.target.files[0])
    }
    function onClickHandler() {
        if(file) {
           props.onChange(file)
           setTimeout(() => {  props.submitMail(file) }, 300);
        } else {
            return (
                setValidationMessage(true)
            )
        }
    }

    return (
        <section className="proof">
            <div className="proof-container">
                <div>
                    <h1 className="proof-title"><strong>Je bent er bijna... Upload het bewijs*</strong></h1>
                    <p className="proof-text">Klik hieronder om de screenshot van de review te uploaden</p>
                    <label for="file">
                        <div className="upload-wrapper">
                            <img className="upload-icon" src="/images/upload_icon.svg" alt="Upload"/>
                            <p className="upload-text"><strong>Upload screenshot</strong> klik hier</p>
                            <input className="upload-input" onChange={(event) => handleFile(event)} type="file" id="file" accept="image/*"/>
                            <img className={`upload-check ${file ? 'active' : ''}`} src="/images/vinkje.png" alt='vinkje'/>
                        </div>
                    </label>
                    {validationMessage ===  true && !file ? 
                        <p className='upload-validation-text'>Vergeet niet je bewijs te uploaden!</p>
                    : ''} 
                </div>
                <div className="finish">
                    <button onClick={() => onClickHandler()} className="finish-btn">Ik wil mijn cadeautje ontvangen </button>
                    <p className="finish-notice">
                        *Het ontvangen van het cadeautje is <strong>geheel kosteloos</strong>, enkel vragen wij u een review te plaatsen.
                    </p>
                </div>
            </div>
        </section>
    )
}