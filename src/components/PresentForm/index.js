import './PresentForm.css'

export default function PresentForm(props) {

    function onClickHandler(value) {
        props.onChange(value)
    }

    return (
        <div className="present">
            <h1 className="present-title"><strong>Welk cadeautje kies je?*</strong></h1>
            <p className="present-text">Selecteer de afbeelding met het cadeautje dat je 
            wenst te ontvangen na het plaatsen van een review!</p>

            <button className="sd-button" onClick={() => onClickHandler('SD-kaart')}>
                <div className="sd-wrapper">
                    <div className="sd-image-container">
                        <img className="sd-image" src='/images/SD-kaart.png' alt="SD-kaart"/>
                    </div>
                    <p className="image-text">16 GB SD-kaart</p>
                </div>
            </button>
            <button id="Muismat" className="mousepad-button" onClick={() => onClickHandler('Muismat')}>
                <div className="mousepad-wrapper">
                    <div className="mousepad-image-container">
                        <img className="mousepad-image" src='/images/muismat.jpg' alt="Ergonomische muismat"/>
                    </div>
                    <p className="image-text">Ergonomische muismat</p>
                </div>
            </button>
            <p className="present-notice">*Het ontvangen van het cadeautje is <strong>geheel kosteloos</strong>, 
            enkel vragen wij u een review te plaatsen.</p>
        </div>
    )
}