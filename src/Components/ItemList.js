import { useDispatch } from "react-redux"
import { CDN_URL } from "../utils/constants"
import { addItem } from "../Store/Slice/cartSlice"
import Counter from "./Counter"

const ItemList=({items})=>{
  const dispatch = useDispatch()  
  
  const handleAddItem =(item)=>{
      dispatch(addItem(item))
    }

    return <>
    <div>
     {
      items.map((item)=>{
        return  <>
         <div key={item.card.info.id} className=" w-10/12 flex m-2 p-2 justify-center mx-auto rounded-lg shadow-lg bg-yellow-200 ">
            <div className="w-8/12 md:w-10/12 flex flex-col text-left mx-auto my-2 p-2 ">
              <span className="font-bold text-sm md:text-lg">{item.card.info.name}</span>
              <span className="font-medium text-sm">Rs.{item.card.info.defaultprice ? item.card.info.price :item.card.info.price/100 }</span>
              <p className="text-xs font-sans">{item.card.info.description}</p>
            </div>
            <div className="w-4/12 md:w-2/12 flex flex-col justify-center items-center">
              <img
                className="rounded-lg shadow-lg" 
                src={CDN_URL+ item.card.info.imageId} 
                alt="Food logo not available"
              />
              <button
                onClick={()=> handleAddItem(item)}
                className="w-full font-bold text-sm text-center bg-yellow-400 rounded-lg mt-2 py-1 px-2 hover:bg-yellow-500">+ ADD
              </button>
              {/* <Counter item={item} /> */}
            </div>
          </div>
          </>
      })
     }
    </div>
    </>

}

export default ItemList 