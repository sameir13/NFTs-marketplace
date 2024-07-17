import React from 'react'

const Button1 = ({children, marginBottomSm, marginTopSm, marginBottomMd, marginTopMd}) => {
  return (
    <button className={`hidden md:flex w-full  justify-center  py-4 px-10 items-center gap-4 text-white  text-lg bg-[#a259ff] rounded-2xl md:w-fit ${marginBottomSm ? "mb-5" : marginTopSm ? "mt-5" : marginBottomMd ? "mb-7" : marginTopMd ? "mt-7" : null}`}>
   {children}
  </button>
  )
}

export default Button1
