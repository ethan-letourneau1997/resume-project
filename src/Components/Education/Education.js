import { useState, useRef, isValidElement } from "react";
import MonthDropdown from "../Date Dropdown/MonthDropdown";
import YearDropdown from "../Date Dropdown/YearDropdown";
import SaveEducation from "./SaveEducation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
export default function Education() {

    // switch between save and edit
    const [edit, setEdit] = useState(true)

    const toggleEdit = ((e) => {
        // updateState();
                setEduInfo(prevEduInfo => {
                    const newEduInfo = []
                    for(let i = 0; i < eduInfo.length; i++) {
                        const currentEduInfo = prevEduInfo[i]
                        
                        if(currentEduInfo.editID == e.target.id && currentEduInfo.edit == true) {
                            const updatededuInfo = {
                                ...currentEduInfo,
                                edit: false
                                
                            }
                            newEduInfo.push(updatededuInfo)
                        } 
                        else if(currentEduInfo.editID == e.target.id && currentEduInfo.edit == false) {
                            const updatededuInfo = {
                                ...currentEduInfo,
                                edit: true
                                
                            }
                            newEduInfo.push(updatededuInfo)
                        } 
                        else {
                            newEduInfo.push(currentEduInfo)
                        }
                    }
                    return(newEduInfo)
                })
    }) 



    const validateForm= ((e) => {
        // updateState();
                setEduInfo(prevEduInfo => {
                    const newEduInfo = []
                    for(let i = 0; i < eduInfo.length; i++) {
                        const currentEduInfo = prevEduInfo[i]
                        
                        if(currentEduInfo.editID == e.target.id && currentEduInfo.schoolName != "") {
                            console.log('valid')
                            const updatededuInfo = {
                                ...currentEduInfo,
                                validName: true
                                
                            }
                            newEduInfo.push(updatededuInfo)
                            toggleEdit(e)
                        } 
                        else if(currentEduInfo.editID == e.target.id && currentEduInfo.schoolName == "") {
                            console.log('invalid')
                            const updatededuInfo = {
                                ...currentEduInfo,
                                validName: false
                                
                            }
                            newEduInfo.push(updatededuInfo)
                        } 
                        else {
                            newEduInfo.push(currentEduInfo)
                        }
                    }
                    return(newEduInfo)
                })
    }) 

        
    

    const processCheck = ((e) => {

      
        setEduInfo(prevEduInfo => {
            const newEduInfo = []
            for(let i = 0; i < eduInfo.length; i++) {
                const currentEduInfo = prevEduInfo[i]
                if(currentEduInfo.checkID == e.target.id && currentEduInfo.checked == true) {
                    const updatededuInfo = {
                        ...currentEduInfo,
                        checked: false,
                        endMonth: "",
                        endYear:""
                        
                        
                    }
                    newEduInfo.push(updatededuInfo)
                } 
                else if(currentEduInfo.checkID == e.target.id && currentEduInfo.checked == false) {
                    const updatededuInfo = {
                        ...currentEduInfo,
                        checked: true,
                        endMonth: "current",
                        endYear:""              
                    }
                    newEduInfo.push(updatededuInfo)
                } 
                else {
                    newEduInfo.push(currentEduInfo)
                }
            }
      
            return(newEduInfo)
        })
        
    }) 

  

    // refs
    const schoolName1 = useRef("");
    const schoolName2 = useRef("");
    const schoolName3 = useRef("")
    const schoolName4 = useRef("")
    const schoolName5 = useRef("")

    const location1 = useRef("")
    const location2 = useRef("")
    const location3 = useRef("")
    const location4 = useRef("")
    const location5 = useRef("")

    const major1 = useRef("")
    const major2 = useRef("")
    const major3 = useRef("")
    const major4 = useRef("")
    const major5 = useRef("")

    const degree1 = useRef("")
    const degree2 = useRef("")
    const degree3 = useRef("")
    const degree4 = useRef("")
    const degree5 = useRef("")

    const startMonth1 = useRef("")
    const startMonth2 = useRef("")
    const startMonth3 = useRef("")
    const startMonth4 = useRef("")
    const startMonth5 = useRef("")

    const startYear1 = useRef("")
    const startYear2 = useRef("")
    const startYear3 = useRef("")
    const startYear4 = useRef("")
    const startYear5 = useRef("")

    const endMonth1 = useRef("")
    const endMonth2 = useRef("")
    const endMonth3 = useRef("")
    const endMonth4 = useRef("")
    const endMonth5 = useRef("")

    const endYear1 = useRef("")
    const endYear2 = useRef("")
    const endYear3 = useRef("")
    const endYear4 = useRef("")
    const endYear5 = useRef("")

    const checkbox1 = useRef("")
    const checkbox2 = useRef("")
    const checkbox3 = useRef("")
    const checkbox4 = useRef("")
    const checkbox5 = useRef("")

    const formRef = useRef("")

    // remove buttons

    const removeButton2 = (() => {
        setEduInfo(prevEduInfo => {
            const newEduInfo = prevEduInfo.filter(item => item.id !== 2)
      
            return newEduInfo;
        })
    });
    
        const removeButton3 = (() => {
            setEduInfo(prevEduInfo => {
                const newEduInfo = prevEduInfo.filter(item => item.id !== 3)
          
                return newEduInfo;
            })
        });
    
        const removeButton4 = (() => {
            setEduInfo(prevEduInfo => {
                const newEduInfo = prevEduInfo.filter(item => item.id !== 4)
          
                return newEduInfo;
            })
        });
    
        const removeButton5 = (() => {
            setEduInfo(prevEduInfo => {
                const newEduInfo = prevEduInfo.filter(item => item.id !== 5)
          
                return newEduInfo;
            })
        });
   

        // tracks num and info of education items 
    const [eduInfo, setEduInfo] = useState([
        {
        id: 1,
        schoolNameRef: schoolName1, 
        schoolName:"",
        validName: true,
        locationRef:location1,
        location:"",
        majorRef: major1,
        major:"",
        degreeRef: degree1,
        degree: "",
        startMonthRef: startMonth1,
        startMonth:"",
        startYearRef: startYear1,
        startYear:"",
        endMonthRef: endMonth1,
        endMonth:"",
        endYearRef: endYear1,
        endYear:"",
        editID: "",
        edit: true,
        checkID:"",
        checked: false,
    }
    ]);


    const AddEducationItem = (() => {


        setEduInfo(prevState => [...prevState, {
            id: eduInfo.length +1,
            schoolNameRef: `schoolName${eduInfo.length+1}`,
            schoolName:"",
            validName:true,
            locationRef:`location${eduInfo.length+1}`,
            location:"",
            majorRef:`major${eduInfo.length+1}`,
            major:"",
            degreeRef: `degree${eduInfo.length+1}`,
            degree: "",
            startMonthRef: `startMonth${eduInfo.length+1}`,
            startMonth:"",
            startYearRef:`startYear${eduInfo.length+1}`,
            startYear:"",
            endMonthRef: `endMonth${eduInfo.length+1}`,
            endMonth:"",
            endYearRef: `endYear${eduInfo.length+1}`,
            endYear:"",
            removeFunc: `removeButton${eduInfo.length+1}`,
            editID:`editButn${eduInfo.length+1}` ,
            edit: true,
            checkID:`checkbox${eduInfo.length+1}`,
            checked: false,
            }])
        console.log(eduInfo);
    })

    const [hover, setHover] = useState(false)

    function workMouseover(e){
        setHover(prevHover => !prevHover)
        console.log(hover)
    }

    function workMouseout(e){
        setHover(prevHover => !prevHover)
        console.log(hover)
    }

    const handleUpdateState = (() => {
        // updateState();
        setEduInfo(preveduInfo => {
            const neweduInfo = []
            for(let i = 0; i < eduInfo.length; i++) {
                const currenteduInfo = preveduInfo[i] 
                if(currenteduInfo.id === 1 && currenteduInfo.edit==true) {
                    const updatededuInfo = {
                        ...currenteduInfo,
                        schoolName: schoolName1.current.value,
                        location: location1.current.value,
                        major: major1.current.value,
                        degree: degree1.current.value,
                        startMonth: startMonth1.current.value,
                        startYear: startYear1.current.value,
                        endMonth: endMonth1.current.value,
                        endYear: endYear1.current.value
                        
                    }
                    neweduInfo.push(updatededuInfo)
                } 
                else if(currenteduInfo.id === 2 && currenteduInfo.edit==true) {
                    const updatededuInfo = {
                        ...currenteduInfo,
                        schoolName: schoolName2.current.value,
                        location: location2.current.value,
                        major: major2.current.value,
                        degree: degree2.current.value,
                        startMonth: startMonth2.current.value,
                        startYear: startYear2.current.value,
                        endMonth: endMonth2.current.value,
                        endYear: endYear2.current.value
                    }
                    neweduInfo.push(updatededuInfo)
                } 
                else if(currenteduInfo.id === 3 && currenteduInfo.edit==true) {
                    const updatededuInfo = {
                        ...currenteduInfo,
                        schoolName: schoolName3.current.value,
                        location: location3.current.value,
                        major: major3.current.value,
                        degree: degree3.current.value,
                        startMonth: startMonth3.current.value,
                        startYear: startYear3.current.value,
                        endMonth: endMonth3.current.value,
                        endYear: endYear3.current.value
                    }
                    neweduInfo.push(updatededuInfo)
                }  
                else if(currenteduInfo.id === 4 && currenteduInfo.edit==true) {
                    const updatededuInfo = {
                        ...currenteduInfo,
                        schoolName: schoolName4.current.value,
                        location: location4.current.value,
                        major: major4.current.value,
                        degree: degree4.current.value,
                        startMonth: startMonth4.current.value,
                        startYear: startYear4.current.value,
                        endMonth: endMonth4.current.value,
                        endYear: endYear4.current.value
                    }
                    neweduInfo.push(updatededuInfo)
                }  
                else if(currenteduInfo.id === 5 && currenteduInfo.edit==true) {
                    const updatededuInfo = {
                        ...currenteduInfo,
                        schoolName: schoolName5.current.value,
                        location: location5.current.value,
                        major: major5.current.value,
                        degree: degree5.current.value,
                        startMonth: startMonth5.current.value,
                        startYear: startYear5.current.value,
                        endMonth: endMonth5.current.value,
                        endYear: endYear5.current.value
                    }
                    neweduInfo.push(updatededuInfo)
                }  
                else {
                    neweduInfo.push(currenteduInfo)
                }
            }
            return(neweduInfo)
        })
    }) 

   



    const saveEducationElements = eduInfo.map(item => 
        item.edit === false ? <SaveEducation 
        array = {eduInfo}
        element = {item}
        toggleEdit = {toggleEdit}/> 

        : <div key={item.title} className="edit-education-container" >
        <div className="education-body" >


            {item.validName ? <div className="education-item school-name">
                <label>School Name</label>
                <input 
                    id={`school-name-${item.id}`}
                    ref={eval(item.schoolNameRef)} 
                    onChange={handleUpdateState}
                    className="education-header" 
                    value={eduInfo[item.id-1].schoolName}
                    type={"test"} />
                    
            </div>:
            <div className="education-item school-name invalid">
            <label>School Name</label>
            <input 
                id={`school-name-${item.id}`}
                ref={eval(item.schoolNameRef)} 
                onChange={handleUpdateState}
                className="education-header" 
                value={eduInfo[item.id-1].schoolName}
                type={"text"} />
                
        </div>
             }
            
            <div className="education-item location-name">
                <label>Location</label>
                <input  ref={eval(item.locationRef)} 
                    onChange={handleUpdateState} 
                    className="education-header" 
                    value={eduInfo[item.id-1].location}
                    type={"text"} />
            </div>
            <div className="education-item">
                <label>Level of Education</label>
                <input ref={eval(item.degreeRef)}
                    className="education-input" 
                    onChange={handleUpdateState} 
                    value={eduInfo[item.id-1].degree}
                    type={"text"} />
            </div>
                
            <div className="education-item">
            <label>Field of Study</label>
                <input ref={eval(item.majorRef)}
                    className="education-input" 
                    onChange={handleUpdateState} 
                    value={eduInfo[item.id-1].major}
                    type={"text"} />
            </div>
            <div className="date-container">
                <div className="education-date-section education-item start-date">
                    <label>From</label>
                    <div className="date-div">
                        <div className="date-item"> 
                            <MonthDropdown 
                                monthRef={eval(item.startMonthRef)}
                                onChange={handleUpdateState}
                                value={item.startMonth}/>
                        </div>
                        <div className="date-item">
                            <YearDropdown 
                                yearRef={eval(item.startYearRef)}
                                onChange={handleUpdateState}
                                value={item.startYear}/>
                        </div>
                    </div>
                </div>
                <div className="education-date-section education-item end-date">
                    <label>To</label>
                    {item.checked ?
                         <div className="date-div">
                            <div className="date-item"> 
                            <select
                                ref={eval(item.endMonthRef)}
                                onChange={handleUpdateState}
                                disabled={true}
                                value={item.endMonth}>
                                <option>current</option>
                            </select>
                        </div>
                        
                        <div className="date-item">
                            <select
                                ref={eval(item.endYearRef)}
                                onChange={handleUpdateState}
                                disabled={true}
                                value={item.endYear}>
                                <option> </option>
                            </select>
                        </div>
                            <div className="edu-check-container">
                                <input id={eduInfo[item.id-1].checkID} type="checkbox" defaultChecked="true" className="edu-check" onClick={processCheck} />
                                <label>Currently Enrolled?</label> 
                            </div>
                        </div> 
                        :
                        <div className="date-div">
                            <div className="date-item"> 
                                <MonthDropdown 
                                    monthRef={eval(item.endMonthRef)}
                                    onChange={handleUpdateState}
                                    value={item.endMonth}/>
                            </div>
                            
                            <div className="date-item">
                                <YearDropdown 
                                    yearRef={eval(item.endYearRef)}
                                    onChange={handleUpdateState}
                                    value={item.endYear}/>
                            </div>
                            <div className="edu-check-container">
                                <input id={eduInfo[item.id-1].checkID} type="checkbox" className="edu-check" onClick={processCheck} />
                                <label>Currently Enrolled?</label> 
                            </div>
                        </div>
}
                </div>
            </div>
            
        </div>
    
        <div className="edu-bottom-butn-section">
                {item.edit  ? <div className='edu-save-container'><button id={eduInfo[item.id-1].editID}  className='edu-save-butn' onClick={validateForm} >Save</button></div>
                : <div className='edu-edit-save-container'><button id={eduInfo[item.id-1].editID}  className='edu-edit-save-butn' onClick={toggleEdit} ><FontAwesomeIcon icon={faPenToSquare} className="faPenToSquare" /></button></div> }   

                {item.id !== 1 && item.id === eduInfo.length ? 
                <div className="remove-butn-container">
                    <button className="remove-butn" onClick={eval(item.removeFunc)}>-</button>
                </div>
                : <div className="remove-butn-container"></div>}
        </div>
          
    </div> )


    // const educationElementsHandler = edit ? <div>{saveEducationElements}</div> : <div>{saveEducationElements}</div>
    
    

    

    return (
        <div className="education-container">
            <div className="edu-header-container">
                <h2 className='edu-section-header'>Education</h2>
            </div>
            {saveEducationElements}

            {eduInfo.length <= 4 && edit === true ? 
                <div className="add-edu-buttn-container">
                    <button className="add-edu-butn" onMouseOver={workMouseover}  onMouseOut={workMouseout} onClick={AddEducationItem} >+</button>
                    {hover ? <p>Add Education</p> : null}
                </div> : <p>Max Education Added</p>}
            
        </div>
    ) 
}
