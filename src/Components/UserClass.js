import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
          userInfo:{
            name: "dummy",
            location :"default",
          } , 
        };
      
    }
    
    componentDidMount(){
        // const data = await fetch("https://api.github.com/users/Ayushi-Thakur03");
        // const json =  await data.json();
        
        // this.setState({
        //     userInfo:json,
        // });

        // console.log(json);

        this.timer = setInterval(()=>{
            console.log("Namaste React OP");
        },1000);
        console.log("com")
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Component did Update");
        // if(this.state.count != this.prevState.count || this.state.count2 != this.prevState.count2){

        // }
    }

    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("Component Will Unmount")
    }

   render(){
    //  const {name,location,contact} = this.props;
    return <div className="User-Info">
        <h3>Name: {this.state.userInfo.name}</h3>
        {/* <h3>Name: {name}</h3> after destructing the props */}
        <h4>Location: {this.state.userInfo.location}</h4>
        {/* <h4>Contact: {this.state.UserInfo.contact}</h4> */}
    </div>
   }
}

export default UserClass;