import React from "react";

const CardCurrentDisasterComponent = (props) => {
  const disaster = {
    icon: <Image src="/asserts" />,
    type: "Earthquakes",
    active: 3,
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-end gap-1">
        <Image src={disaster.icon} />
        <span className="bg-amber-200">{disaster.type}</span>
      </div>
    </div>
  );
};

export default CardCurrentDisasterComponent;
