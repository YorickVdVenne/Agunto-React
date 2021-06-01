import React from 'react';
import { useState, useEffect } from 'react'
import './Main.css'

import PresentForm from '../../components/PresentForm'
import UserInfoForm from '../../components/UserInfoForm'
import OrderedProducts from '../../components/OrderedProducts'
import UploadProofForm from '../../components/UploadProofForm'

export default function Main(props) {
    const [present, setPresent] = useState()
    const [presentValidation, setPresentValidation] = useState()
    const [userInfo, setUserInfo] = useState()
    const [userInfoValidation, setUserInfoValidation] = useState()
    const [orderedProduct, setOrderedProduct] = useState()
    const [proof, setProof] = useState()

    useEffect(() => {
        if(present && !userInfo) { props.step('userInfo') }
        if(present && userInfo && !orderedProduct) { props.step('orderedProducts')}
        if(present && userInfo && orderedProduct) { props.step('uploadProof')}

    }, [present,userInfo, orderedProduct, proof])

    function checkAllInputs(image) {
        if(!present) {
            window.scrollTo({top: 0, behavior: 'smooth'}); 
            setPresentValidation(true)
        } else if(!userInfo) {
            window.scrollTo({top: 500, behavior: 'smooth'}); 
            setUserInfoValidation(true)
            setPresentValidation(false)
        } else if(image) {
            setPresentValidation(false)
            setUserInfoValidation(false)
            sendMail(image)
        } else {
            alert('Iets ging verkeerd, probeer het opnieuw door de pagina te resetten.')
        }
    }

    function sendMail(image) {
        const reader = new FileReader();
        reader.readAsBinaryString(image);
        reader.onload = function() {
            const dataUri = "data:" + image.type + ";base64," + btoa(reader.result);
            const product = orderedProduct ? orderedProduct : 'Not Selected';
            props.success(true)
            window.Email.send({
                SecureToken: 'e1befbde-e493-4a94-aeab-c1cd3081f261',
                To : 'reviews@homevitaal.nl',
                From : userInfo.email,
                Subject : 'Product review from ' + userInfo.name,
                Body : "<html>Mail van: <strong>" + userInfo.name + "</strong><br/>" +
                "Geselecteerde Cadeau: " + present + "<br/>" +
                "Beoordeeld product: " + product + "<br/>" +
                "Straat: " + userInfo.street + "<br/>" +
                "Huisnummer: " + userInfo.nr + "<br/>" +
                "Land: " + userInfo.country + "<br/>" +
                "Postcode: " + userInfo.zipcode + "<br/>" +
                "Plaats: " + userInfo.city + "<br/>" +
                "Email: " + userInfo.email + "<br/><br/>" + 
                "Zie attachment voor bewijsmateriaal." +
                "</html>",
                Attachments : [
                    {
                        name : image.name,
                        data : dataUri
                    }]
    
            }).then(
                message => console.log(message),
                props.success(true)
            );
        }
        reader.onerror = function() {
            console.log('Something went wrong...');
        };
    }

    return (
        <div className="main">
            {props.device === 'desktop' 
                ?
                    <>
                        <PresentForm validation={presentValidation} device='desktop' onChange={(value) => setPresent(value)}/>
                        <UserInfoForm validation={userInfoValidation} device='desktop' onChange={(value) => setUserInfo(value)}/>
                        <OrderedProducts device='desktop' onChange={(value) => setOrderedProduct(value)}/>
                        <UploadProofForm device='desktop' onChange={(value) => setProof(value)} submitMail={(proofImage) => checkAllInputs(proofImage)}/>
                    </>
                : present  
                    ? userInfo 
                        ? orderedProduct 
                            ? proof
                                ? 'laden...'
                                : <UploadProofForm onChange={(value) => setProof(value)} submitMail={(proofImage) => checkAllInputs(proofImage)}/>
                            : <OrderedProducts onChange={(value) => setOrderedProduct(value)}/>
                        : <UserInfoForm onChange={(value) => setUserInfo(value)}/>
                    : <PresentForm onChange={(value) => setPresent(value)}/>
            }
        </div>
    )
}