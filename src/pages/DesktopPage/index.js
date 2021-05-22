import React from 'react';
import { useState } from 'react';
import Header from '../../containers/Header';
import Main from '../../containers/Main';
import './DesktopPage.css';

export default function DesktopPage(props) {
    const [formData, setFormData] = useState()

    if(formData) {
        console.log('checking form data... sending mail!')

        // Email functionality:

        // if mail successfully sends, set onSuccess prop to true
        props.onSuccess(true)
    }

    return (
        <div className="desktop">
            <Header device='desktop'/>
            <Main device='desktop' onSubmit={(data) => setFormData(data)}/>
        </div>
    )
}