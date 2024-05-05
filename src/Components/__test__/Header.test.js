import { Provider } from "react-redux";
import {HeaderComponent} from "../header";
import { BrowserRouter } from "react-router-dom";
import { render , screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// import logo from "../../imgs/logo.png";


it("should render the Header Component with login button",()=>{
    render(
        <BrowserRouter>
         <Provider>
            <HeaderComponent/>
         </Provider>
        </BrowserRouter> 
         );
    
         const loginbutton = screen.getByRole("login");

         expect(loginbutton).ToBeInTheDocument();

})