import MonthDropdown from "../Date Dropdown/MonthDropdown"
import YearDropdown from "../Date Dropdown/YearDropdown"

export default function EditWork(props){
  
    return(
        <div className="e-work-cont" >
            <div className="e-work-bod" >
                <div className="e-work-item company-name">
                    <label>Company Name</label>
                    <input 
                    // ref={eval(`workNameRef${props.id}`)}
                    ref={props.workInfo.workNameRef}
                    onChange={props.updateState}
                    className="company-name-input"
                    value={props.workInfo.workName} />    
                </div>
                <div className="e-work-item company-location">
                    <label>Location</label>
                    <input 
                    ref={props.workInfo.locationRef}
                    onChange={props.updateState}
                    className="work-location-input" 
                    value={props.workInfo.location} />
                </div>
            <div className="e-work-item job-title">
                <label>Job</label>
                <input 
                ref={props.workInfo.jobRef}
                onChange={props.updateState}
                className="job-title-input"
                value={props.workInfo.job}  />
            </div>
                
            <div className="date-container">
                <div className="e-work-date-sec work-start-date">
                    <label>From</label>
                    <div className="e-work-date-div">
                        <div className="e-work-date-item"> 
                            <MonthDropdown 
                            monthRef={props.workInfo.startMonthRef}
                            value={props.workInfo.startMonth}
                            onChange={props.updateState}/>
                        </div>
                        <div className="e-work-date-item">
                            <YearDropdown 
                            yearRef={props.workInfo.startYearRef}
                            value={props.workInfo.startYear}
                            onChange={props.updateState}/>
                        </div>
                    </div>
                </div>
                <div className="e-work-date-sec work-end-date">
                    <label>To</label>
                    {props.workInfo.checked ? 
                    <div className="e-work-date-div">
                    <div className="e-work-date-item"> 
                    <select
                        ref={props.workInfo.endMonthRef}
                        value={props.workInfo.endMonth}
                        onChange={props.updateState}
                        disabled={true}
                        >
                        <option>present</option>
                    </select>
                </div>
                
                <div className="e-work-date-item">
                    <select
                        ref={props.workInfo.endYearRef}
                        value={props.workInfo.endYear}
                        onChange={props.updateState}
                        disabled={true}>
                        <option> </option>
                    </select>
                </div>
                    <div className="edu-check-container">
                        <input defaultChecked="true" type="checkbox" className="work-check" id={`workCheckbox${props.id}`} onClick={props.processCheck} />
                        <label>Current Job?</label>
                    </div>
                </div> 
                :<div className="e-work-date-div">
                <div className="e-work-date-item"> 
                    <MonthDropdown 
                    monthRef={props.workInfo.endMonthRef}
                    value={props.workInfo.endMonth}
                    onChange={props.updateState}/>
                </div>
                <div className="e-work-date-item">
                    <YearDropdown 
                    yearRef={props.workInfo.endYearRef}
                    value={props.workInfo.endYear}
                    onChange={props.updateState}/>
                </div>
                <div className="work-check-container">
                        <input type="checkbox" className="work-check" id={`workCheckbox${props.id}`} onClick={props.processCheck}/>
                        <span>Current Job?</span> 
                </div>
            </div>}
                    
                        
                </div> 
            </div>
            <span className="det-span"> Provide up to three details about this job</span>
            <div className="e-work-item job-detail">
                <label>Detail 1</label>
                <textarea 
                ref={props.workInfo.detailOneRef}
                value={props.workInfo.detailOne}
                onChange={props.updateState}/>
            </div>
            <div className="e-work-item job-detail">
                <label>Detail 2</label>
                <textarea 
                ref={props.workInfo.detailTwoRef}
                value={props.workInfo.detailTwo}
                onChange={props.updateState}/>
            </div>
            <div className="e-work-item job-detail">
                <label>Detail 3</label>
                <textarea 
                ref={props.workInfo.detailThreeRef}
                value={props.workInfo.detailThree}
                onChange={props.updateState}/>
            </div>

        </div>
    
        <div className="edu-bottom-butn-section">
                <div className='edu-save-container'>
                    <button id={props.workInfo.saveWorkButnID}  onClick={props.clickSave}  className='edu-save-butn' >Save</button>
                </div>
                {props.id !== 1 && props.id === props.length ? 
                <div className="remove-butn-container">
                    <button id={`remove${props.id}`} className="remove-butn" onClick={props.deleteWork}>-</button>
                </div>
                : <div className="remove-butn-container"></div>}
        </div>
        
        </div>
    )
}


