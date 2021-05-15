import './PresentForm.css'

export default function PresentForm() {

    return (
        <div className="present">
            <h1 className="title"><strong>Welk cadeautje kies je?*</strong></h1>
            <p className="text">Selecteer de afbeelding met het cadeautje dat je 
            wenst te ontvangen na het plaatsen van een review!</p>

            <div className="sd-border">
                <div className="sd-image-container">
                    <img className="sd-image" src='/images/SD-kaart.png' alt="SD-Kaart"/>
                </div>
                <p className="image-text">16 GB SD-kaart</p>
            </div>
            <div className="mousepad-border">
                <div className="mousepad-image-container">
                    <img className="mousepad-image" src='/images/muismat.jpg' alt="Ergonomische muismat"/>
                </div>
                <p className="image-text">Ergonomische muismat</p>
            </div>
        </div>
    )
}