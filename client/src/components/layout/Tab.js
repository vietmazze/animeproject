import React from "react";

const Tab = ({ label, onClick, activeTab }) => {
  const onClickName = () => {
    onClick(label);
  };

  let className =
    "btn inline-block py-2 pr-2  hover:text-blue-800 font-semibold w-full";

  if (activeTab === label) {
    className += " text-blue-500";
  }

  return (
    <li className="-mb-px mr-1" onClick={onClickName}>
      <button className={className}>{label} </button>
    </li>
  );
};

export default Tab;
