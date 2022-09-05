function GeneralEdit(props){

    

    return (
        <div className="general-section">
            <div className="edit-form-item">
                <label className="form-label">First Name</label>
                <input className="general-input" ref={props.firstNameInput} type="text" value={props.firstName} onChange={props.handleChange}/>
            </div>
            <div className="edit-form-item">
                <label className="form-label">Last Name</label>
                <input className="general-input" ref={props.lastNameInput} type="text" value={props.lastName} onChange={props.handleChange}/>
            </div>
            <div className="edit-form-item">
                <label className="form-label">Phone Number</label>
                <input className="general-input" ref={props.phoneInput} type="text" value={props.phone} onChange={props.handleChange}/>
            </div>
            <div className="edit-form-item">
                <label className="form-label">Email</label>
                <input className="general-input" ref={props.emailInput} type="text" value={props.email} onChange={props.handleChange}/>
            </div>
        </div>
    )
}

export default GeneralEdit;