import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory = ({data, showItem, setShowIndex})=>{
    // const [showItem, setShowItem ] = useState(false)

    return <>
        <div 
          onClick={()=> {
              setShowIndex()
          }
        }
          className="w-9/12 md:w-7/12 mx-auto my-3 shadow-lg px-4 py-2 rounded-lg bg-orange-200 text-start flex justify-between cursor-pointer"
        >
            <span className="font-extrabold">{data.title} ({data.itemCards.length})</span>
            <span  className="font-extrabold cursor-pointer text-xl active:rotate-45">+</span>
        </div>
        {showItem  && <ItemList items= {data.itemCards} /> }
            
    </>
}

export default RestaurantCategory