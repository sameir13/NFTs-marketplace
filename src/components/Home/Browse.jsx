import React from "react";
import HeaderText from "./HeaderText";

const Browse = () => {
  const categoryData = [
    {
      img: "./categories/img-one.png",
      icon: "./categories/PaintBrush.png",
      name: "",
    },

    {
      img: "./categories/img-two.png",
      icon: "./categories/Swatches.png",
      name: "",
    },
    {
      img: "./categories/img-three.png",
      icon: "./categories/MusicNotes.png",
      name: "",
    },
    {
      img: "./categories/img-four.png",
      icon: "./categories/Camera.png",
      name: "",
    },
    {
      img: "./categories/img-five.png",
      icon: "./categories/VideoCamera.png",
      name: "",
    },

    {
      img: "./categories/img-six.png",
      icon: "./categories/MagicWand.png",
      name: "",
    },
    {
      img: "./categories/img-seven.png",
      icon: "./categories/BasketBall.png",
      name: "",
    },
    {
      img: "./categories/img-eight.png",
      icon: "./categories/Planet.png",
      name: "",
    },
  ];

  return (
    <div className=" stanWidth">
      <HeaderText heading={"Browse Categories"} />

      <div className=" grid  grid-cols-1  md:grid-cols-2  lg:grid-cols-4  gap-9">
        {categoryData.map((v, i) => (
          <div
            className="  rounded-3xl  overflow-hidden  hover:scale-95 transition-all duration-300 cursor-pointer"
            key={i}
          >
            <div className=" relative">
              <img src={v.img} className=" w-full" alt="" />
              <div className=" absolute inset-0 flex items-center justify-center backdrop-blur-xl ">
                <img src={v.icon} alt="" />
              </div>
            </div>

            <div className=" py-6 px-5 bg-[#3b3b3b] ">
              <h6 className="text-white mb-2 text-xl font-semibold">
                Space Walking
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
