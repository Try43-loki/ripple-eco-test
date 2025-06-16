const listOfImageWeather = {
  sun: "Sun",
  rain: "Rain",
  cloud: "Cloud",
  cloudAndSun: "CloudWithSun",
  nightRain: "Night-Rain",
};

export const Weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const checkAqiInformation = (value) => {
  if (value <= 50)
    return {
      title: "Green",
      bg: "bg-air-lighter-green",
      bgStrong: "bg-air-green",
      text: "text-air-green",
      label: "#048D4C",
      bgRaw: "#CDE8DB",
    };
  if (value <= 100)
    return {
      title: "Yellow",
      bg: "bg-air-lighter-yellow",
      bgStrong: "bg-air-yellow",
      text: "text-air-yellow",
      label: "#f9c300",
      bgRaw: "#FAF0CC",
    };
  if (value <= 150)
    return {
      title: "Orange",
      bg: "bg-air-lighter-orange",
      bgStrong: "bg-air-orange",
      text: "text-air-orange",
      label: "#FF6D10",
      bgRaw: "#FFE2CF",
    };
  if (value >= 150)
    return {
      title: "Red",
      bg: "bg-air-lighter-red",
      bgStrong: "bg-air-red",
      text: "text-air-red",
      label: "#FB0530",
      bgRaw: "#FECDD6",
    };
};

export const checkLevelAQI = (value) => {
  if (value <= 50) return "Good";
  if (value <= 100) return "Moderate";
  if (value <= 150) return "Unhealthy for sensitive groups";
  if (value >= 150) return "Unhealthy";
};

export const IconLabel = ({ icon: Icon, label, color }) => {
  return (
    <span className="flex items-center gap-1.5 text-[#636A74] text-lg">
      <Icon color={color} fill={color} />
      <p>{label}</p>
    </span>
  );
};

export const getCurrentTime = (rawDate) => {
  const inputDate = new Date(rawDate);
  const now = new Date();
  const isSameHour = inputDate.getHours() === now.getHours() - 7;
  const isSameDay =
    inputDate.getDate() === now.getDate() &&
    inputDate.getMonth() === now.getMonth() &&
    inputDate.getFullYear() === now.getFullYear();
  return isSameHour && isSameDay;
};

export const formatTime = (time) => {
  const original = new Date(time);
  const updatedTime = new Date(original.getTime() + 7 * 60 * 60 * 1000); // Add 7 hours for Cambodia Time zone

  const hours = updatedTime.getHours();
  const minutes = updatedTime.getMinutes().toString().padStart(2, "0");

  const timeString = `${hours}:${minutes}`;
  return timeString;
};

export const checkIcon = (icon) => {
  if (icon === "scattered-clouds") return listOfImageWeather.cloud;
  if (icon === "rain") return listOfImageWeather.rain;
  if (icon === "night-rain") return listOfImageWeather.nightRain;
};
