import { useEffect, useState } from "react";
import { getData } from "../context/DataContext";
import FilterSection from "../components/FilterSection";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext"

const Product = () => {
  const [category, setCategory] = useState("All");

  const [brand, setBrand] = useState("All");

  const [maxPrice, setMaxPrice] = useState(5000);

  const [searchBox, setSearchBox] = useState("");

  const [page, setPage] = useState(1);

  const { data, fetchAllProducts } = getData();

  const {cartItem, setCartItem , addToCart} = useCart()

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [category, brand, maxPrice, searchBox]);

  if (!data?.length) {
    return <p>Loading..</p>;
  }

  const filteredData = data.filter((item) => {
    return (
      (category === "All" || item.category == category) &&
      (brand === "All" || item.brand == brand) &&
      item.price <= maxPrice &&
      item.title.toLowerCase().includes(searchBox.toLowerCase())
    );
  });

  const NoOfPages = Math.ceil(filteredData.length / 8);

 

  const numbers = [];

  for (let index = 1; index <= NoOfPages; index++) {
    numbers.push(index);
  }



  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-4 mt-10 gap-8">
      <div>
        <FilterSection
          category={category}
          setCategory={setCategory}
          brand={brand}
          setBrand={setBrand}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          searchBox={searchBox}
          setSearchBox={setSearchBox}
        />
      </div>
      {filteredData.length > 0 ? (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
            {filteredData?.slice((page - 1) * 8, page * 8)?.map((item) => {
              return <ProductCard key={item.id} product={item} />;
            })}
          </div>
          <div className="flex justify-center gap-2 mt-6 mb-2">
            {numbers.map((number) => (
              <button key={number} onClick={() => setPage(number)} className={`border px-3 py-1 rounded-md cursor-pointer ${number === page ? "bg-red-500 text-white" : "bg-gray-100"}`}>
                {number}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p>Product nottt found</p>
      )}
    </div>
  );
};

export default Product;
