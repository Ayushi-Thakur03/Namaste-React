import { useContext, useState } from "react";
import logo from "../../imgs/logo.png";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import {darkTheme} from "../Redux/themeSlice";



const HeaderComponent =()=>{
const[btnName , setbtnName] = useState("login");

const onlineStatus = useOnlineStatus();

const {logginUser} = useContext(UserContext);

//subscribing the store 
const cartItems = useSelector((store)=>store.cart.items);
const thememode = useSelector((store)=>store.darktheme.mode);
console.log(thememode);
const dispatch = useDispatch();

// console.log(thememode);
// console.log(cartItems);

    return(
     <div id="Header-container" className="flex place-content-around content-[''] bg-blue-50 h-[77] fixed z-[99] w-full  left-0 right-0 top-0 shadow-lg transition-all ease duration-200  dark:text-gray-400 dark:bg-slate-900">
        <div id="logo-container" className="flex w-14 items-center mr-[500]">
           <img src={logo}  alt="hello" id="logo"/>
        </div>

        <div id ="nav-container" className="flex items-center justify-center">
           <ul id="nav-list" className="flex text-blue-500 font-semibold items-center">
              <li className="mx-6 hover:border-2 hover:w-20 hover: hover:text-white hover:border-solid hover:border-blue-500 hover:bg-blue-500 hover:rounded-xl">{onlineStatus?"✅":"🔴"}</li>
              <li className="mx-6 hover:border-2 hover:w-20 hover: hover:text-white hover:border-solid hover:border-blue-500 hover:bg-blue-500 hover:rounded-xl"><Link to = "/">Home</Link></li>
              <li className="mx-6 hover:border-2 hover:w-20 hover: hover:text-white hover:border-solid hover:border-blue-500 hover:bg-blue-500 hover:rounded-xl"><Link to = "/about">About US</Link></li>
              <li className="mx-6 hover:border-2 hover:w-20 hover: hover:text-white hover:border-solid hover:border-blue-500 hover:bg-blue-500 hover:rounded-xl"><Link to = "/contact">Contact</Link></li>
              <li className="mx-6 hover:border-2 hover:w-20 hover: hover:text-white hover:border-solid hover:border-blue-500 hover:bg-blue-500 hover:rounded-xl"><Link to = "/grocery">Grocery</Link></li>
              <li className="mx-6 fill-blue-500 flex">
               <Link to={"/cart"}>
                 <svg className=" fill-blue-500 w-8"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                 <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                 </svg><span>({cartItems.length } items)</span></Link></li>

                 <button className="btn-userdata border-2 p-1 w-16 border-solid border-blue-500 rounded-xl hover:bg-blue-500 hover:text-white" onClick={()=>{
                    btnName==="login"?
                    setbtnName("logout"): setbtnName("login");
                  }
                 } >{btnName}</button>
                 <li className="mx-6 hover:border-2 hover:w-20 hover: hover:text-white hover:border-solid hover:border-blue-500 hover:bg-blue-500 hover:rounded-xl"><Link to = "/contact">{logginUser}</Link></li>
                 
                 {thememode?(<div className={thememode? "bg-black h-[100%]":"bg-white"}><button className="w-4 mx-6 fill-blue-500" onClick={()=>{dispatch(darkTheme())}}>
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>
                   
                 </button></div>):
                 (<div className={thememode? "bg-black h-[100%]":"bg-white"}><button className="w-4 mx-6 fill-blue-500" onClick={()=>{dispatch(darkTheme())}}>
                 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>

                 </button></div>)}
           </ul>         
        </div>
     </div>
    )
  };

  

  export default HeaderComponent;