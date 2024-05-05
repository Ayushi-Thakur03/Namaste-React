import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class AboutUs extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
        
        console.log("Parent Did Mount");
    }

    render(){
        console.log("Parent render");
        return(
            
        <div className="aboutUs p-28">
             <h1>Our Team Members</h1>
             <div>
                <UserContext.Consumer>
                    {({logginUser})=><h1>{logginUser}</h1>}
                </UserContext.Consumer>
             </div>
             <UserClass />
             {/* <UserClass name = {"Second"} location = {"Kanpur"} contact = {"abc@gmail.com"}/> */}
        </div>
            ); 
    }
}

// import {approuter} from ""
// const AboutUs = ()=>{
//     return(<div className="aboutUs">
//         <h1>Our Team Members</h1>
//         <UserClass name = {"Ayushi Thakur"} location = {"Kanpur"} contact = {"abc@gmail.com"}/>
//     </div>
//     );
// }

export default AboutUs;