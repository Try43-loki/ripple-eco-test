export const getSeverityColor = (severity) => {
  switch (severity) {
    case "Red":
      return { bg: "bg-red", text: "High" };
    case "Orange":
      return { bg: "bg-orange", text: "Medium" };
    case "Green":
      return { bg: "bg-green", text: "Good" };
    default:
      return "bg-gray-500";
  }
};

export const getFullNameDisaster = (type) => {
  switch (type) {
    case "FL":
      return "Floods";
    case "WF":
      return "Wildfires";
    case "EQ":
      return "Earthquakes";
    case "TC":
      return "Typhoons";
    default:
      return null;
  }
};
