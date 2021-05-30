import React from 'react';
import { useState } from 'react';
import './MobilePage.css';
import Header from '../../containers/Header';
import Main from '../../containers/Main';

export default function MobilePage(props) {
    const [currentStep, setCurrentStep] = useState()

    return (
        <div className="mobile">
            <Header step={currentStep} device='mobile'/>
            <Main 
                device='mobile' 
                success={(status) => props.onSuccess(status)}
                step={(step) => setCurrentStep(step)}
            />
        </div>
    )
}