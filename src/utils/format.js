export const getProvinceFromComponents = (components) => {
  const provinceComp = components.find((comp) =>
    comp.types.includes("administrative_area_level_1")
  );
  return provinceComp?.long_name || "Unknown Province";
};

export const abbreviateLocation = (name) => {
  return name
    .replace(/[^a-zA-Z\s']/g, "")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(/[\s']/)
    .filter(Boolean)
    .map((word) => word[0].toUpperCase())
    .join("");
};

export const splitCamelCase = (name) => {
  return name.replace(/([a-z])([A-Z])/g, "$1 $2");
};
