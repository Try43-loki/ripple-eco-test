import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

function transformRequests(latestVolunteersRequest) {
  return latestVolunteersRequest?.map((req) => ({
    id: req.requestId,
    date: req.requestedTime.split(" ")[0].replaceAll("-", "/"),
    name: `${req.firstName} ${req.lastName}`,
    event: req.eventType,
    type: req.eventType,
    category: formatSnakeToTitleCase(req.categoryName),
    status: req.approved ? "Approved" : "Pending",
  }));
}

function formatSnakeToTitleCase(text) {
  // Make "TREE_PLANTING" → "Tree Planting"
  if (!text) return "Unknown";
  return text
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function ListVolunteerComponent({ latestVolunteersRequest }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Recent Request</h2>

      <div className="h-[180px] overflow-y-auto schrollba ">
        <Table className="min-w-full text-light-green">
          <TableHeader>
            <TableRow className="border-[#00000020] bg-white sticky top-0 z-10">
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
            {transformRequests(latestVolunteersRequest)?.map(
              (request, index) => (
                <TableRow key={request.id} className="border-[#00000020]">
                  <TableCell>{index + 1}</TableCell>
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
              )
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
