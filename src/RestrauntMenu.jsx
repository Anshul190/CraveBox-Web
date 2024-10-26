import { useEffect, useState } from "react";
import { MENU_API } from "./assets/Constants";

function RestrauntMenu(resId) {

    const [resInfo, setresInfo] = useState(null);
    const {resId} = useParams();

    useEffect(()=>{
        fetchdata();
    },[]);

    const fetchdata = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setresInfo(json.data);

    }

    const {name, cuisines,costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return (
        <div className="RestrauntMenu">
            <h1> {name} </h1>
            <p> {cuisines.join(", ")} - {costForTwoMessage} </p>
            <ul>
                {itemCards.map((item) => (
                    <li key= {item.card.info.id}> {item.card.info.name} -- {"Rs. "}{item.card.info.price/100}</li>
                ))}
            </ul>
        </div>
    )
}

export default RestrauntMenu;