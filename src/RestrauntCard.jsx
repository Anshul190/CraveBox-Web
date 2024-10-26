import { CDN_URL } from "./assets/Constants";
function RestrauntCard (props){
    const {resData} = props;
    const {costForTwo,name,cuisines,avgRating} = resData?.info;
        return(
        <div className="res-card, m-4 p-4 w-[215px] rounded-xl text-lg shadow-md hover:bg-gray-300 bg-gray-50">
            <img className="res-img, rounded-xl" src= {CDN_URL + resData.info.cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

export default RestrauntCard;