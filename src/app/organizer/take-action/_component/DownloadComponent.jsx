"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import * as XLSX from "xlsx";

export default function ExcelButton( {data}) {
  const handleDownload = () => {
    // 1) Your raw data
    // const data = [
    //   { name: "Alice", phone: "555-1234", answer: "Yes" },
    //   { name: "Bob", phone: "555-5678", answer: "No" },
    //   { name: "Charlie", phone: "555-9012", answer: "Maybe" },
    // ];


    // 2) Add a NO column
    const withIndex = [
        {
          NO: 1,
          Title: data.title,
          Description: data.description,
          Image: data.image,
          View: data.view,
          "Number of Supporters": data.numberOfSupporter,
          Destination: data.destination,
          "Created At": data.createdAt,
          "User First Name": data.userData?.data?.firstName || '',
          "User Last Name": data.userData?.data?.lastName || '',
          "User Email": data.userData?.data?.email || '',
          "User Phone": data.userData?.data?.phoneNumber || '',
          "User Address": data.userData?.data?.address || '',
          "User Gender": data.userData?.data?.gender || '',
          "User Bio": data.userData?.data?.bio || '',
        }
      ];
    // 3) Convert JSON array to a worksheet
    const ws = XLSX.utils.json_to_sheet(withIndex);

    // 4) Create a new workbook and append the worksheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Responses");

    // 5) Trigger client download
    XLSX.writeFile(wb, "survey-responses.xlsx");
  };
  return (
    <Button
    type="button"
    onClick={handleDownload}
    className="w-[300px] flex gap-x-2.75 bg-green hover:bg-green-600 border-light-gray text-xs md:text-sm lg:text-base rounded-lg md:rounded-2xl  py-5 md:py-6.5"
  >
    <Download className="w-6 h-6 text-white" />
    <p className="text-white">Download as Excel</p>
  </Button>
  );
}

