import { useEffect } from "react";
import { getData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const { data, fetchAllProducts } = getData();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const category = [
    ...new Set(
      data?.map((item) => {
        return item.category;
      }),
    ),
  ];

  
    const navigate = useNavigate()
  return (
    <div className="bg-[#0f0c29]">
      <div className="flex justify-center items-center gap-10 py-9 px-4 flex-wrap">
        {category?.map((item) => {
          return (
            <button
              key={item}
              className="bg-linear-to-r from-red-500 to-fuchsia-800 text-white px-4 py-2 rounded-md m-2 uppercase cursor-pointer bg"
              onClick={() => {navigate(`/category/${item}`)}}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
