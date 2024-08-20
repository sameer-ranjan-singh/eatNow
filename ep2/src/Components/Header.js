import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/hooks/useOnlineStatus"
import { useContext } from "react"
import { UserContext } from "../utils/UserContext"
import { useSelector } from "react-redux"

const Header =()=> {
    const onlineStatus =  useOnlineStatus()
    const {myName} = useContext(UserContext)

    const cartItem = useSelector((store)=> store.cart.items)
 console.log(cartItem)

    return (
        <div className="fixed w-10/12  my-4 flex justify-between bg-slate-300 bg-opacity-40 rounded-full  shadow-2xl">
            <div className="w-10 flex justify-center items-center ml-4">
                <img className="rounded-full" alt="L-O-G-O" src="data:image/png;base64,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"/>
            </div>
            <div className="flex justify-end items-center">
                <ul className="flex justify-center items-center p-2 m-2 text-lg">
                    <li  className="hidden md:inline-block p-2 text-base font-bold ">
                        {onlineStatus ?"🟢":"🔴" }
                    </li>
                    <li>
                       <Link to="/browse" className="p-2 text-base font-semibold focus:text-orange-600">Home</Link>    
                    </li>
                    <li>
                      <Link to="/about" className="p-2 text-base font-semibold">About</Link>    
                    </li>
                    <li>
                      <Link
                       to="/cart" className="p-2 text-base font-semibold">
                        Cart({cartItem.length})
                      </Link>    
                    </li>
                    <li>
                      <Link to="/" className="p-2 text-base font-extrabold font-sans capitalize">{myName}</Link>    
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}
export default Header