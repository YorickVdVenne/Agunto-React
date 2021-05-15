import { useState } from 'react'
import './Main.css'

import UserInfoForm from '../../components/UserInfoForm'
import PresentForm from '../../components/PresentForm'


export default function Main() {
    const [present, setPresent] = useState()

    console.log(present)

    return (
        <div className="main">
            {present 
            ? <UserInfoForm />
            : <PresentForm onChange={(value) => setPresent(value)}/>}
        </div>
    )
}