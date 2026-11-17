import { MapPin } from "lucide-react"
import { FaCaretDown } from "react-icons/fa"
import { IoCartOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { Show, SignInButton, UserButton } from '@clerk/react'

import { CgClose } from "react-icons/cg"
import { useCart } from "../context/CartContext"


const Navbar = ({location , getLocation , openDropDown , setOpenDropDown}) => {

  const {cartItem} = useCart()

  const toggleDropDown = ()=>{
    setOpenDropDown(!openDropDown)
  }

  const totalItems = cartItem.reduce((sum,item)=>sum + item.quantity , 0)

  return (
    <div className="bg-white shadow-2xl py-3 px-4">

      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto md:p-0 px-4">
        
        {/* logosection */}
        <div className="flex items-center gap-7 relative mt-2">
          <Link to={'/'}><h1 className="font-bold md:text-3xl text-2xl"><span className="text-red-500">S</span>id<span className="text-red-500">B</span>yte</h1></Link>
          
          <div className="flex items-center gap-1 cursor-pointer text-gray-700 text-sm">
              <MapPin className="text-red-500 text-sm"/>
              <span className="font-semibold">{location? <div className="-space-y-1"> 
                <p>{location.county}</p>
                <p>{location.state}</p>
                
              </div> : "Add Address"}</span>
              <FaCaretDown onClick={toggleDropDown}/>
          </div>
          {
            openDropDown ? <div className="w-[240px] h-max shadow-2xl z-50 bg-white absolute border-2 p-5 border-gray-100 rounded-md">

              <h1 className="font-semibold text-xl flex items-baseline-last justify-between "> change location <span className="self-center"> <CgClose onClick={toggleDropDown}/></span></h1>
              <button className="bg-red-500 px-3 py-1 rounded-md mt-1 text-white" onClick={getLocation} > detect my location </button>
            </div> : null
          }
        </div>

        {/* menu section */}
        <nav className="flex items-center gap-4 md:gap-7">
          <ul className="flex font-semibold items-center gap-2 md:gap-7 text-base md:text-xl ">
            <NavLink to={'/'} className={({isActive})=> `${isActive ? "border-b-3 border-red-500 transition-all" : "border-none"} cursor-pointer`}><li>Home</li></NavLink>
            <NavLink to={'/product'} className={({isActive})=> `${isActive ? "border-b-3 border-red-500 transition-all" : "border-none"} cursor-pointer`}><li>Product</li></NavLink>
            <NavLink to={'about'} className={({isActive})=> `${isActive ? "border-b-3 border-red-500 transition-all" : "border-none"} cursor-pointer`}><li>About</li></NavLink>
            <NavLink to={'contact'} className={({isActive})=> `${isActive ? "border-b-3 border-red-500 transition-all" : "border-none"} cursor-pointer`}><li>Contact</li></NavLink>
          </ul>

          <Link to={'cart'} className="relative">
          <IoCartOutline className="h-7 w-7"/>
          <span className="absolute -top-3 -right-3 bg-red-500 rounded-full px-2 text-white">{totalItems}</span>
          </Link>

          <div className="whitespace-nowrap">
          <Show when="signed-out">
            <SignInButton className="bg-red-500 text-white px-2 md:px-3 py-2 rounded-md cursor-pointer"/>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
          </div>

        </nav>
      
      </div>
    </div>
  )
}

export default Navbar
