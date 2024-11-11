import { useState, useEffect } from "react";
import RestrauntCard from "./RestrauntCard";
function Body(){

    const [ListofRestraunts, setListofRestraunts] = useState([]);
    const [filteredListofRestraunts, setfilteredListofRestraunts] = useState([]);
    const [SearchText, setSearchText] = useState("");

    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66590&lng=77.00440&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListofRestraunts(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredListofRestraunts(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    


    return(
        <div className="Body">
            <div className="Filters, flex">
                <div className="Search-component">
                    <input type="text" placeholder="Restraunt Name" className="Search-box, border-black border-solid bg-transparent m-4 px-4 py-2" value={SearchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}>
                    </input>
                    <button className="Search-btn, px-4 py-2 m-4 rounded-lg -blue-600 dark:bg-blue-700 text-white font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300" onClick={()=>{
                        const FilteredList = ListofRestraunts.filter(
                            (res)=>
                                res.info.name.toLowerCase().includes(SearchText.toLowerCase())
                        )
                        setfilteredListofRestraunts(FilteredList);
                    }}>Search</button>
            </div>
            <div className="Filter-btn">
                <button className="FilterRestraunts-btn, px-4 py-2 m-4 rounded-lg -blue-600 dark:bg-blue-700 text-white font-semibold hover:bg-blue-900 dark:hover:bg-blue-600 transition-all duration-300" onClick={()=>{
                    const filteredRestraunts = ListofRestraunts.filter(
                        (e) => e.info.avgRating > 4.3
                    );
                    setfilteredListofRestraunts(filteredRestraunts);
                }}>
                    Top-Rated Restraunts    
                </button>
            </div>
        </div>

        <div className="res-container, flex flex-wrap px-0.5">
            {filteredListofRestraunts.map((restaurant) => (
                <RestrauntCard resData={restaurant}/>
            ))};
        </div>
    </div>
    );
};

export default Body;