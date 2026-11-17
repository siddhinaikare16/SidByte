import { useEffect } from "react";
import { getData } from "../context/DataContext";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderModule from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Category from "./Category";
import { useNavigate } from "react-router-dom";

const Slider = SliderModule.default || SliderModule;



const Carousel = () => {
  const { data, fetchAllProducts } = getData();
  const navigate = useNavigate()

  useEffect(() => {
    fetchAllProducts();
  }, []);

     const SamplePrevArrow = (props) => {
        const {className, style, onClick} = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}}>
                <AiOutlineArrowLeft className='arrows' style={{...style, display: "block", borderRadius:"50px", background:"#f53347" , color:"white" , position:"absolute", padding:"2px", left:"50px"}} />
            </div>
        )
    }
    const SampleNextArrow = (props) => {
        const {className, style, onClick} = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`}>
                <AiOutlineArrowRight className='arrows' style={{...style, display: "block", borderRadius:"50px", background:"#f53347" , color:"white" , position:"absolute", padding:"2px", right:"50px"}} />
            </div>
        )
    }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
    pauseOnHover : false
  };

  return (
    <div className="overflow-x-hidden">
      <Slider {...settings}>
        {data?.slice(0, 7).map((item, index) => (
          <div
            key={index}
            className="bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10 "
          >
            <div className="flex flex-col md:flex-row gap-10 min-h-[650px] items-center justify-center p-4 ">
              <div className="space-y-3 md:space-y-6">
                <h3 className="text-red-500 font-semibold font-sans text-base md:text-lg">
                  Powering your world with the best in electronics
                </h3>
                <h1 className="text-3xl md:text-5xl uppercase font-bold text-white md:w-[500px]">
                  {item.title}
                </h1>
                <p className="md:w-[500px] text-gray-400 line-clamp-3 pr-7 text-base md:text-lg">
                  {item.description}
                </p>
                <button className="bg-linear-to-r from-red-500 to-fuchsia-800 text-white px-3 py-1 rounded-md cursor-pointer mt-2 text-base md:text-xl"
                onClick={()=>{
                  navigate(`/product/${item.id}`)
                }}>
                  Shop Now
                </button>
              </div>
              <div>
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-[600px] max-w-full object-contain drop-shadow-[0_0_20px_rgba(255,255,255,1)]"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Category/>
    </div>
  );
};

export default Carousel;
