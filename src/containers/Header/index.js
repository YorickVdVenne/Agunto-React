import './Header.css'
import ScrollIndicator from '../../components/ScrollIndicator'

export default function Header() {

    return (
    <header className="c-header">
        <ScrollIndicator />
        <img className="c-header__image" src="/images/cadeautjes.png" alt="cadeautjes"/>
    </header>
    )
}