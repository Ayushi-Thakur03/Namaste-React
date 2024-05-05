import {RES_URL} from "../utils/constants"

const ResturentCard = (props)=>{
    const {resData} = props;
    const {cloudinaryImageId,name,avgRating,costForTwo,cuisines,} = resData?.info;
    const{slaString} = resData?.info.sla;
    
    return(
        <div className="resturent-card  m-[10px] w-[307px] h-[298px] mt-[23px] hover:cursor-pointer hover:mt-[23px] hover:mx-[10px] hover:mb-[10px] hover:bg-slate-300 hover:rounded-[57px] ">
          <div className="res-img">
             <img className="w-[289px] h-[175px] flex content-center m-auto rounded-[46px] hover:w-[269px] hover:h-[155px] hover:duration-1000 hover:ease-in-out" src={RES_URL+ cloudinaryImageId} alt="res-img" />
          </div>
          <h3 className="Res-Name mt-[7px] mb-[0px] ml-[25px] font-semibold text-xl">{name}</h3>
          
             <div className="resturant-details flex items-center ml-5 ml-25px">
             <svg className="rating-logo w-[15px] h-[30px] fill-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
             <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
              </svg>
              <h5 className="m-[10px]">{avgRating}</h5>
              <h5 className="m-[10px]">{slaString}</h5>
              <h5 className="m-[10px]">{costForTwo}</h5>
             </div>
             
            <div className="cusine-details ml-[25px] antialiased font-[Basis_Grotesque_Pro] text-[16px] text-gray-400  ">
             <p className="size-full break-words line-clamp-1">{cuisines.join(",")}</p>
             </div> 
        </div>
    )
 };


 export const WithPromotedLabel = (ResturentCard)=>{
       return(props)=>{
         return (
         <div>
              <label>Promoted</label>
              <ResturentCard {... props}/>
         </div>
       )}
 }
 export default ResturentCard;