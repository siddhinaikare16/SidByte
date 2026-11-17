import { useNavigate, useParams } from "react-router-dom";
import { getData } from "../context/DataContext";
import { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderModule from "react-slick";
import { IoCartOutline } from "react-icons/io5";
import { ChevronLeft } from "lucide-react";
import { useCart } from "../context/CartContext";

const Slider = SliderModule.default || SliderModule;

const SingleProduct = () => {
  const { addToCart } = useCart();

  const { data, fetchAllProducts } = getData();

  const [quantityNo, setQuantityNo] = useState(1);
  useEffect(() => {
    fetchAllProducts();
  }, []);
  let params = useParams();
  const navigate = useNavigate();

  if (!data?.length) {
    return <p>Loadingg..</p>;
  }

  const productData = data?.find((value) => {
    return value.id == params.id;
  });

  if (!productData) {
    return <p className="min-h-[60vh]">Product nottt found 😔</p>;
  }

  // console.log(productData);

  const originalPrice = Math.round(
    productData?.price / (1 - productData?.discountPercentage / 100),
  );

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // console.log(quantityNo);

  return (
    <div className="max-w-6xl mx-auto px-4 space-y-4 mt-8 mb-4">
      <button
        className="bg-black text-white px-2 py-1 rounded-md flex gap-2"
          onClick={() => {
          navigate(-1);
        }}
      >
        <span>
          <ChevronLeft />
        </span>
        <span>Back</span>
      </button>
      <div className="max-w-full items-center grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 p-4 md:p-6">
        <Slider {...settings}>
          {productData?.images?.map((img) => {
            return (
              <div key={img}>
                <img src={img} alt="" className="w-full object-contain" />
              </div>
            );
          })}
        </Slider>
        <div className="flex flex-col gap-2 md:gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {productData?.title}
          </h1>
          <p className="text-gray-700 uppercase">
            {productData?.brand}/ {productData?.category}
          </p>
          <p className=" text-base md:text-lg font-bold text-red-500 flex items-center gap-3">
            ${productData?.price}
            <span className="line-through text-gray-700">${originalPrice}</span>
            <span className="bg-red-500 text-white px-4 py-2 rounded-md">
              {productData?.discountPercentage}% discount
            </span>
          </p>
          <p className="text-gray-600">{productData?.description}</p>
          <div className="flex items-center gap-4">
            <label className="text-md font-medium text-gray-700">
              Quantity:
            </label>
            <input
              type="number"
              min={1}
              value={quantityNo}
              onChange={(e) => setQuantityNo(Number(e.target.value))}
              className="w-20 border border-gray-300 rounded-lg px-3 py-1"
            />
          </div>

          <button
            className="px-4 py-2 text-lg bg-red-500 text-white rounded-md w-fit flex gap-2.5"
            onClick={() => {
              addToCart(productData, quantityNo);
            }}
          >
            <IoCartOutline className="w-6 h-6" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
