import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const recentRequests = [
  {
    no: 1,
    date: "2025/02/15",
    name: "Kadin Levin",
    event: "Green Oasis going Miyawaki",
    type: "Hands-on",
    category: "Tree Planting",
    status: "Pending",
  },
  {
    no: 2,
    date: "2025/02/15",
    name: "Kadin Levin",
    event: "Green Oasis going Miyawaki",
    type: "Hands-on",
    category: "Tree Planting",
    status: "Pending",
  },
  {
    no: 3,
    date: "2025/02/15",
    name: "Kadin Levin",
    event: "Green Oasis going Miyawaki",
    type: "Hands-on",
    category: "Tree Planting",
    status: "Pending",
  },
];

export default function ListVolunteerComponent() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Recent Request</h2>
      <Table className="text-light-green  ">
        <TableHeader>
          <TableRow className="border-[#00000020] ">
            <TableHead>No</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentRequests.map((request, index) => (
            <TableRow key={index} className="border-[#00000020] space-y-2">
              <TableCell>{request.no}</TableCell>
              <TableCell>{request.date}</TableCell>
              <TableCell>{request.name}</TableCell>
              <TableCell>{request.event}</TableCell>
              <TableCell>{request.type}</TableCell>
              <TableCell>{request.category}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className="text-orange border-none p-0"
                >
                  ● Pending
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
