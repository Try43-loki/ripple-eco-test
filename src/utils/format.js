export const formatValue = (value) => {
  return value !== undefined && value !== null && value !== ""
    ? value
    : "Unknown";
};
