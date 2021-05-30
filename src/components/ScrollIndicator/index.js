import React from 'react';
import './ScrollIndicator.css'

export default function ScrollIndicator(props) {

    function changeProgressBar() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        
        if(document.getElementById("bar")) {
            document.getElementById("bar").style.width = scrolled + "%";
        }
    }

    if(props.device === 'desktop') {
        window.onscroll = () => changeProgressBar();
    } else if(document.getElementById("bar") !== null) {
        switch (props.currentStep) {
            case undefined:
                document.getElementById("bar").style.width = 20 + "%";
                break;
            case 'userInfo':
                document.getElementById("bar").style.width = 40 + "%";
                break;
            case 'orderedProducts':
                document.getElementById("bar").style.width = 60 + "%";
                break;
            case 'uploadProof':
                document.getElementById("bar").style.width = 80 + "%";
                break;
        }
    }

    return (
    <div className='progress-container'>
        <div className="progress-bar" id="bar"></div>
    </div>
    )
}