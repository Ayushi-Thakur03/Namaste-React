import ItemsList from "./ItemsList";
import CatogoryList from "./CatogoryList";
import { useState } from "react";
const RestaurantCatogory = ({data,showItems,setshowIndex})=>{
    // console.log(data)
  
    // const [showList , setshowList] = useState(false)
     
    const handleClick = ()=>{
        // console.log("Clciked");
        // setshowList(!showList);
        setshowIndex();
    }
    return(
        <div>
        <div className=" border-b-2 bg-gray-100 p-4  w-6/12 m-auto mt-5 align-middle shadow-lg" >
            <div className="flex justify-between font-bold " onClick={handleClick}>
           { (data?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")?
            <span>{data?.title} ({data?.itemCards?.length})</span>:
            <span>{data?.title}</span>}
            <span>🔽</span>
            </div>
            <div>
            { showItems && (data?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")?
            <ItemsList  items = {data.itemCards}/>:
            (<CatogoryList category ={data.categories}/>)}
            </div>
        </div>

      
       {/* <RestaurantMenuList  items = {data.itemCards}/> */}
       </div>
        
    )
}

export default RestaurantCatogory;