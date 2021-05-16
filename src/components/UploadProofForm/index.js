import { useState } from 'react'
import './UploadProofForm.css'

export default function UploadProofForm() {
    const [file, setFile] = useState();

    function handleFile(e) {
        setFile(e.target.files[0])
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
                            <p className="upload-text">Upload screenshot klik hier</p>
                            <input className="upload-input" onChange={(event) => handleFile(event)} type="file" id="file" accept="image/*"/>
                            <img className={`upload-check ${file ? 'active' : ''}`} src="/images/vinkje.png"/>
                        </div>
                    </label>
                </div>
                <div className="finish">
                    <button className="finish-btn">Ik wil mijn cadeautje ontvangen </button>
                    <p className="finish-notice">
                        *Het ontvangen van het cadeautje is <strong>geheel kosteloos</strong>, enkel vragen wij u een review te plaatsen.
                    </p>
                </div>
            </div>
        </section>
    )
}