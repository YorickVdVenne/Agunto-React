import React from 'react';
import './ScrollIndicator.css'

export default function ScrollIndicator(props) {

    if(props.device === 'desktop') {
        window.onscroll = () => changeProgressBar();
    }


    function changeProgressBar() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("bar").style.width = scrolled + "%";
    }

    return (
    <div className='progress-container'>
        <div className="progress-bar" id="bar"></div>
    </div>
    )
}