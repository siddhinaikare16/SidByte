
import { createContext, useContext, useState } from "react"
import axios from "axios"
export const DataContext =createContext(null)

const categories = ["smartphones", "laptops", "tablets", "mobile-accessories"]

export const DataProvider= ({children}) => {
    const[data,setData] = useState()

    

    const fetchAllProducts = async () => {
        try {
            const result = await Promise.all(
            categories.map((c)=>
            axios.get(`https://dummyjson.com/products/category/${c}?limit=0`))
            )

        

            const allProducts = result.flatMap((res)=>{
                return res.data.products
            })
            setData(allProducts)
            
           
            
            
        } catch (error) {
            console.log(error);
            
        }
    }

    return <DataContext.Provider value={{data , setData , fetchAllProducts }}>
        {children}
    </DataContext.Provider>
}

export const getData = () => useContext(DataContext)


