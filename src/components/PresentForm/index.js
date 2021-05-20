import React from 'react';
import './PresentForm.css'

export default function PresentForm(props) {

    function onClickHandler(value) {
        props.onChange(value)
    }

    return (
        <section className="c-present">
            <div className="c-present-content">
                <h1 className="c-present-content__title">Welk cadeautje kies je?*</h1>
                <p className="c-present-content__text">Selecteer de afbeelding met het cadeautje dat je wenst te ontvangen na het plaatsen van een review!</p>
            </div>

            <div className="c-present-form">
                <button className="c-present-form-btn" onClick={() => onClickHandler('SD-kaart')}>
                    <div className="c-present-form-btn-cnr1">
                        <div className="c-present-form-btn-cnr__image image-sd"></div>
                        <p className="c-present-form-btn-cnr__text1">16 GB SD-kaart</p>
                    </div>
                </button>

                <button className="c-present-form-btn" onClick={() => onClickHandler('Muismat')}>
                    <div className="c-present-form-btn-cnr2">
                        <div className="c-present-form-btn-cnr__image image-mousepad"></div>
                        <p className="c-present-form-btn-cnr__text2">Ergonomische muismat</p>
                    </div>
                </button>
            </div>
            <div className="c-present-content"> 
                <p className="c-present-content__notice">*Het ontvangen van het cadeautje is <strong>geheel kosteloos</strong>, enkel vragen wij u een review te plaatsen.</p>
            </div>
        </section>
    )
}