import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            count2: 1,
        };
        console.log(this.props.name + " Child Constructor");
    }
    
    componentDidMount(){
        console.log(this.props.name +" Child Did Mount");
    }

   render(){
     console.log(this.props.name+"Child Render");
    //  const {name, location,contact} = this.props; (destructing the props)
    const {count , count2} = this.state;//// destructing the this.state
    return <div className="User-Info">
        {/* <h2>Count: {count}</h2>// destructing the this.state */}
        <h2>Count: {this.state.count2}</h2>
        <button onClick={()=>{
             this.setState({
                count2 : this.state.count2+1,
            })
        }}>Increase Count</button>
        <h3>Name: {this.props.name}</h3>
        {/* <h3>Name: {name}</h3> after destructing the props */}
        <h4>Location: {this.props.location}</h4>
        <h4>Contact: {this.props.contact}</h4>
    </div>
   }
}

export default UserClass;