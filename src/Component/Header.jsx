import React from "react"
import { FaBars } from "react-icons/fa";

const Header =() => {
    return (
        <div className="flex justify-between fixed top-0 left-0 right-0 bg-amber-200 size-2/1"> 
            <div className="flex items-center justify-center px-3 py-1 gap-2">
                <img src="./logo.svg" alt="LOGo" />
                
            </div>
            
            <div className="flex gap-7 justify-between items-center rounded-3xl  bg-amber-100 mt-2 mb-2">
            <ul className="flex gap-7 justify-between items-center px-4">
                <div className="hover:bg-amber-50 rounded-2xl">
                <div className="px-4">
                <li className=""><a href="#">HOME</a></li>
                </div>
                </div>
                <div className="hover:bg-amber-50 rounded-2xl">
                <div className="px-4">
                <li className=""><a href="#">Know Why?</a></li>
                </div>
                </div>
                <div className="hover:bg-amber-50 rounded-2xl">
                <div className="px-4">
                <li className=""><a href="#">details</a></li>
                </div>
                </div>
                
            </ul>
            </div>
            
            <div className="flex items-center mr-4">
            <button className=" bg-black hover:bg-green-600 text-xs text-white px-2.5 py-1.5 rounded-3xl">Join Our Community</button>
            </div>
            
        </div>
    )
}
export default Header