const abbreviateLocation = (name) => {
  return name
    .replace(/[^a-zA-Z\s']/g, "")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(/[\s']/)
    .filter(Boolean)
    .map((word) => word[0].toUpperCase())
    .join("");
};

const splitCamelCase = (name) => {
  return name.replace(/([a-z])([A-Z])/g, "$1 $2");
};

export { splitCamelCase, abbreviateLocation };
