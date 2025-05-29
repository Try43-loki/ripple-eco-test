import { MoreVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VolunteerComponent() {
  const users = [
    {
      id: 1,
      profile: "/assets/profileVolunteer.png",
      username: "Zain",
      gender: "Female",
      age: "24",
      dateOfBirth: "01 - 01 - 2000",
      address: "Khan Toul Kork, Phnom Penh",
      phoneNumber: "012-345-678",
    },
    {
      id: 2,
      profile: "/assets/profileVolunteer.png",
      username: "Zain",
      gender: "Male",
      age: "24",
      dateOfBirth: "01 - 01 - 2000",
      address: "Khan Toul Kork, Phnom Penh",
      phoneNumber: "012-345-678",
    },
    {
      id: 3,
      profile: "/assets/profileVolunteer.png",
      username: "Zain",
      gender: "Male",
      age: "24",
      dateOfBirth: "01 - 01 - 2000",
      address: "Khan Toul Kork, Phnom Penh",
      phoneNumber: "012-345-678",
    },
    {
      id: 4,
      profile: "/assets/profileVolunteer.png",
      username: "Zain",
      gender: "Male",
      age: "24",
      dateOfBirth: "01 - 01 - 2000",
      address: "Khan Toul Kork, Phnom Penh",
      phoneNumber: "012-345-678",
    },
  ];

  return (
    <div className="w-full md:bg-white rounded-2xl md:p-4">
      {/* Mobile & Small Tablet View */}
      <div className="block md:hidden space-y-4">
        {users.map((user, index) => (
          <div
            key={user.id}
            className="bg-white rounded-xl p-4 shadow-sm border border-light-white"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center flex-wrap gap-3">
                <span className="text-xs font-semibold text-lighter-green">
                  #{index + 1}
                </span>
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={user.profile}
                    alt={user.username}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-semibold text-sm text-teal-600">
                  {user.username}
                </span>
              </div>
              <button className="p-1">
                <MoreVertical className="w-4 h-4 text-lighter-green" />
              </button>
            </div>

            {/* Info Rows */}
            <div className="space-y-1 text-sm text-lighter-green">
              {[
                { label: "Gender", value: user.gender },
                { label: "Age", value: user.age },
                { label: "DOB", value: user.dateOfBirth },
                { label: "Address", value: user.address },
                { label: "Phone", value: user.phoneNumber },
              ].map((item) => (
                <div key={item.label} className="flex text-xs">
                  <span className="w-20 font-medium">{item.label}:</span>
                  <span className="flex-1">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              {[
                "No",
                "Profile",
                "Username",
                "Gender",
                "Age",
                "Date of Birth",
                "Address",
                "Phone Number",
                "",
              ].map((heading) => (
                <th
                  key={heading}
                  className="whitespace-nowrap text-left py-2 px-2 text-xs md:text-sm text-light-green font-medium border-b border-light-white"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {users.map((user, index) => (
              <tr key={user.id} className="border-b border-light-white">
                <td className="py-3 px-2 text-xs text-lighter-green">
                  {index + 1}
                </td>
                <td className="py-3 px-2">
                  <Link href={`/profile/${user.id}`}>
                    <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden">
                      <Image
                        src={user.profile}
                        alt={user.username}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                </td>
                <td className="py-3 px-2 text-sm font-medium text-teal-600 whitespace-nowrap">
                  {user.username}
                </td>
                <td className="py-3 px-2 text-sm text-lighter-green">
                  {user.gender}
                </td>
                <td className="py-3 px-2 text-sm text-lighter-green">
                  {user.age}
                </td>
                <td className="py-3 px-2 text-sm text-lighter-green whitespace-nowrap">
                  {user.dateOfBirth}
                </td>
                <td className="py-3 px-2 text-sm text-lighter-green whitespace-nowrap">
                  {user.address}
                </td>
                <td className="py-3 px-2 text-sm text-lighter-green whitespace-nowrap">
                  {user.phoneNumber}
                </td>
                <td className="py-3 px-2 text-right">
                  <button className="p-1">
                    <MoreVertical className="w-4 h-4 text-lighter-green" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
