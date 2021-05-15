import styles from './Header.css'
import ScrollIndicator from '../../components/ScrollIndicator'

export default function Header() {

    return (
    <header className="header">
        <ScrollIndicator />
        <img className="image" src="/images/cadeautjes.png" alt="cadeautjes"/>
    </header>
    )
}