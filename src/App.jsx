import { BrowserRouter , Route , Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import Navbar from "./components/Navbar"
import { useEffect, useState } from "react"
import CategoryProduct from "./pages/CategoryProduct"
import SingleProduct from "./pages/SingleProduct"
import Footer from "./components/Footer"

const App = () => {

  const [location , setLocation] = useState('')
    const[openDropDown , setOpenDropDown] = useState(false)

  const getLocation = async ()=> {
    navigator.geolocation.getCurrentPosition( async pos => {
      const {latitude , longitude} = pos.coords
      
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`

      try {
        const response = await fetch(url)
        const locationData = await response.json()
        const exactLocation = locationData.address
        setLocation(exactLocation)

        setOpenDropDown(!openDropDown)
        
      } catch (error) {
        console.log(error);
        
      }
    })
  }

  useEffect(()=>{
    getLocation()
  },[])
  return (
    <BrowserRouter>
    <Navbar location={location} getLocation={getLocation} openDropDown={openDropDown} setOpenDropDown={setOpenDropDown}/>
      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/about" element={<About/>}>About</Route>
        <Route path="/cart" element={<Cart/>}>Cart</Route>
        <Route path="/contact" element={<Contact/>}>Contact</Route>
        <Route path="/product" element={<Product/>}>Product</Route>
        <Route path="/category/:category" element={<CategoryProduct/>}></Route>
        <Route path="/product/:id" element={<SingleProduct/>}></Route>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
