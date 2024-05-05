import ResturentCard,{WithPromotedLabel} from "./ResturentCard";
import reslist from  "../utils/mockdata";
import { useContext, useEffect, useState } from "react";
import ShimmerUI from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// import { useSelector } from "react-redux";
 
const Body =()=>
{

  //local usestate Variable==>super powerful utility function
  // let[restaurantsDetails, setrestaurantsDetails] = useState([
//   {
//     "info": {
//     "id": "594820",
//     "name": "Chinese Wok",
//     "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
//     "locality": "Sector 34",
//     "areaName": "Sector 15",
//     "costForTwo": "₹250 for two",
//     "cuisines": [
//     "Chinese"
//     ],
//     "avgRating": 4.2,
//     "parentId": "61955",
//     "avgRatingString": "4.2",
//     "totalRatingsString": "500+",
//     "sla": {
//     "deliveryTime": 29,
//     "lastMileTravel": 2.4,
//     "serviceability": "SERVICEABLE",
//     "slaString": "25-30 mins",
//     "lastMileTravelString": "2.4 km",
//     "iconType": "ICON_TYPE_EMPTY"
//     }
//   }},
//    {
//     "info": {
//     "id": "594821",
//     "name": "mcd",
//     "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
//     "locality": "Sector 34",
//     "areaName": "Sector 15",
//     "costForTwo": "₹250 for two",
//     "cuisines": [
//     "Chinese"
//     ],
//     "avgRating": 3.2,
//     "parentId": "61955",
//     "avgRatingString": "4.2",
//     "totalRatingsString": "500+",
//     "sla": {
//     "deliveryTime": 29,
//     "lastMileTravel": 2.4,
//     "serviceability": "SERVICEABLE",
//     "slaString": "25-30 mins",
//     "lastMileTravelString": "2.4 km",
//     "iconType": "ICON_TYPE_EMPTY"
//     }
//   }},
//   {
//   "info": {
//     "id": "594822",
//     "name": "China house",
//     "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
//     "locality": "Sector 34",
//     "areaName": "Sector 15",
//     "costForTwo": "₹250 for two",
//     "cuisines": [
//     "Chinese"
//     ],
//     "avgRating": 4.2,
//     "parentId": "61955",
//     "avgRatingString": "4.2",
//     "totalRatingsString": "500+",
//     "sla": {
//     "deliveryTime": 29,
//     "lastMileTravel": 2.4,
//     "serviceability": "SERVICEABLE",
//     "slaString": "25-30 mins",
//     "lastMileTravelString": "2.4 km",
//     "iconType": "ICON_TYPE_EMPTY"
//     }
//   }
  
// }  
  // ]);

  // const[restaurantsDetails, setrestaurantsDetails] = useState(reslist);

  //fetching data from external world
   const[restaurantsDetails, setrestaurantsDetails] = useState([]);
   const[filteredRestaurant,setfilteredRestaurant] = useState([]);
   const[searchtext ,setsearchtext] = useState("");

   const PromotedResturant= WithPromotedLabel(ResturentCard);
 
  //useeffect Hook

    useEffect(()=> {
    fetchData();
      } ,[]);

  const fetchData = async ()=>{
  const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6369411&lng=77.2056647&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();

  console.log(json);
  setrestaurantsDetails(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  // setrestaurantsDetails(json?>)
  }; 

  //conditional Rendering
  // if(restaurantsDetails.length === 0){
  //   return (<ShimmerUI/>)
  // };

  // setrestaurantsDetails(json?.)
  //normal js variable
  // let restaurantsDetails= [
  //    {
  //     "info": {
  //     "id": "594820",
  //     "name": "Chinese Wok",
  //     "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
  //     "locality": "Sector 34",
  //     "areaName": "Sector 15",
  //     "costForTwo": "₹250 for two",
  //     "cuisines": [
  //     "Chinese"
  //     ],
  //     "avgRating": 4.2,
  //     "parentId": "61955",
  //     "avgRatingString": "4.2",
  //     "totalRatingsString": "500+",
  //     "sla": {
  //     "deliveryTime": 29,
  //     "lastMileTravel": 2.4,
  //     "serviceability": "SERVICEABLE",
  //     "slaString": "25-30 mins",
  //     "lastMileTravelString": "2.4 km",
  //     "iconType": "ICON_TYPE_EMPTY"
  //     }
  //   },
  //   "info": {
  //     "id": "594821",
  //     "name": "Chinese noc",
  //     "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
  //     "locality": "Sector 34",
  //     "areaName": "Sector 15",
  //     "costForTwo": "₹250 for two",
  //     "cuisines": [
  //     "Chinese"
  //     ],
  //     "avgRating": 4.2,
  //     "parentId": "61955",
  //     "avgRatingString": "4.2",
  //     "totalRatingsString": "500+",
  //     "sla": {
  //     "deliveryTime": 29,
  //     "lastMileTravel": 2.4,
  //     "serviceability": "SERVICEABLE",
  //     "slaString": "25-30 mins",
  //     "lastMileTravelString": "2.4 km",
  //     "iconType": "ICON_TYPE_EMPTY"
  //     }
  //   },
  // },  
  // ];

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false) 
    return(
      <h1>
        Looks Like you are Offline.Please check your network connection.
        </h1>
    );
    
    const{setuserName,logginUser} = useContext(UserContext);
   
  

    return(restaurantsDetails.length === 0  ?(<ShimmerUI/>):
      ( <div className="body-container mt-18">
            <div className="filter-container">
            <input type="text" className="search-box" value={searchtext} 
            onChange={(e)=>{
              setsearchtext(e.target.value);
            }} />
            <button className="search" onClick={()=>
            {
              const filterRestaurant = restaurantsDetails.filter(
              (res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase())
            );
            console.log(filterRestaurant);
            setfilteredRestaurant(filterRestaurant);
            }}
            >Search</button>
            <button className="filter-btn" 
            onClick={() => {
               const topRatedRestaurant = restaurantsDetails.filter(
                (res)=>res.info.avgRating>4
                );
                setfilteredRestaurant(topRatedRestaurant);
                console.log(topRatedRestaurant);
            }}>Top Rated Resturant

            </button>

          
            <label htmlFor="">User Name: </label>
            <input className="border border-black p-2" value={logginUser} onChange={(e)=>setuserName(e.target.value)}/>
          
          </div>
         <div className="resturent-container flex flex-wrap justify-center m-[50px]">
             {filteredRestaurant.map((restaurant) =>(
               <Link key={restaurant.info.id}
               to={"/restaurant/"+restaurant.info.id}>
                {restaurant.info.promoted?<PromotedResturant resData ={restaurant}/> :<ResturentCard key={restaurant.info.id} resData ={restaurant}/> }
               {/* <ResturentCard key={restaurant.info.id} resData ={restaurant}/> */}
                </Link>
             ))}
             
             {/* <ResturentCard
             resData ={restaurantsDetails[0]}/>
             <ResturentCard
             resData ={restaurantsDetails[1]}/> */}
             
         </div>
       </div>
       
    )
   ) 
};
export default Body;