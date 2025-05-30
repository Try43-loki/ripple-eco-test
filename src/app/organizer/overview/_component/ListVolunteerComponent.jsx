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
    date: "2025/06/15",
    name: "Aisha Khan",
    event: "Community Recycling Drive Kickoff",
    type: "Hands-on",
    category: "Waste Management",
    status: "Pending",
  },
  {
    no: 2,
    date: "2025/07/22",
    name: "Ben Carter",
    event: "Workshop on Urban Composting",
    type: "Seminar",
    category: "Sustainable Living",
    status: "Pending",
  },
  {
    no: 3,
    date: "2025/04/10",
    name: "Maria Garcia",
    event: "Riverbank Cleanup Initiative - Phase 1",
    type: "Hands-on",
    category: "River Cleanup",
    status: "Pending",
  },
  {
    no: 4,
    date: "2025/08/05",
    name: "David Lee",
    event: "Seminar: Renewable Energy Solutions for Homes",
    type: "Seminar",
    category: "Renewable Energy",
    status: "Pending",
  },
  {
    no: 5,
    date: "2025/09/14",
    name: "Olivia Green",
    event: "Schoolyard Biodiversity Project",
    type: "Hands-on",
    category: "Biodiversity Protection",
    status: "Pending",
  },
  {
    no: 6,
    date: "2025/10/30",
    name: "Samuel Wright",
    event: "Climate Action Town Hall Meeting",
    type: "Seminar",
    category: "Climate Change Adaptation",
    status: "Pending",
  },
  {
    no: 7,
    date: "2026/01/20",
    name: "Chloe Dubois",
    event: "Water Conservation Awareness Campaign Launch",
    type: "Hands-on",
    category: "Water Conservation",
    status: "Pending",
  },
  {
    no: 8,
    date: "2025/11/11",
    name: "Ethan Miller",
    event: "Sustainable Agriculture Expo",
    type: "Seminar",
    category: "Sustainable Living",
    status: "Pending",
  },
  {
    no: 9,
    date: "2025/03/25",
    name: "Sophia Chen",
    event: "Forest Restoration Volunteer Day",
    type: "Hands-on",
    category: "Tree Planting",
    status: "Pending",
  },
  {
    no: 10,
    date: "2025/12/01",
    name: "James Wilson",
    event: "Webinar: The Future of Green Tech",
    type: "Seminar",
    category: "Environmental Education",
    status: "Pending",
  },
];

export default function ListVolunteerComponent() {
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
            {recentRequests.map((request, index) => (
              <TableRow key={index} className="border-[#00000020]">
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
    </div>
  );
}
