import styles from './ScrollIndicator.css'

export default function ScrollIndicator() {
    window.onscroll = () => changeProgressBar();

    function changeProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("bar").style.width = scrolled + "%";
    }

    return (
    <div class='progress-container'>
        <div class="progress-bar" id="bar"></div>
    </div>
    )
}