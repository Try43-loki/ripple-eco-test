"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Download, BadgeCheck } from "lucide-react";
import * as XLSX from "xlsx";
import dayjs from "dayjs";

export default function ExcelButton({ data }) {
  const toastCenter = useRef(null);
  const router = useRouter();

  // Show success toast message
  const showCustomCenterToast = (content) => {
    if (toastCenter.current) {
      toastCenter.current.show({
        severity: "success",
        life: 3000,
        content,
      });
    }
  };

  // Handle Excel download
  const handleDownload = () => {
    // Prepare data for Excel export
    const exportData = [
      {
        NO: 1,
        Title: data.title,
        Description: data.description,
        Image: data.image,
        View: data.view,
        "Number of Supporters": data.numberOfSupporter,
        Destination: data.destination,
        "Created At": dayjs(data.createdAt).format("DD MMM YYYY"), // 👉 formatted as Day Month Year,
        "User First Name": data.userData?.data?.firstName || "",
        "User Last Name": data.userData?.data?.lastName || "",
        "User Email": data.userData?.data?.email || "",
        "User Phone": data.userData?.data?.phoneNumber || "",
        "User Address": data.userData?.data?.address || "",
        "User Gender": data.userData?.data?.gender || "",
        "User Bio": data.userData?.data?.bio || "",
      },
    ];

    // Convert to worksheet and workbook
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Responses");

    // Trigger file download
    XLSX.writeFile(workbook, "survey-responses.xlsx");

    // Show success toast
    showCustomCenterToast(
      <div className="w-auto">
        <article className="flex flex-col gap-y-4 w-125 rounded-2xl p-5 items-center justify-center bg-white shadow-lg">
          <BadgeCheck className="w-42.5 h-42.5 text-green" />
          <h4 className="text-[35px] font-semibold">Download Successfully!</h4>
          <p className="text-base text-muted-foreground">
            Your Take Action has been downloaded
          </p>
        </article>
      </div>
    );

    // Redirect after 1 second
    setTimeout(() => {
      router.push("/take-action");
    }, 1000);
  };

  return (
    <Button
      type="button"
      onClick={handleDownload}
      className="w-[300px] flex gap-x-2.75 bg-green hover:bg-green-600 border-light-gray text-xs md:text-sm lg:text-base rounded-lg md:rounded-2xl py-5 md:py-6.5"
    >
      <Download className="w-6 h-6 text-white" />
      <p className="text-white">Download as Excel</p>
    </Button>
  );
}
