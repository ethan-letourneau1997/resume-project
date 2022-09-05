import General from "./Components/General/General"
import Education from "./Components/Education/Education"
import Work from "./Components/Work/Work"



export default function Resume(){


    return (

        <div className="root">
        

      
        <div className="resume">
        <header className="header">
            <h1>Resume Builder</h1>
        </header>
            <General />
            <Education />
            <Work />
        </div>

        </div>
        
    )
}