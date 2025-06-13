"use client";

const FULLWEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function FormattedDate({ isoString, format = "default" }) {
  if (!isoString) return null;

  const date = new Date(isoString);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const weekday = WEEKDAYS[date.getDay()];
  const fullweekday = FULLWEEKDAYS[date.getDay()];
  const monthName = MONTHS[date.getMonth()];
  const day = String(date.getDate());

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const shortAmpm = ampm.toLowerCase();
  hours = hours % 12 || 12;

  // -- Format variants --
  switch (format) {
    case "default":
      return <>{`${yyyy}-${mm}-${dd}`}</>;

    case "withTime":
      return <>{`${yyyy}-${mm}-${dd}, ${hours}:${minutes}${shortAmpm}`}</>;

    case "pretty":
      return <>{`${weekday}, ${day} ${monthName} at ${hours} ${ampm}`}</>;

    case "weekdaySlash":
      return <>{`${fullweekday}, ${dd}/${mm}/${yyyy}`}</>;

    default:
      return <>{isoString}</>;
  }
}
