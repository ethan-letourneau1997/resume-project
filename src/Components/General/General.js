import React, { useState, useRef } from 'react';
import GeneralEdit from "./GeneralEdit"
import GeneralSave from './GeneralSave';

export default function General(){
    //refs
    const firstNameInput = useRef("");
    const lastNameInput = useRef("");
    const phoneInput = useRef("");
    const emailInput = useRef("");

    // switch between save and edit
    const [edit, setEdit] = useState(true)
    
    const toggleEdit = (() => {
        setEdit(prevState => !prevState)
    })
    
    
    // general state
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: ""
    })
    
    const updateState = () => setUserInfo((prevState) => ({
        ...prevState,
        firstName: firstNameInput.current.value,
        lastName: lastNameInput.current.value,
        phone: phoneInput.current.value,
        email: emailInput.current.value
    }))
    
        return (
        <div className='general-container' >
            <h2 className='section-header'>General Information</h2>
            {edit ? <GeneralEdit 
                //refs
                    firstNameInput={firstNameInput} 
                    lastNameInput={lastNameInput}
                    phoneInput={phoneInput}
                    emailInput={emailInput}
                //inputs
                    firstName={userInfo.firstName} 
                    lastName={userInfo.lastName}
                    phone={userInfo.phone}
                    email={userInfo.email}
                //udpate state 
                    handleChange = {updateState}  /> 
            : <GeneralSave 
                //inputs
                    firstName = {userInfo.firstName}
                    lastName = {userInfo.lastName}
                    phone = {userInfo.phone}
                    email = {userInfo.email}
                    /> }
            {edit ? <div className='edit-save-butn-container'><button className='edit-save-butn edu-save-butn' onClick={toggleEdit} >Save</button></div>
            : <div className='edit-save-butn-container'><button className='edit-save-butn edu-save-butn' onClick={toggleEdit} >Edit</button></div> }
        </div>
        )
    }