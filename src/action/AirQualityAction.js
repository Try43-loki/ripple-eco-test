"use server";

export async function getAirPollution(districtId) {
  const dataAirPollutionHourly = await getAirPollution(districtId, "HOURLY");
  const dataAirPollutionHDaily = await getAirPollution(districtId, "DAILY");
  return { dataAirPollutionHourly, dataAirPollutionHDaily };
}
