export const formatValue = (value) => {
  return value !== undefined && value !== null && value !== ""
    ? value
    : "Unknown";
};

export const abbreviateLocation = (name) => {
  return name
    .replace(/[^a-zA-Z\s']/g, "") // Remove non-letter characters (except apostrophes and spaces)
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between camelCase words
    .split(/[\s']/) // Split on spaces and apostrophes
    .filter(Boolean) // Remove empty strings
    .map((word) => word[0].toUpperCase()) // Get first letter of each word, capitalized
    .join("");
};

export const splitCamelCase = (name) => {
  return name.replace(/([a-z])([A-Z])/g, "$1 $2");
};
