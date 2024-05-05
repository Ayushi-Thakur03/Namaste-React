import { Sum } from "../Sum";
import {render} from "@testing-library/react";

test("sum of two number" , ()=>{
    // render(<Sum/>);

    //querying

    const result = Sum(3,4);
    
    expect(result).toBe(7);

})