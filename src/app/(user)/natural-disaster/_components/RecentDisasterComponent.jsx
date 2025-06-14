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
import clsx from "clsx";
import { MapPin, Waves, X, Droplet, Flame, Wind } from "lucide-react";
import React, { useEffect, useState } from "react";

const disasters = [
  {
    id: "1",
    type: "Earthquakes",
    description:
      "A moderate 5.2 magnitude earthquake shook the northern region...",
    location: "Preah Vihear, Cambodia",
    date: "March 12, 2025",
    severity: "Medium",
  },
  {
    id: "2",
    type: "Flood",
    description:
      "Heavy rains caused flooding in low-lying areas of Phnom Penh...",
    location: "Phnom Penh, Cambodia",
    date: "April 8, 2025",
    severity: "High",
  },
  {
    id: "3",
    type: "Typhoons",
    description:
      "Strong typhoon winds caused damage along the coastal provinces...",
    location: "Kampot, Cambodia",
    date: "May 15, 2025",
    severity: "Medium",
  },
  {
    id: "4",
    type: "Wildfires",
    description: "Forest fires spread rapidly in the Cardamom Mountains...",
    location: "Koh Kong, Cambodia",
    date: "February 20, 2025",
    severity: "High",
  },
  {
    id: "5",
    type: "Flood",
    description: "Flash floods affected rural villages near Tonle Sap lake...",
    location: "Siem Reap, Cambodia",
    date: "June 3, 2025",
    severity: "Low",
  },
  {
    id: "6",
    type: "Earthquakes",
    description:
      "A minor tremor was recorded near the Cambodian-Laos border...",
    location: "Ratanakiri, Cambodia",
    date: "January 28, 2025",
    severity: "Low",
  },
  {
    id: "7",
    type: "Typhoons",
    description:
      "Typhoon caused heavy rains and flooding along the Mekong River...",
    location: "Kampong Cham, Cambodia",
    date: "April 25, 2025",
    severity: "High",
  },
  {
    id: "8",
    type: "Wildfires",
    description:
      "Dry season fires destroyed several hectares of protected forest...",
    location: "Mondulkiri, Cambodia",
    date: "March 9, 2025",
    severity: "Medium",
  },
  {
    id: "9",
    type: "Flood",
    description:
      "Seasonal floods displaced hundreds in the southern provinces...",
    location: "Takeo, Cambodia",
    date: "May 5, 2025",
    severity: "Medium",
  },
  {
    id: "10",
    type: "Earthquakes",
    description:
      "Seismic activity detected near the Cardamom Mountains region...",
    location: "Pursat, Cambodia",
    date: "February 14, 2025",
    severity: "Low",
  },
];

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

function getSeverityColor(severity) {
  switch (severity) {
    case "Red":
      return "bg-red-600 hover:bg-red-700";
    case "Orange":
      return "bg-orange-500 hover:bg-orange-600";
    case "Green":
      return "bg-green-600 hover:bg-green-700";
    default:
      return "bg-gray-500";
  }
}

const getFullNameDisaster = (type) => {
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
      className={clsx(" flex gap-8 w-full text-light-gray lg:flex-col", {
        "lg:px-[180px] px-6 ": !isDashboard,
      })}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-dark-gray font-semibold">
            Recent Disaster
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-600">Type</TableHead>
                  <TableHead className="text-gray-600">Description</TableHead>
                  <TableHead className="text-gray-600">Location</TableHead>
                  <TableHead className="text-gray-600">Date</TableHead>
                  <TableHead className="text-gray-600">Severity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {processedDisasters.map((disaster) => (
                  <TableRow
                    key={disaster.id}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => setSelectedDisaster(disaster)}
                  >
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getIconByType(disaster?.eventType)}
                        <span className="text-gray-700">
                          {getFullNameDisaster(disaster?.eventType)}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-gray-700 w-[250px] line-clamp-1 truncate">
                        {disaster?.description}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-700">
                          {disaster?.location}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-gray-700">
                        {disaster?.fromDate}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div
                        className={clsx(
                          "text-white border-0 font-medium px-3 py-1 text-center rounded-lg",
                          getSeverityColor(disaster?.alertLevel)
                        )}
                      >
                        {disaster?.alertLevel}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

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
            <h2 className="text-2xl font-semibold mb-4">
              {selectedDisaster.type}
            </h2>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium text-gray-700">Description:</span>{" "}
                {selectedDisaster.description}
              </p>
              <p>
                <span className="font-medium text-gray-700">Location:</span>{" "}
                {selectedDisaster.location}
              </p>
              <p>
                <span className="font-medium text-gray-700">Date:</span>{" "}
                {selectedDisaster.date}
              </p>
              <p>
                <span className="font-medium text-gray-700">Severity:</span>{" "}
                {selectedDisaster.severity}
              </p>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default RecentDisasterComponent;
