import React from 'react';
import './Header.css'
import ScrollIndicator from '../../components/ScrollIndicator'
import HeaderLogo from '../../components/HeaderLogo'

export default function Header(props) {

    return (
    <>
        {props.device === 'desktop' 
            ? 
                <header className="c-header-desktop">
                    <HeaderLogo />
                    <ScrollIndicator device='desktop'/>
                    <img className="c-header__image-desktop" src="/images/cadeautjes.png" alt="cadeautjes"/>
                </header>
            :
                <header className="c-header">
                    <ScrollIndicator currentStep={props.step}/>
                    <img className="c-header__image" src="/images/cadeautjes.png" alt="cadeautjes"/>
                </header>
        }
    </>
    )
}