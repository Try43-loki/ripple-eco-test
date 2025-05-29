// app/profile/[userId]/page.jsx
"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Phone, MapPin, ChevronLeft } from "lucide-react";

export default function UserProfile() {
  const { userId } = useParams();
  const router = useRouter();

  const users = [
    {
      id: 1,
      profile: "/assets/profileVolunteer.png",
      username: "Zain",
      gender: "Female",
      age: "24",
      dateOfBirth: "01 - 01 - 2000",
      address: "Kandal",
      phoneNumber: "096 32 90 85",
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

  const user = users.find((u) => u.id === parseInt(userId, 10));
  if (!user) return <p className="text-red-500 p-4">User not found</p>;

  return (
    <div className="max-w-sm mx-auto p-6 border border-meduim-white/50 rounded-xl mt-35 mb-20">
      {/* Go Back Button */}
      <button
        onClick={() => router.push("/eco-event/2")}
        className="mb-4 text-sm text-dark-gray flex gap-2 hover:underline"
      >
        <ChevronLeft />
        Go Back
      </button>

      {/* Avatar and Info */}
      <div className="flex flex-row gap-10 justify-center mb-4">
        {/* Avatar */}
        <section className="relative w-32 h-32 rounded-full ring-4 ring-green overflow-hidden">
          <Image
            src={user.profile}
            alt={user.username}
            fill
            className="object-cover"
          />
        </section>

        {/* Info */}
        <section>
          <h2 className="text-3xl font-bold text-dark-green text-center inline-block mb-3 border-b-2 border-green">
            {user.username}
          </h2>

          <div className="mt-4 space-y-2 text-gray-700">
            <p className="flex items-start gap-2">
              <Phone className="w-5 h-5 text-gray-500" />
              {user.phoneNumber}
            </p>
            <p className="flex items-start gap-2 mb-2">
              <MapPin className="w-5 h-5 text-gray-500" />
              {user.address}
            </p>
          </div>

          {/* View Profile Button */}
          <div className="mt-6 flex justify-center">
            <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg">
              View Profile
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
