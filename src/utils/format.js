export const getProvinceFromComponents = (components) => {
  const provinceComp = components.find((comp) =>
    comp.types.includes("administrative_area_level_1")
  );
  return provinceComp?.long_name || "Unknown Province";
};
