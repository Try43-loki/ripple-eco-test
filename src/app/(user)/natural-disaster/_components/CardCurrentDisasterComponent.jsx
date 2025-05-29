import React from "react";

const CardCurrentDisasterComponent = (props) => {
  const { type, active, icon: DisasterIcon } = props.informDisaster;
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col items-end gap-1 pl-9 pr-5 py-5 bg-white min-w-32 rounded-xl">
        {DisasterIcon && <DisasterIcon size={20} color="#048D4C" />}
        <span className="text-dark-gray">{type}</span>
        <div className="text-dark-gray flex items-center justify-end gap-1.5">
          <strong className="text-2xl font-semibold">{active}</strong>
          <span className="text-xl font-medium">Active</span>
        </div>
      </div>
    </div>
  );
};

export default CardCurrentDisasterComponent;
