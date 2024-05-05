import { useState, useEffect } from "react";
import ShimmerUI from "./shimmer";
import {FOOD_IMG,RES_DATA_MENU } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatogory from "./RestaurantCatogory";


const RestaurantMenu = () => {
  
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);

  const[showIndex, setshowIndex] = useState(null);
  
  // const [resInfo, setresInfo] = useState(null);

  

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  

  // const fetchMenu = async () => {
    // const data = await fetch(RES_DATA_MENU + resId + "&catalog_qa=undefined&submitAction=ENTER");
    // console.log(RES_DATA_MENU + resId+ "&catalog_qa=undefined&submitAction=ENTER")
    // const json = await data.json();
    // console.log(json);
    // setresInfo(json.data);

    // setresInfo(data?.cards[0]?.card?.card?.info);
  // };



  if (resInfo === null) return <ShimmerUI />;
  // console.log(resInfo);
//   console.log(resInfo?.cards[0]?.card?.card?.info?.id);
  const {
    name,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    sla,
    areaName,
    avgRating,
  } = resInfo?.cards[2]?.card?.card?.info;

  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

     const catogories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
           ( c?.card?.["card"]?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") || (c?.card?.["card"]?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
      )

      // console.log(catogories)

  return (
    <div className="restaurant-menu-container mt-32">
      <div className="restaurant-menu flex justify-around pt-[25px]">
        <div className="restaurant-menu-details ml-[25%]">
          <h1 className="res-name text-2xl mt-1">{name}</h1>
          <h3 className="cuisines text-orange-600 underline">{cuisines.join(",")}</h3>
          <h5>
            {areaName},{sla.lastMileTravelString}
          </h5>
        </div>
        <div className="rating-container mr-[30%] m-auto border border-solid border-[rgb(237, 234, 234)]">
          <div className="rating">
            <svg
              className="rating-logo w-[15px] fill-green-300 mt-[8px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <h5 className="text-[2.5vh] m-0">{avgRating}</h5>
          </div>
          <h5 className="mt-[20px] text-[2vh]">{totalRatingsString}</h5>
        </div>
      </div>
      <hr className="border border-dashed border-[rgb(232,228,228)] w-[55%] ml-52" />

      <section className="coupon-container">
        <div className="time-price-container flex ml-[375px]">
          <div className="time-price flex justify-center ml-[20px]" id="time">
            <svg className="w-[10px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
            </svg>
            <h4>{sla.deliveryTime}min</h4>
          </div>
          <div className="time-price flex justify-center ml-[20px]" id="price">
            <svg className="w-[10px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z" />
            </svg>
            <h4>{costForTwoMessage}</h4>
          </div>
        </div>

       
         </section>
      <hr />
       
    
      {/* <div className="food-menu"> */}
        {catogories?.map((catogary,index)=>{
            //  <h4 className="food-name">{item.card.info.name}</h4>
      
           return( 
               <RestaurantCatogory key = {catogary?.card?.card?.title} 
               data = {catogary?.card?.card}
               showItems={index==showIndex ? true:false}
               setshowIndex={()=>setshowIndex(index)}
               />
            )
        }
        )
        };
       
        
      {/* </div> */}
    </div>
  );
};

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 3,
// };

export default RestaurantMenu;
