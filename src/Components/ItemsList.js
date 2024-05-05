import { useDispatch } from "react-redux";
import {FOOD_IMG} from "../utils/constants";
import { addItems } from "../Redux/cartSlice";
const ItemsList = ({items}) =>{

  const dispatch = useDispatch();

  const handleaddItems = (item)=>{
    //dispatch an action ===>addItems("pizza") will create payload and pass to cartSlice action payload
      dispatch(addItems(item));
  }
  // console.log(items);
    return(
        <div >
          

                 {items?.map((item)=>
                 (
                  (<div key={item?.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-around" >
                    <div className="py-2 w-[433px] ">
                    <span className="grid font-semibold">{item?.card?.info?.name}</span>
                    <span>{" ₹"} {item?.card?.info?.price? (item?.card?.info?.price/100): (item?.card?.info?.defaultPrice/100)}</span>
                    <p className="py-2 text-xs text-gray-500">{item?.card?.info?.description}</p></div>
                    { (item?.card?.info?.imageId===undefined) ?(
                    
                      
                      <div className="w-[234px] h-auto p-4 flex justify-center">
                      <button className=" p-2 bg-white text-green-300 rounded-md font-bold w-32">Add</button>
                      </div>
                    ):<div className="w-[234px] h-auto p-4 ">
                      <img src={FOOD_IMG+item?.card?.info?.imageId}  className="rounded-md bg-cover left w-[100%] h-[150px]" alt="" />
                      <div className="relative m-auto -z-1 bottom-10 left-8">
                      <button className=" p-2 bg-white text-green-300 rounded-md font-bold w-32" onClick={()=>handleaddItems(item)}>Add</button>
                      </div>
                    </div>}
                    </div>)
                 )
               )}

        </div>
    )

}

export default ItemsList;