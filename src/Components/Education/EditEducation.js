import MonthDropdown from "../Date Dropdown/MonthDropdown"
import YearDropdown from "../Date Dropdown/YearDropdown"

export default function EditEducation(props){

    return(
        <div key={props.element.title} className="education-container" >
        <div className="education-body" >
            <div className="education-item school-name">
                <label>School Name</label>
                <input  ref={eval(props.element.schoolNameRef)} 
                    onChange={props.handleUpdateState} 
                    className="education-header" 
                    value={props.array[props.element.id-1].schoolName}
                    type={"text"} />
            </div>

            <div className="education-item">
                <label>Level of Education</label>
                <input ref={eval(props.element.degreeRef)}
                    className="education-input" 
                    onChange={props.handleUpdateState} 
                    value={props.array[props.element.id-1].degree}
                    type={"text"} />
            </div>
                
            <div className="education-item">
            <label>Field of Study</label>
                <input ref={eval(props.element.majorRef)}
                    className="education-input" 
                    onChange={props.handleUpdateState} 
                    value={props.array[props.element.id-1].major}
                    type={"text"} />
            </div>
            <div className="date-container">
                <div className="education-date-section education-item start-date">
                    <label>From</label>
                    <div className="date-div">
                        <div className="date-item"> 
                            <MonthDropdown 
                                monthRef={eval(props.element.startMonthRef)}
                                onChange={props.handleUpdateState}
                                value={props.element.startMonth}/>
                        </div>
                        <div className="date-item">
                            <YearDropdown 
                                yearRef={eval(props.element.startYearRef)}
                                onChange={props.handleUpdateState}
                                value={props.element.startYear}/>
                        </div>
                    </div>
                </div>
                <div className="education-date-section education-item end-date">
                    <label>To</label>
                    <div className="date-div">
                        <div className="date-item"> 
                            <MonthDropdown 
                                monthRef={eval(props.element.endMonthRef)}
                                onChange={props.handleUpdateState}
                                value={props.element.endMonth}/>
                        </div>
                        
                        <div className="date-item">
                            <YearDropdown 
                                yearRef={eval(props.element.endYearRef)}
                                onChange={props.handleUpdateState}
                                value={props.element.endYear}/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="edu-bottom-butn-section">
                {props.element.edit ? <div className='edu-edit-save-container'><button id={props.array[props.element.id-1].editID}  className='edu-edit-save-butn' onClick={props.toggleEdit} >Save</button></div>
                : <div className='edu-edit-save-container'><button id={props.array[props.element.id-1].editID}  className='edu-edit-save-butn' onClick={props.toggleEdit} >Edit</button></div> }   

                {props.element.id === props.array.length && props.element.id !== 1? 
                <div className="remove-butn-container">
                    <button className="remove-butn" onClick={eval(props.element.removeFunc)}>-</button>
                </div>
                : <div className="remove-butn-container"></div>}
        </div>
            <div className="edu-section-divider"></div>
    </div>
    )
}