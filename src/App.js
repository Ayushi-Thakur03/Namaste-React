import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/header.js";
import Body from "./Components/body.js"
import { createBrowserRouter, Outlet, RouterProvider, useSearchParams} from "react-router-dom";
import AboutUs from "./Components/aboutUS";
import Contact from "./Components/contact.js";
import Error from "./Components/error.js";
import RestaurantMenu from "./Components/RestaurantMenu.js"
import UserContext from "./utils/UserContext.js";
import appStore from "./Redux/appStore.js";
import { Provider } from "react-redux";
import Cart from "./Components/Cart.js";
// import{useSelector} from "react-redux";


// import Grocery from "./Components/Grocery.js";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


/**
 * -Header
 *  - logo
 *  -Navbar
 * -Body container
 *  - search
 *  -card container
 *    -restrurant details
 * -footer
 *  -copyright
 *  -links
 *  -address
 *  -contact
 */

// Episode-03

const Grocery = lazy(()=> import("./Components/Grocery.js"));

const AppComponent =()=> {

  const [userName,setuserName] = useState();

  useEffect(()=>{
    const data = {
      name:"Ayushi Thakur",
    }
    setuserName(data.name);
  }, []);

  // const thememode = useSelector((store)=>store.darktheme.mode);
  // console.log(thememode);
// console.log(localStorage.getItem("DarkMode"));
const [theme , settheme] = useState(localStorage.getItem("DarkMode"));

const themeHandler = ()=>{
    const html = document.querySelector('html');
    // console.log(html.classList);
    if(theme==true){
      settheme(localStorage.setItem("DarkMode" , JSON.stringify("false")));
      html.classList.add("dark");
    }else{
      settheme(localStorage.setItem("DarkMode" , JSON.stringify("true")));
      html.classList.remove("dark");
    }
}



  return( 
      
    <Provider store={appStore}>
    <UserContext.Provider value={{logginUser:userName ,setuserName }}>
    <div className="Main-class" onClick={themeHandler}>
      <HeaderComponent/>
      <Outlet/>
      {/* <Body/> */}
    </div>
    </UserContext.Provider>
    </Provider>
  
  
)};

const approuter = createBrowserRouter([
  {
     path:"/",
     element:<AppComponent/>,
     children:[
      {
        path: "/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<AboutUs/>,
     },
     {
        path:"/contact",
        element:<Contact/>,
     },
     {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>,
     },
     {
       path: "/grocery",
       element : <Suspense fallback={<h1>Loading</h1>}><Grocery/></Suspense>,
     },
     {
      path: "/cart",
      element: <Cart/>,
     },
     ],
     errorElement:<Error/>,
  },
  
 ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppComponent/>)
root.render(<RouterProvider router ={approuter}/> )


// Eposide-03

// const heading = React.createElement("h1", {id:"heading"} , "Namaste React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


//JSX

// const JSXheading = <h1 className="head">Namaste React From JSX</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(JSXheading);




// React Functional Component

// const HeadingComponent1 = ()=>{
//    return <h1>Namaste React</h1>;
// };


//component inside componenet==>component compostion
// const HeadingComponent1 = ()=>(
//     <h1>Namaste React by Component 1</h1>
// );

// const HeadingComponent2 = ()=>(
//    <div id="container">
//       <HeadingComponent1/>
//        <h1 id="heading">Namaste React from Functional Component</h1>
//    </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent2/>)

//Element inside component or vice verse

// const title = <h1>Namaste React for JSX</h1>;
// const title = function(){
//    return <h1>Namaste React for JSX</h1>;
// };
// const Component = ()=>(
//    <div className="container">
//       {title()}
//       <h1>Namsate React from Functional Component</h1>
//    </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Component/>);

// Episode-01
/**
  <div id="parent">
     <div id= "child1">
       <h1>This is an H1 tag</h1>
       <h2>This is an H2 tag</h2>
     </div>
          <div id= "child2">
       <h1>This is an H1 tag</h1>
       <h2>This is an H2 tag</h2>
     </div>
  </div>
 */

// const parent = React.createElement("div",{id:"parent"}, 
//    [React.createElement("div" , {id: "child1"}, 
//    [React.createElement("h1" , {}, "This is an H1 tag"),
//    React.createElement("h2" , {}, 'This is an h2 tag')]
//    ), React.createElement('div' , {id: "child2"}, [React.createElement("h1", {}, "This is an H1 tag"), 
//    React.createElement("h2", {}, "This is an h2 tag")]
//    )] 
// )





// // const heading = React.createElement(
// //     "h1", {id:"heading" , xyz:"hello"}, 
// //     "Hello World From React");
// //     console.log(heading);
//         const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(parent);