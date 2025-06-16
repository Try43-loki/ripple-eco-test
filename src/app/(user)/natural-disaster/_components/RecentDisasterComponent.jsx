"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getDirectionProvinceByLatLng } from "@/service/naturalDisasterService";
import { getProvinceFromComponents } from "@/utils/format";
import { getFullNameDisaster, getSeverityColor } from "@/utils/naturalDisaster";
import clsx from "clsx";
import { MapPin, Waves, X, Droplet, Flame, Wind } from "lucide-react";
import React, { useEffect, useState } from "react";

// Map disaster types to icons
function getIconByType(type) {
  switch (type) {
    case "ER":
      return <Waves className="h-4 w-4 text-green" />;
    case "FL":
      return <Droplet className="h-4 w-4 text-green" />;
    case "TC":
      return <Wind className="h-4 w-4 text-green" />;
    case "WF":
      return <Flame className="h-4 w-4 text-green" />;
    default:
      return null;
  }
}

const RecentDisasterComponent = ({ isDashboard, naturalData }) => {
  const [selectedDisaster, setSelectedDisaster] = useState(null);
  const [processedDisasters, setProcessedDisasters] = useState([]);

  useEffect(() => {
    async function enrichDisasters() {
      const enriched = await Promise.all(
        naturalData.map(async (disaster) => {
          const coords = `${disaster.geometry.latitude},${disaster.geometry.longitude}`;
          const geoData = await getDirectionProvinceByLatLng(coords);

          let province = "Unknown";
          if (geoData?.status === "OK" && geoData.results[0]) {
            province = getProvinceFromComponents(
              geoData.results[0].address_components
            );
          }

          return {
            ...disaster,
            location: province,
          };
        })
      );
      setProcessedDisasters(enriched);
    }

    enrichDisasters();
  }, [naturalData]);

  return (
    <article
      className={clsx("flex gap-8 w-full text-light-gray lg:flex-col ", {
        "lg:px-[180px] px-6 ": !isDashboard,
      })}
    >
      {/* Table List */}
      {processedDisasters.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-dark-gray font-semibold">
              {processedDisasters.length || 0} Recently Disaster
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="w-full">
              <Table className="w-full table-fixed">
                <TableHeader className=" sticky top-0 z-10">
                  <TableRow>
                    <TableHead className="w-[60px] text-gray-600">
                      Type
                    </TableHead>
                    <TableHead className="w-[100px] text-gray-600">
                      Name
                    </TableHead>
                    <TableHead className="w-[40%] text-gray-600">
                      Description
                    </TableHead>
                    <TableHead className="w-[25%] text-gray-600">
                      Location
                    </TableHead>
                    <TableHead className="w-[150px] text-gray-600">
                      Date
                    </TableHead>
                    <TableHead className="w-[100px] text-gray-600">
                      Severity
                    </TableHead>
                  </TableRow>
                </TableHeader>
              </Table>

              <div className="max-h-[480px] overflow-y-auto">
                <Table className="w-full table-fixed">
                  <TableBody>
                    {processedDisasters.map((disaster, index) => (
                      <TableRow
                        key={index}
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => setSelectedDisaster(disaster)}
                      >
                        <TableCell className="w-[60px] whitespace-nowrap px-2 py-2">
                          <div className="flex items-center justify-start">
                            {getIconByType(disaster?.eventType)}
                          </div>
                        </TableCell>

                        <TableCell className="w-[100px] whitespace-nowrap px-2 py-2">
                          <span className="text-gray-700">
                            {getFullNameDisaster(disaster?.eventType)}
                          </span>
                        </TableCell>

                        <TableCell
                          className="w-[40%] px-2 py-2 truncate"
                          title={disaster?.description}
                        >
                          <span className="text-gray-700 block truncate">
                            {disaster?.description}
                          </span>
                        </TableCell>

                        <TableCell className="w-[25%] px-2 py-2 truncate">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-gray-500 shrink-0" />
                            <span className="text-gray-700 truncate block">
                              {disaster?.location}
                            </span>
                          </div>
                        </TableCell>

                        <TableCell className="w-[150px] whitespace-nowrap px-2 py-2">
                          <span className="text-gray-700">
                            {disaster?.fromDate}
                          </span>
                        </TableCell>

                        <TableCell className="w-[100px] whitespace-nowrap px-2 py-2">
                          <div
                            className={clsx(
                              "text-white text-sm font-medium px-3 py-1 text-center rounded-lg",
                              getSeverityColor(disaster?.alertLevel).bg
                            )}
                          >
                            {getSeverityColor(disaster?.alertLevel).text}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Modal Popup */}
      {selectedDisaster && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md p-6 text-gray-900">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
              onClick={() => setSelectedDisaster(null)}
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-green">
              {getFullNameDisaster(selectedDisaster?.eventType)}
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Description:</span>
                <span className="text-right">
                  {selectedDisaster.description}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Location:</span>
                <span>{selectedDisaster.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">
                  Affected Country:
                </span>
                <span>{selectedDisaster?.affectedCountry?.join(", ")}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">From Date:</span>
                <span>{selectedDisaster?.fromDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">To Date:</span>
                <span>{selectedDisaster?.toDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Severity:</span>
                <span
                  className={clsx(
                    "text-white border-0 font-medium px-3  text-center rounded-lg",
                    getSeverityColor(selectedDisaster?.alertLevel).bg
                  )}
                >
                  {getSeverityColor(selectedDisaster?.alertLevel).text}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default RecentDisasterComponent;
