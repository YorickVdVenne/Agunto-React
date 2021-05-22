import React from 'react';
import { useState } from 'react';
import './MobilePage.css';
import Header from '../../containers/Header';
import Main from '../../containers/Main';

export default function MobilePage(props) {
    const [formData, setFormData] = useState()
    const [currentStep, setCurrentStep] = useState()

    if(formData) {
        console.log('checking form data... sending mail!')

        // Email functionality

        // if mail successfully sends, set onSuccess prop to true
        props.onSuccess(true)
    }

    return (
        <div className="mobile">
            <Header step={currentStep} device='mobile'/>
            <Main 
                device='mobile' 
                onSubmit={(data) => setFormData(data)} 
                step={(step) => setCurrentStep(step)}
            />
        </div>
    )
}