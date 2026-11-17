import { useNavigate, useParams } from "react-router-dom";
import { getData } from "../context/DataContext";
import { useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { useCart } from "../context/CartContext";

const CategoryProduct = () => {
    const {data,fetchAllProducts}= getData()
    const {addToCart} = useCart()
    useEffect(()=>{
        fetchAllProducts()
    },[])

    let params = useParams();

    const navigate = useNavigate()

    if (!data?.length) {
        return <p>Loading...</p>
    }

    const category = data?.filter((item)=>{
        return item.category == params.category
    })

    // console.log(category);

    
    
  return (
    <div className="max-w-6xl mx-auto px-4 space-y-4 mt-8 mb-4">   
    <button className="bg-black text-white px-2 py-1 rounded-md flex gap-2"
            onClick={()=>{navigate(`/`)}}>
        <span><ChevronLeft /></span>
        <span>Back</span>
        </button>
    {category ? category.map((item)=>{ 
        return(
            <div key={item.id} className="flex gap-4 items-center bg-gray-100 rounded-md p-2 ">
                <img src={item.images[0]} alt="" className="w-50 h-50 bg-white cursor-pointer"
                 onClick={()=>{navigate(`/product/${item.id}`)}}/>
                <div className="space-y-3">
                    <h1 className="font-bold text-lg hover:text-red-500 cursor-pointer" 
                    onClick={()=>{navigate(`/product/${item.id}`)}}>{item.title},{item.description}</h1>
                    <p className="text-2xl font-bold items-center flex"><span className="text-sm font-normal">$</span>{item.price} <span className="text-sm font-normal"> ({item.discountPercentage}% off)</span></p>
                    <button className="bg-red-500 px-2 py-1 rounded-md text-white"
                    onClick={()=>{
                        addToCart(item)
                    }}>Add to cart</button>
                </div>
            </div> 
        )
    }):(<p>Loading..</p>)}
    </div>
  )
}

export default CategoryProduct
