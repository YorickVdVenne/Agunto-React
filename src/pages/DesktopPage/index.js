import React from 'react';
import { useState } from 'react';
import Header from '../../containers/Header';
import Main from '../../containers/Main';
import './DesktopPage.css';

export default function DesktopPage(props) {
    const [currentStep, setCurrentStep] = useState()

    return (
        <div className="desktop">
            <Header step={currentStep} device='desktop'/>
            <Main
                device='desktop' 
                step={(step) => setCurrentStep(step)}
                success={(status) => props.onSuccess(status)}
            />
        </div>
    )
}