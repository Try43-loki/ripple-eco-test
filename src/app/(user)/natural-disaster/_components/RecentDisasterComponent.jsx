import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import clsx from "clsx";
import { MapPin, Waves } from "lucide-react";
import React from "react";

const disasters = [
  {
    id: "1",
    type: "Earthquakes",
    description: "A powerful 6.7 magnitude earthquake struck near the city...",
    location: "İzmir, Turkey",
    date: "May 18, 2025",
    severity: "High",
  },
  {
    id: "2",
    type: "Earthquakes",
    description: "A powerful 6.7 magnitude earthquake struck near the city...",
    location: "İzmir, Turkey",
    date: "May 18, 2025",
    severity: "Medium",
  },
  {
    id: "3",
    type: "Earthquakes",
    description: "A powerful 6.7 magnitude earthquake struck near the city...",
    location: "İzmir, Turkey",
    date: "May 18, 2025",
    severity: "High",
  },
  {
    id: "4",
    type: "Earthquakes",
    description: "A powerful 6.7 magnitude earthquake struck near the city...",
    location: "İzmir, Turkey",
    date: "May 18, 2025",
    severity: "Medium",
  },
  {
    id: "5",
    type: "Earthquakes",
    description: "A powerful 6.7 magnitude earthquake struck near the city...",
    location: "İzmir, Turkey",
    date: "May 18, 2025",
    severity: "Low",
  },
  {
    id: "6",
    type: "Earthquakes",
    description: "A powerful 6.7 magnitude earthquake struck near the city...",
    location: "İzmir, Turkey",
    date: "May 18, 2025",
    severity: "Low",
  },
  {
    id: "7",
    type: "Earthquakes",
    description: "A powerful 6.7 magnitude earthquake struck near the city...",
    location: "İzmir, Turkey",
    date: "May 18, 2025",
    severity: "Low",
  },
];

function getSeverityVariant(severity) {
  switch (severity) {
    case "High":
      return "destructive";
    case "Medium":
      return "default";
    case "Low":
      return "secondary";
    default:
      return "default";
  }
}

function getSeverityColor(severity) {
  switch (severity) {
    case "High":
      return "bg-red-500 hover:bg-red-600";
    case "Medium":
      return "bg-orange-500 hover:bg-orange-600";
    case "Low":
      return "bg-green-500 hover:bg-green-600";
    default:
      return "bg-gray-500";
  }
}

const RecentDisasterComponent = () => {
  return (
    <article className="px-6 lg:px-[150px] flex gap-8 text-white lg:flex-col  ">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl pl-6 text-dark-gray font-semibold">
            Recent Disaster
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-medium text-gray-600">
                    Type
                  </TableHead>
                  <TableHead className="font-medium text-gray-600">
                    Description
                  </TableHead>
                  <TableHead className="font-medium text-gray-600">
                    Location
                  </TableHead>
                  <TableHead className="font-medium text-gray-600">
                    Date
                  </TableHead>
                  <TableHead className="font-medium text-gray-600">
                    Severity
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {disasters.map((disaster) => (
                  <TableRow key={disaster.id} className="hover:bg-gray-50">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Waves className="h-4 w-4 text-teal-600" />
                        <span className="text-gray-700">{disaster.type}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-gray-700">
                        {disaster.description}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-700">
                          {disaster.location}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-gray-700">{disaster.date}</span>
                    </TableCell>
                    <TableCell>
                      <div
                        className={clsx(
                          "text-white border-0 font-medium px-3 py-1 text-center rounded-lg",
                          getSeverityColor(disaster.severity)
                        )}
                      >
                        {disaster.severity}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export default RecentDisasterComponent;
