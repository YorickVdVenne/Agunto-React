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
            alert('Vergeet niet een cadeau te selecteren!')
            setPresentValidation(true)
        } else if(!userInfo) {
            alert('Vergeet niet je gegevens in te vullen!')
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

            window.Email.send({
                SecureToken: 'e1befbde-e493-4a94-aeab-c1cd3081f261',
                To : 'reviews@homevitaal.nl',
                From : userInfo.email,
                Subject : 'Product review from ' + userInfo.name,
                Body : "<html>Mail from: <strong>" + userInfo.name + "</strong><br/>" +
                "Selected gift: " + present + "<br/>" +
                "Reviewed Product: " + product + "<br/>" +
                "Street: " + userInfo.street + "<br/>" +
                "Housenumber: " + userInfo.nr + "<br/>" +
                "Country: " + userInfo.country + "<br/>" +
                "Zipcode: " + userInfo.zipcode + "<br/>" +
                "City: " + userInfo.city + "<br/>" +
                "Email: " + userInfo.email + "<br/><br/>" + 
                "Check out the attachment for the proof of review" +
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