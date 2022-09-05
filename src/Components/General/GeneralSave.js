export default function GeneralSave(props){

    return(
        <div className="general-section">
            <div className="form-item" >
                <p className="form-label">First Name</p>
                <p>{props.firstName}</p>
            </div>
            <div className="form-item" >
                <p className="form-label">Last Name</p>
                <p>{props.lastName}</p>
            </div>
            <div className="form-item" >
                <p className="form-label">Phone Number</p>
                <p>{props.phone}</p>
            </div>
            <div className="form-item" >
                <p className="form-label">Email</p>
                <p>{props.email}</p>
            </div>
        </div>
    )
}