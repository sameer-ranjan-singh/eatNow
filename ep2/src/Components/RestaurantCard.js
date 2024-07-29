import { CDN_URL } from "../utils/constants"

const RestaurantCard = ({resData})=> {
    const { name, avgRating, cuisines, cloudinaryImageId } = resData?.info;

    return (
        <div className="w-[260] max-h-[500] my-3 p-3 hover:bg-slate-100">
            <img className="w-[250] max-h-[300]" src={CDN_URL + cloudinaryImageId} alt="Restaurant Image"/>
            <h2 className="font-semibold">{name}</h2>
            <p className="font-thin">{avgRating}</p>
            <span className=" pr-3 font-serif">{cuisines.join(" , ")}</span>
        </div>
    )
}
// High Order Component
export const  withpromotedLabel = (RestaurantCard) => {
    return (props)=> {
        return <>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
        </>
    }
}

export default RestaurantCard