import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory = ({data, showItem, setShowIndex})=>{
    // const [showItem, setShowItem ] = useState(false)

    return <>
        <div 
          onClick={()=> setShowIndex()}
          className="w-[80vw] md:w-1/2 md:mx-auto my-3 shadow-lg px-4 py-2 rounded-lg bg-orange-200 text-start flex justify-between cursor-pointer"
        >
            <span className="font-extrabold">{data.title} ({data.itemCards.length})</span>
            <span  className="font-semibold md:font-extrabold cursor-pointer text-md md:text-xl active:rotate-45">+</span>
        </div>
        <div className="">
          {showItem  && <ItemList items= {data.itemCards} /> }
        </div>
            
    </>
}

export default RestaurantCategory