import { render, screen } from "@testing-library/react"
import Contact from "../contact"
import "@testing-library/jest-dom";


//Grouping multiple testcaser in single block i.e Describe

describe("contact us oage testcases",()=>{

    test("should load contact us Page", ()=>{
        render(<Contact/>);
    
        //querying
    
        const heading = screen.getAllByRole("heading");
    
        expect(heading.length).toBe(2);
    });
    
    test("should check for button in contact Us page" , ()=>{
        render(<Contact/>);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    })
    
    test("should check for input inside contact page",()=>{
        render(<Contact/>);
    
        const input = screen.getAllByPlaceholderText("name");
    
        expect(input.length).toBe(1);
    })
});



// test("should load contact us Page", ()=>{
//     render(<Contact/>);

//     //querying

//     const heading = screen.getAllByRole("heading");

//     expect(heading.length).toBe(2);
// });

// test("should check for button in contact Us page" , ()=>{
//     render(<Contact/>);

//     const button = screen.getByRole("button");

//     expect(button).toBeInTheDocument();
// })

// test("should check for input inside contact page",()=>{
//     render(<Contact/>);

//     const input = screen.getAllByPlaceholderText("name");

//     expect(input.length).toBe(1);
// })

