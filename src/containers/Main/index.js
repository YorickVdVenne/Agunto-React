import React from 'react';
import { useState, useEffect } from 'react'
import './Main.css'

import PresentForm from '../../components/PresentForm'
import UserInfoForm from '../../components/UserInfoForm'
import OrderedProducts from '../../components/OrderedProducts'
import UploadProofForm from '../../components/UploadProofForm'

export default function Main(props) {
    const [present, setPresent] = useState()
    const [userInfo, setUserInfo] = useState()
    const [orderedProduct, setOrderedProduct] = useState()
    const [proof, setProof] = useState()

    console.log(present, userInfo, orderedProduct, proof)

    useEffect(() => {
        if(present && !userInfo) { props.step('userInfo') }
        if(present && userInfo && !orderedProduct) { props.step('orderedProducts')}
        if(present && userInfo && orderedProduct) { props.step('uploadProof')}

    }, [present,userInfo, orderedProduct, proof])

    if(present && userInfo && orderedProduct && proof) {
        props.onSubmit([present, userInfo, orderedProduct, proof])
    }

    return (
        <div className="main">
            {props.device === 'desktop' 
                ?
                    <>
                        <PresentForm device='desktop' onChange={(value) => setPresent(value)}/>
                        <UserInfoForm device='desktop' onChange={(value) => setUserInfo(value)}/>
                        <OrderedProducts device='desktop' onChange={(value) => setOrderedProduct(value)}/>
                        <UploadProofForm device='desktop' onChange={(value) => setProof(value)}/>
                    </>
                : present 
                    ? userInfo 
                        ? orderedProduct 
                            ? proof
                                ? 'laden...'
                                : <UploadProofForm onChange={(value) => setProof(value)}/>
                            : <OrderedProducts onChange={(value) => setOrderedProduct(value)}/>
                        : <UserInfoForm onChange={(value) => setUserInfo(value)}/>
                    : <PresentForm onChange={(value) => setPresent(value)}/>
            }
        </div>
    )
}