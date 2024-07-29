import { CDN_URL } from "../utils/constants"

const ItemList=({items})=>{
    // console.log(items)

    return <>
    <div>
     {
        items.map((item)=>{
           return  <>
           <div key={item.card.info.id} className="w-8/12 md:w-6/12 flex m-2 p-2 justify-center border-b-4 mx-auto border rounded-xl shadow-lg bg-orange-50 ">
                <div className="flex flex-col text-left w-10/12 mx-auto my-2 p-2 ">
                    <span className="font-semibold text-lg underline">{item.card.info.name}</span>
                    <span className="font-medium text-sm">Rs.{item.card.info.defaultprice ? item.card.info.price :item.card.info.price/100 }</span>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className=" w-2/12 flex flex-col justify-center items-center">
                  <img
                    className="rounded-lg " 
                    src={CDN_URL+ item.card.info.imageId} 
                    alt="Food logo not available"
                  />
                  <button className="font-bold text-sm text-center bg-slate-200 rounded-lg my-2 py-1 px-2 hover:bg-slate-300">+ ADD</button>
                </div>
           </div>
           </>
        })
     }
    </div>
    </>

}

export default ItemList 