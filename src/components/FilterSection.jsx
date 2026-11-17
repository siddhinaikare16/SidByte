import { getData } from "../context/DataContext";

const FilterSection = ({category , setCategory , brand , setBrand , maxPrice , setMaxPrice , searchBox , setSearchBox}) => {
  const { data } = getData();

  const categoryList = [
    "All",
    ...new Set(
      data?.map((item) => {
        return item.category;
      }),
    ),
  ];

  const brandList = [
    "All",
    ...new Set(
      data?.map((item) => {
        return item.brand;
      }),
    ),
  ];

  return (
    <div className="bg-gray-100 p-4 h-max w-full md:w-54 rounded-md shrink-0">
      <input
        type="text"
        placeholder="Search.."
        id=""
        className="bg-white p-2 rounded-md border-2 border-gray-400 w-full"
        value={searchBox}
        onChange={(e)=>{
          setSearchBox(e.target.value)
        }}
      />

      <div className="flex flex-col gap-1 mt-3 accent-red-500 uppercase">
        <h1 className="font-semibold text-xl capitalize">Category</h1>
        {categoryList?.map((item) => {
          return (
            <div className="flex gap-2" key={item}>
              <input type="checkbox" checked={category === item} 
              onChange={()=>{
                setCategory(item)
              }}/>
              <label>{item}</label>
            </div>
          );
        })}

      </div>

      <div className="flex flex-col gap-1">
        <h1 className="mt-5 font-semibold text-xl ">Brand</h1>
        <select className="bg-white p-2 rounded-md border-2 border-gray-400 w-full"
        value={brand}
        onChange={(e)=>{
          setBrand(e.target.value)
        }}>
          {brandList?.map((item)=>{
            return(
              <option value={item} key={item}>{item}</option>
            )
          })}  
        </select>
      </div>

      <div className="flex flex-col gap-1 accent-red-500">
        <h1 className="mt-5 font-semibold text-xl">Price Range</h1>
        <p>Price Range: $0 - ${maxPrice}</p>
        <input type="range" min="0" max="5000" value={maxPrice}
        onChange={(e)=>{
          setMaxPrice(Number(e.target.value))
        }} />
      </div>

      <div>
        <button className="bg-red-500 text-white rounded-md px-3 py-1 mt-5 cursor-pointer"
        onClick={()=>{
          setBrand("All")
          setCategory("All")
          setMaxPrice(5000)
          setSearchBox('')
        }}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
