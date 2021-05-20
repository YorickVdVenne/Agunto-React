import React from 'react';
import './OrderedProducts.css'
import Carousel from 'react-elastic-carousel'

export default function OrderedProducts(props) {

    function onClickHandler(value) {
        props.onChange(value)
    }
    const toShow = props.device === 'desktop' ? 3 : 1

    return (
        <section className="products">
            <h1 className="products-title"><strong>Welk product heb je bij ons besteld?*</strong></h1>
            <p className="products-text">
                Let op, als je het desbetreffende product aanklinkt, opent er een nieuw tabblad dat de mogelijkheid geeft 
                een review te schrijven. Dit is echter nodig om het cadeau te ontvangen. <u><strong>Sluit deze pagina niet! </strong></u>
                Als laatste stap dien je namelijk nog de screenshot te uploaden. Klik daarna op de groene knop :)
            </p>
            <Carousel itemsToShow={toShow}>
                <div key={1}>
                    <img src="/images/ontpluizer.jpg" alt="Ontpluizer"/>
                </div>
                <div key={2}>
                    <img src="/images/kattenverjager.jpg" alt="Kattenverjager"/>
                </div>
                <div key={3}>
                    <img src="/images/kattenverjager2.jpg" alt="Kattenverjager"/>
                </div>
                <div key={4}>
                    <img src="/images/hondenriem.jpg" alt="Hondenriem"/>
                </div>
                <div key={5}>
                    <img src="/images/bureaulamp.jpg" alt="Bureaulamp"/>
                </div>
                <div key={6}>
                    <img src="/images/energiemeter.jpg" alt="Energiemeter"/>
                </div>
                <div key={7}>
                    <img src="/images/buitencamera.jpg" alt="Buitencamera"/>
                </div>
            </Carousel>
            {/* <div className="product-container">
                <a className="product-link1" onClick={() => onClickHandler('Ontpluizer')} target="_blank" rel="noreferrer" href="https://www.bol.com/nl/service/schrijf-een-review.html?global_id=9300000035087666">
                    <div className="product-wrapper">
                        <img className="product-image1" src="/images/product1.jpg" alt=""/>
                    </div>
                    <p className="product-image-title">Ontpluizer</p>
                </a>
                <a className="product-link2" onClick={() => onClickHandler('Kattenverjager')} target="_blank" rel="noreferrer" href="https://www.bol.com/nl/service/schrijf-een-review.html?global_id=9300000038002255">
                    <div className="product-wrapper">
                        <img className="product-image2" src="/images/product2.jpg" alt=""/>
                    </div>
                    <p className="product-image-title">Kattenverjager</p>
                </a>
                <a className="product-link3" onClick={() => onClickHandler('Kattenverjager')} target="_blank" rel="noreferrer" href="https://www.bol.com/nl/service/schrijf-een-review.html?global_id=9300000037303545">
                    <div className="product-wrapper">
                        <img className="product-image3" src="/images/product3.jpg" alt=""/>
                    </div>
                    <p className="product-image-title">Kattenverjager</p>
                </a>
                <a className="product-link4" onClick={() => onClickHandler('Bureaulamp')} target="_blank" rel="noreferrer" href="https://www.bol.com/nl/service/schrijf-een-review.html?global_id=9300000035087666">
                    <div className="product-wrapper">
                        <img className="product-image4" src="/images/product4.jpg" alt=""/>
                    </div>
                    <p className="product-image-title">Bureaulamp</p>
                </a>
            </div> */}
        </section>
    )
}