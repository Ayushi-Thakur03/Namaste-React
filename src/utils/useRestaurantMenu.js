import { useEffect, useState } from "react";
import {RES_DATA_MENU} from "./constants";
const useRestaurantMenu = (resId)=>{
    const[resInfo , setresInfo] = useState(null);
    useEffect(()=>{
         fetchData();
    }, []);

    const fetchData = async()=>{
        const data = await fetch(RES_DATA_MENU+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setresInfo(json.data);
        console.log(json.data);
    }
    return resInfo;
}

export default useRestaurantMenu;
