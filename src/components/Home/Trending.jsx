import React from "react";
import { TrendingArr } from "@/src/constant";
import HeaderText from "./HeaderText";

const Trending = () => {
  return (
    <div className=" stanWidth border">
      <HeaderText
        heading={"Trending Collection"}
        detail={"Checkout our weekly updated trending collection."}
      />

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
        {TrendingArr?.map((v, i) => (
          <div key={i}>
            <div className=" rounded-3xl overflow-hidden mb-4 hover:scale-95 transition-all duration-300 cursor-pointer">
              <img className=" w-full object-cover " src={v.img} alt="" />
            </div>

            <div className="grid grid-cols-3 gap-5">
              {v.belowImg.map((value, i) => (
                <>
                  <div
                    key={i}
                    className={`rounded-3xl overflow-hidden hover:scale-95 transition-all duration-300 cursor-pointer  ${
                      i === 2
                        ? "bg-[#a259ff] flex items-center justify-center hover:scale-95 transition-all duration-300 cursor-pointer "
                        : ""
                    }`}
                  >
                    {i === 2 ? (
                      <span className=" text-white text-lg  space-mono">
                        {value.count + "+"}{" "}
                      </span>
                    ) : (
                      <img
                        className=" w-full object-cover "
                        src={value.imgScr}
                        alt=""
                      />
                    )}
                  </div>
                </>
              ))}
            </div>
            <div className=" py-6 ">
              <h6 className="text-white mb-2 text-lg font-semibold">
                {v.name}
              </h6>
              <div className="flex items-center gap-3">
                <img src="./Images/avatar.png" alt="" />
                <span className=" text-white text-sm">{v.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
