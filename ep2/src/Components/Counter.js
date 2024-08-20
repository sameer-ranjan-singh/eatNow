import { useDispatch } from "react-redux"
import { addItem, removeItem } from "../Store/Slice/cartSlice"

const Counter = ({item}) => {
    const dispatch = useDispatch()
    const increaseCount = ()=> {
        setItemCount(itemCount += 1)
    }
    const decreaseCount = ()=> {
        if(itemCount>0){
            setItemCount((itemCount)=> itemCount - 1)
        }

    }
    const handleAddItem =(item)=>{
        dispatch(addItem(item))
      }
    const handleRemoveItem =(item)=>{
        dispatch(removeItem(item))
      }
    return <>
        <div  className="w-full font-bold text-sm text-center bg-slate-200 rounded-lg mt-2 py-1 px-2 hover:bg-slate-300">
          <button onClick={handleAddItem(item)} className="font-bold text-sm text-center bg-slate-200 rounded-lg my-2 py-1 px-2 hover:bg-slate-300">-</button>
            {item.length === 0  ? "ADD" : item.length}
          <button onClick={handleRemoveItem(item)} className="font-bold text-sm text-center bg-slate-200 rounded-lg my-2 py-1 px-2 hover:bg-slate-300">+</button>
        </div>
    </>
}

export default Counter

