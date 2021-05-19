import './SuccessPage.css'

export default function SuccessPage() {

    return (
        <div className="success">
            <div className="success-whitecheck-wrapper">
                <img className="whitecheck" src="/images/vinjewitgroen.png" alt="vinkje" />
            </div>
           <h1 className="success-title">Hartelijk bedankt!</h1>
           <p className="success-text">Je ontvangt het cadeautje binnen 5 werkdagen</p>
           <div className="success-gifts-wrapper">
                <img className="success-gift-image" src="/images/cadeautjes2.png" alt="Cadeautjes" />
            </div>
        </div>
    )
}