import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"

export default function SaveWork(props) {

    return (
        <div className="save-work-cont">
            <div className='work-eddit-header-sect'>
                <h1 className="save-work-title">{props.workInfo.job}</h1>
                <button id={props.workInfo.editWorkButnID}  className='work-edit-butn' onClick={props.clickEdit} >
                    <FontAwesomeIcon icon={faPenToSquare} className="faPenToSquare" />
                </button>
            </div> 
            <div className="work-name-location-section">
                <div className="save-work-name">{props.workInfo.workName}</div>
                <span>-</span>
                <div className="save-work-location">{props.workInfo.location}</div>
            </div>
            <div className="work-save-date-section">
                <span>{props.workInfo.startMonth}</span>
                <span>{props.workInfo.startYear}</span>
                <span>to</span>
                <span>{props.workInfo.endMonth}</span>
                <span>{props.workInfo.endYear}</span>
            </div>
            <ul className="work-details-list">
                <li>{props.workInfo.detailOne}</li>
                <li>{props.workInfo.detailTwo}</li>
                <li>{props.workInfo.detailThree}</li>
            </ul>
        </div>
    )
}

