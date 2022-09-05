import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"

export default function SaveEducation(props) {

    return (

<div key={props.element.title} className="save-edu-container" >
            
            <div className="save-edu-body" >
                <div className="edu-line-1">

                        <div className="save-edu-item">
                            <p className="save-school-name" >{props.array[props.element.id-1].schoolName}</p>
                        </div>
                        <span className="location-minus">-</span>
                        <div className="save-edu-item">
                            <p className="edu-save-location" >{props.array[props.element.id-1].location}</p>
                        </div>
        
       
                            <div className='edu-save-container'>
                                <button id={props.array[props.element.id-1].editID}  className='edu-edit-save-butn' onClick={props.toggleEdit} >
                                    <FontAwesomeIcon icon={faPenToSquare} className="faPenToSquare" />
                                </button>
                            </div> 
                        
                </div>
                   
                
                <div className="degree-major-sect">
                    <div className="edu-item">
                        <p className="degree" >{props.element.degree}</p>
                    </div>
                    <p className="in">in</p>
                    <div className="edu-item">
                        <p className="major">{props.array[props.element.id-1].major}</p>
                    </div>
                </div>
                <div className="save-date-sect">
                    <div className="start-date-sect">
                            <p className="start-month">{props.element.startMonth}</p>
                            <p className="start-year">{props.element.startYear}</p>
                            <p className="to">to</p>
                    </div>
                    <div className="end-date-sect">
                            <p className="end-month">{props.element.endMonth}</p>
                            <p className="end-year">{props.element.endYear}</p>
                    </div>
                </div>
            </div>
            
           

           
        </div>
    )
}

