import EditWork from "./EditWork"
import { useState, useRef } from "react";
import './Work.css';
import SaveWork from "./SaveWork";

export default function Work(){

    // refs
    const workName1 = useRef("");
    const workName2 = useRef("");
    const workName3 = useRef("");
    const workName4 = useRef("");
    const workName5 = useRef("");

    const job1 = useRef("");
    const job2 = useRef("");
    const job3 = useRef("");
    const job4 = useRef("");
    const job5 = useRef("");

    const location1 = useRef("");
    const location2 = useRef("");
    const location3 = useRef("");
    const location4 = useRef("");
    const location5 = useRef("");

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

    const detailOne1 = useRef("")
    const detailOne2 = useRef("")
    const detailOne3 = useRef("")
    const detailOne4 = useRef("")
    const detailOne5 = useRef("")

    const detailTwo1 = useRef("")
    const detailTwo2 = useRef("")
    const detailTwo3 = useRef("")
    const detailTwo4 = useRef("")
    const detailTwo5= useRef("")

    const detailThree1 = useRef("")
    const detailThree2 = useRef("")
    const detailThree3 = useRef("")
    const detailThree4 = useRef("")
    const detailThree5 = useRef("")

    // state for user work info 
    const [workInfo, setWorkInfo] = useState([
        {
            id: 1,
            workName:"",
            location:"",
            job:"",
            startMonth:"",
            startYear:"",
            endMonth:"",
            endYear:"",
            detailOne:"",
            detailTwo:"",
            detailThree:"",
            workNameRef: workName1,
            locationRef:location1,
            jobRef:job1,
            startMonthRef:startMonth1,
            startYearRef:startYear1,
            endMonthRef:endMonth1,
            endYearRef:endYear1,
            detailOneRef:detailOne1,
            detailTwoRef:detailTwo1,
            detailThreeRef:detailThree1,
            saveWorkButnID: "",
            editWorkButnID: "",
            edit: true,
            checkID:"",
            checked: false,
        } 
    ])

        // add new work experience
        const addWork = (() => {
            setWorkInfo(prevState => [...prevState, {
                id: workInfo.length +1,
                workName:"",
                location:"",
                job:"",
                startMonth:"",
                startYear:"",
                endMonth:"",
                endYear:"",
                detailOne:"",
                detailTwo:"",
                detailThree:"",
                workNameRef: eval(`workName${workInfo.length+1}`),
                locationRef:eval(`location${workInfo.length+1}`),
                jobRef:eval(`job${workInfo.length+1}`),
                startMonthRef:eval(`startMonth${workInfo.length+1}`),
                startYearRef:eval(`startYear${workInfo.length+1}`),
                endMonthRef:eval(`endMonth${workInfo.length+1}`),
                endYearRef:eval(`endYear${workInfo.length+1}`),
                detailOneRef:eval(`detailOne${workInfo.length+1}`),
                detailTwoRef:eval(`detailTwo${workInfo.length+1}`),
                detailThreeRef:eval(`detailThree${workInfo.length+1}`),
                saveWorkButnID:`saveWorkButn${workInfo.length+1}`,
                editWorkButnID:`editWorkButn${workInfo.length+1}`,
                edit: true,
                checkID:`workCheckbox${workInfo.length+1}`,
                checked: false,
                }])
        })
    
    // switch from edit to save
    function clickSave(e) {
        console.log(e.target.id)
        setWorkInfo(prevWorkInfo =>{
            const newWorkInfo = []
            for(let i=0; i < workInfo.length; i++){
                const currentWorkInfo = prevWorkInfo[i]
                if(currentWorkInfo.saveWorkButnID === e.target.id){
                    const updatedWorkInfo = {
                        ...currentWorkInfo,
                        edit:false
                    }
                    newWorkInfo.push(updatedWorkInfo);
                }
                else {
                    newWorkInfo.push(currentWorkInfo)
                }
                // console.log(workInfo)
               
            }
            return(newWorkInfo)
        })
    }

    // switch from save to edit
    function clickEdit(e) {
        setWorkInfo(prevWorkInfo =>{
            const newWorkInfo = []
            for(let i=0; i < workInfo.length; i++){
                const currentWorkInfo = prevWorkInfo[i]
                if(currentWorkInfo.editWorkButnID === e.target.id){
                    const updatedWorkInfo = {
                        ...currentWorkInfo,
                        edit:true
                    }
                    newWorkInfo.push(updatedWorkInfo);
                }
                else {
                    newWorkInfo.push(currentWorkInfo)
                }
                // console.log(workInfo)
               
            }
            return(newWorkInfo)
        })
    }

    // checkbox logic
    const processCheck = ((e) => {

        console.log(e.target.id)
        setWorkInfo(prevWorkInfo => {
            const newWorkInfo = []
            for(let i = 0; i < workInfo.length; i++) {
                const currentWorkInfo = prevWorkInfo[i]
                if(currentWorkInfo.checkID == e.target.id && currentWorkInfo.checked == true) {
                    const updatedWorkInfo = {
                        ...currentWorkInfo,
                        checked: false,
                        endMonth: "",
                        endYear:""    
                    }
                    newWorkInfo.push(updatedWorkInfo)
                } 
                else if(currentWorkInfo.checkID == e.target.id && currentWorkInfo.checked == false) {
                    const updatedWorkInfo = {
                        ...currentWorkInfo,
                        checked: true,
                        endMonth: "present",
                        endYear:""              
                    }
                    newWorkInfo.push(updatedWorkInfo)
                } 
                else {
                    newWorkInfo.push(currentWorkInfo)
                }
            }
            return(newWorkInfo)
        })
    }) 

    function deleteWork(e){
        const elementID = parseInt(e.target.id.slice(6))
        console.log(elementID)
            setWorkInfo(prevWorkInfo => {
                const newWorkInfo = prevWorkInfo.filter(item => item.id !== elementID)
                return newWorkInfo;
        })
    }

    

    const [hover, setHover] = useState(false)

    function workMouseover(e){
        setHover(prevHover => !prevHover)
        console.log(hover)
    }

    function workMouseout(e){
        setHover(prevHover => !prevHover)
        console.log(hover)
    }
    

// update state based on input
    function updateState(){
        setWorkInfo(prevWorkInfo =>{
            const newWorkInfo = []
            for(let i=0; i < workInfo.length; i++){
                const currentWorkInfo = prevWorkInfo[i]
                if(currentWorkInfo.id === 1 && currentWorkInfo.edit === true){
                    const updatedWorkInfo = {
                        ...currentWorkInfo,
                        workName: workName1.current.value,
                        location: location1.current.value,
                        job: job1.current.value,
                        startMonth:startMonth1.current.value,
                        startYear:startYear1.current.value,
                        endMonth:endMonth1.current.value,
                        endYear:endYear1.current.value,
                        detailOne:detailOne1.current.value,
                        detailTwo:detailTwo1.current.value,
                        detailThree:detailThree1.current.value,
                    }
                    newWorkInfo.push(updatedWorkInfo);
                }
                else if(currentWorkInfo.id === 2 && currentWorkInfo.edit === true){
                    const updatedWorkInfo = {
                        ...currentWorkInfo,
                        workName: workName2.current.value,
                        location: location2.current.value,
                        job: job2.current.value,
                        startMonth:startMonth2.current.value,
                        startYear:startYear2.current.value,
                        endMonth:endMonth2.current.value,
                        endYear:endYear2.current.value,
                        detailOne:detailOne2.current.value,
                        detailTwo:detailTwo2.current.value,
                        detailThree:detailThree2.current.value,
                    }
                    newWorkInfo.push(updatedWorkInfo);
                }
                else if(currentWorkInfo.id === 3 && currentWorkInfo.edit === true){
                    const updatedWorkInfo = {
                        ...currentWorkInfo,
                        workName: workName3.current.value,
                        location: location3.current.value,
                        job: job3.current.value,
                        startMonth:startMonth3.current.value,
                        startYear:startYear3.current.value,
                        endMonth:endMonth3.current.value,
                        endYear:endYear3.current.value,
                        detailOne:detailOne3.current.value,
                        detailTwo:detailTwo3.current.value,
                        detailThree:detailThree3.current.value,
                    }
                    newWorkInfo.push(updatedWorkInfo);
                }
                else if(currentWorkInfo.id === 4 && currentWorkInfo.edit === true){
                    const updatedWorkInfo = {
                        ...currentWorkInfo,
                        workName: workName4.current.value,
                        location: location4.current.value,
                        job: job4.current.value,
                        startMonth:startMonth4.current.value,
                        startYear:startYear4.current.value,
                        endMonth:endMonth4.current.value,
                        endYear:endYear4.current.value,
                        detailOne:detailOne4.current.value,
                        detailTwo:detailTwo4.current.value,
                        detailThree:detailThree4.current.value,
                    }
                    newWorkInfo.push(updatedWorkInfo);
                }
                else if(currentWorkInfo.id === 5 && currentWorkInfo.edit === true){
                    const updatedWorkInfo = {
                        ...currentWorkInfo,
                        workName: workName5.current.value,
                        location: location5.current.value,
                        job: job5.current.value,
                        startMonth:startMonth5.current.value,
                        startYear:startYear5.current.value,
                        endMonth:endMonth5.current.value,
                        endYear:endYear5.current.value,
                        detailOne:detailOne5.current.value,
                        detailTwo:detailTwo5.current.value,
                        detailThree:detailThree5.current.value,
                    }
                    newWorkInfo.push(updatedWorkInfo);
                }
                else {
                    newWorkInfo.push(currentWorkInfo)
                }
                console.log(workInfo)
            }
            return(newWorkInfo)
        })
    }

    // determine which mode to display elements in
    const displayWorkElements = workInfo.map(item => 
        item.edit
            ?<EditWork 
                id={item.id} 
                workInfo = {item} 
                checked={item.checked} 
                processCheck={processCheck}
                updateState = {updateState}
                clickSave={clickSave}
                deleteWork={deleteWork}
                length={workInfo.length}
                />
            :<SaveWork workInfo={item} clickEdit={clickEdit} />)

    return(
        <div className="work-cont">
            <div className="work-header-cont">
                <h2 className='work-sec-header'>Work</h2>
            </div>
            {displayWorkElements}  
            {workInfo.length < 5 
            ? <div className="add-edu-buttn-container">
                <button className="add-work-butn add-edu-butn" onMouseOver={workMouseover} onMouseOut={workMouseout} onClick={addWork} >+</button>
            {hover ? <p>Add Work Section</p> : null}
            </div> 
            : <p>Max Work Added</p>}
        </div>
    )
}


