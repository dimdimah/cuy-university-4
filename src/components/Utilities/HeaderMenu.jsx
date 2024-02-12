import React from "react";

const HeaderMenu = ({ title }) => {
  return (
    <div>
      <div className="p-8">
        <h3 className="text-2xl text-center text-hue-primary">{title}</h3>
      </div>
    </div>
  );
};

export default HeaderMenu;
