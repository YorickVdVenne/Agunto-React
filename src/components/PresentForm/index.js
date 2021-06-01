import React from 'react';
import './PresentForm.css'
import { useState } from 'react'

export default function PresentForm(props) {
    const [sdActive, setSdActive] = useState(false)
    const [mousepadActive, setMousepadActive] = useState(false)
    const [validationMsg, setValidationMsg] = useState(true)

    function onClickHandler(value) {
        if(value === 'SD-kaart') {
            setMousepadActive(false)
            setSdActive(true)
        } else if(value === 'Muismat') {
            setSdActive(false)
            setMousepadActive(true)
        }
        setTimeout(() => { props.onChange(value) }, 300);
        
        setValidationMsg(false)
    }

    return (
        <section className="c-present">
            <div className="c-present-content">
                <h1 className="c-present-content__title">Welk cadeautje kies je?*</h1>
                <p className="c-present-content__text">Selecteer de afbeelding met het cadeautje dat je wenst te ontvangen na het plaatsen van een review!</p>
            </div>

            <div className="c-present-form">
                <button className={`c-present-form-btn ${sdActive ? 'active' : ''}`} onClick={() => onClickHandler('SD-kaart')}>
                    {sdActive ? 
                        <img className='c-present-form-btn__check' src='/images/vinkje.png' alt='Vinkje'/> : ''
                    }
                    <div className="c-present-form-btn-cnr1">
                        <div className="c-present-form-btn-cnr__image image-sd"></div>
                        <p className="c-present-form-btn-cnr__text1">16 GB SD-kaart</p>
                    </div>
                </button>

                <button className={`c-present-form-btn ${mousepadActive ? 'active' : ''}`} onClick={() => onClickHandler('Muismat')}>
                    {mousepadActive ? 
                        <img className='c-present-form-btn__check mousepad' src='/images/vinkje.png' alt='Vinkje'/> : ''
                    }
                    <div className="c-present-form-btn-cnr2">
                        <div className="c-present-form-btn-cnr__image image-mousepad"></div>
                        <p className="c-present-form-btn-cnr__text2">Ergonomische muismat</p>
                    </div>
                </button>
            </div>
            <div className="c-present-content"> 
                <p className="c-present-content__warning">{props.device === 'desktop' ? props.validation && validationMsg ? 'Vergiet niet een cadeau te selecteren!' : '' : ''}</p>
                <p className="c-present-content__notice">*Het ontvangen van het cadeautje is <strong>geheel kosteloos</strong>, enkel vragen wij u een review te plaatsen.</p>
            </div>
        </section>
    )
}