import { useState } from 'react'
import './Main.css'

import PresentForm from '../../components/PresentForm'
import UserInfoForm from '../../components/UserInfoForm'
import OrderedProducts from '../../components/OrderedProducts'
import UploadProofForm from '../../components/UploadProofForm'
import SuccessPage from '../../pages/SuccessPage'

export default function Main(props) {
    const [present, setPresent] = useState()
    const [userInfo, setUserInfo] = useState()
    const [orderedProduct, setOrderedProduct] = useState()
    const [proof, setProof] = useState()
    
    if(present && userInfo && orderedProduct && proof) {
        props.onSuccess(true)
    }


    return (
        <div className="main">
            {present 
                ? userInfo 
                    ? orderedProduct 
                        ? proof
                            ? <SuccessPage />
                            : <UploadProofForm onChange={(value) => setProof(value)}/>
                        : <OrderedProducts onChange={(value) => setOrderedProduct(value)}/>
                    : <UserInfoForm onChange={(value) => setUserInfo(value)}/>
                : <PresentForm onChange={(value) => setPresent(value)}/>
            }
        </div>
    )
}