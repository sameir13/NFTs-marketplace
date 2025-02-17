import React from "react";

const HeaderText = ({heading, detail}) => {
  return (
    <div>
      <h3 className="font-bold text-4xl">{heading}</h3>
      <p className="text-white text-lg mb-10">
        {detail}
      </p>
    </div>
  );
};

export default HeaderText;
