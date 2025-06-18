"use client";
import React, { useState, useRef } from "react";
import { DollarSign } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import QRCodeGenerator from "./QRCodeGenerator";
import {
  checkPaymentStatusAction,
  createQuickBillAction,
} from "@/action/webill/webillAction"; // Assuming this exists
import { createUserContributeAction } from "@/action/createUserContributeAction";

const DonationFormComponent = ({ operator, eventId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [khqrData, setKhqrData] = useState("");
  const billNumberRef = useRef(null); // to keep billNumber across renders

  const handleOpen = async () => {
    const quickBillData = {
      account_name: "THYDY DANETH",
      payment_type: "0",
      currency_code: "USD",
      issue_datetime: "20250617081207",
      payment_term: "1",
      parent_account_no: "1120000106664",
      amount: 0.01,
      remark: "ripple team donation",
    };

    const quickBill = await createQuickBillAction(quickBillData);
    if (!quickBill?.success) {
      console.error("Failed to create quick bill:", quickBill?.error);
      return;
    }

    setKhqrData(quickBill.data.khqr_data || "");
    billNumberRef.current = quickBill.data.bill_no;

    setIsOpen(true);

    setTimeout(() => {
      handleClose();
    }, 60000); // 1 minute
  };

  const handleClose = async () => {
    const billNumber = billNumberRef.current;
    if (!billNumber) {
      setIsOpen(false);
      return;
    }

    const paymentStatus = await checkPaymentStatusAction([billNumber]); // API expects an array
    const paidAmount = paymentStatus?.data?.paid_amount || 0;

    if (paymentStatus?.success && paymentStatus?.data?.status_code == 6) {
      const contributeData = {
        contributeAmount: paidAmount,
        eventId,
      };

      const contribute = await createUserContributeAction(contributeData);

      if (!contribute?.success) {
        console.error("Failed to create user contribute:", contribute?.error);
      }
    }

    setIsOpen(false);
  };
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          {operator === "detail" ? (
            <button
              className="text-white bg-green px-3 py-1 rounded-xl cursor-pointer"
              onClick={handleOpen}
            >
              Donate
            </button>
          ) : (
            <DollarSign
              size={18}
              className="cursor-pointer"
              onClick={handleOpen}
            />
          )}
        </DialogTrigger>

        <DialogContent className="sm:max-w-md bg-white border-none">
          <DialogHeader>
            <DialogTitle className="text-dark-green font-medium text-lg mb-4.5">
              Donation Form
            </DialogTitle>

            <DialogDescription className="text-dark-green text-sm font-normal">
              <span className="w-2 h-2 bg-green rounded-full inline-block mr-2" />
              Thank you
            </DialogDescription>

            <hr className="text-meduim-gray my-2" />

            {/* <DialogDescription className="flex flex-col gap-5 items-center justify-center"> */}
            <div className="flex flex-col gap-5 items-center justify-center">
              <QRCodeGenerator value={khqrData} name={"THYDY DANETH"} />

              <Image
                src="/assets/donation_form/WeBill365.jpg"
                alt="Webill365"
                width={200}
                height={15}
              />
            </div>
            {/* </DialogDescription> */}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DonationFormComponent;
