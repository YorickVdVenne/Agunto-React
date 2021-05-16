import { useState } from 'react'
import './Main.css'

import PresentForm from '../../components/PresentForm'
import UserInfoForm from '../../components/UserInfoForm'
import OrderedProducts from '../../components/OrderedProducts'
import UploadProofForm from '../../components/UploadProofForm'
import SuccessPage from '../../pages/SuccessPage'

export default function Main() {
    const [present, setPresent] = useState()
    const [userInfo, setUserInfo] = useState()
    const [orderedProduct, setOrderedProduct] = useState()
    const [proof, setProof] = useState()
     
    console.log(userInfo)

    return (
        <div className="main">
            {present 
                ? userInfo 
                    ? orderedProduct 
                        ? proof
                            ? <SuccessPage />
                            : <UploadProofForm />
                        : <OrderedProducts />
                    : <UserInfoForm onChange={(value) => setUserInfo(value)}/>
                : <PresentForm onChange={(value) => setPresent(value)}/>
            }
        </div>
    )
}