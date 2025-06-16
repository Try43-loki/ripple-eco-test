"use client";

import React, { useState } from "react";
import Image from "next/image";
import TagCardComponent from "@/app/(user)/discussion-forums/_component/TagCardComponent";
import { useTimeFormat } from "@/hooks/dayjs";
import { MoreVertical, SquarePen, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";

import UpdateDiscussionComponent from "./UpdateDiscussionComponent";
import DeleteDiscussionComponent from "./DeleteDiscussionComponent";
import { viewUserProfileService } from "@/service/profileService";

const CardDiscussionComponent = ({
  discussions,
  otherUserId,
  otherUser,
  currentUser,
}) => {
  const formatTime = useTimeFormat();
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState(null);

  // Check owner post
  const postOwnerId = discussions?.appUser?.appUserId;
  const isOwner = postOwnerId === otherUserId;
  const isOrgOther = otherUser?.data?.organizer;
  const currentUserId = currentUser?.data?.appUserId;
  const isOrganizer = currentUser?.data?.organizer;
  // console.log("first", currentUser?.data?.organizer);

  return (
    <div className="w-full mt-8 space-y-8">
      <article className="w-full">
        <div className="flex flex-col items-start gap-4">
          {/* Top section: avatar, name, time, and ellipsis */}
          <div className="flex justify-between items-start w-full">
            <div className="flex gap-4">
              {discussions?.appUser?.profileImageUrl && (
                <Link
                  className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full bg-gray-300 relative overflow-hidden"
                  href={
                    currentUserId === otherUserId ? (isOrganizer ? '/organizer/profile' : '/profile')
                    : (isOrgOther ? `/organizer/view-profile/${otherUserId}` : `/view-profile/${otherUserId}`)
                  }
                >
                  <Image
                    src={discussions?.appUser?.profileImageUrl}
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </Link>
              )}
              <div className="flex flex-col justify-start">
                <h2 className="text-sm md:text-base lg:text-lg font-semibold text-dark-green">
                  {discussions?.appUser?.firstName}{" "}
                  {discussions?.appUser?.lastName}
                </h2>
                <p className="text-xs md:text-sm lg:text-base text-lighters-green">
                  {formatTime(discussions?.createdAt)}
                </p>
              </div>
            </div>

            {/* Dropdown menu */}
            {isOwner && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <MoreVertical className="text-dark-green w-5 h-5 cursor-pointer" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40 border border-lightes-white">
                  <DropdownMenuItem
                    onClick={() => setOpenEdit(true)}
                    className="text-lighter-green hover:text-lighter-green flex cursor-pointer items-center"
                  >
                    <SquarePen className="text-lighter-green w-5 h-5" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setDeleteTargetId(discussions?.discussionId);
                      setOpenDelete(true);
                    }}
                    className="text-red hover:text-red flex cursor-pointer items-center"
                  >
                    <Trash2 className="text-red w-5 h-5" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* Card Content */}
          <Link
            href={`/discussion-forums/${discussions.discussionId}`}
            className="block w-full"
          >
            <div>
              <h2 className="text-base md:text-lg lg:text-xl font-semibold text-dark-green">
                {discussions?.title}
              </h2>
              <p className="text-xs md:text-sm lg:text-base text-lighters-green mt-2">
                {discussions?.description}
              </p>

              {discussions?.image && (
                <img
                  src={discussions?.image}
                  alt="discussion visual"
                  className="w-full h-72 mt-4 rounded-xl object-cover"
                />
              )}

              <div className="flex justify-between mt-4">
                <TagCardComponent
                  tags={discussions?.tag}
                  counts={discussions?.commentCount}
                />
              </div>
            </div>
          </Link>
        </div>
      </article>

      {/* Edit Dialog */}
      {/* <Dialog open={openEdit} onOpenChange={setOpenEdit}>
        <DialogContent className="flex flex-col bg-white border border-lightes-white">
          <DialogHeader>
            <DialogTitle>Update Discussion</DialogTitle>
          </DialogHeader>
          <p>This is where the edit form goes.</p>
        </DialogContent>
      </Dialog> */}
      <UpdateDiscussionComponent
        open={openEdit}
        onOpenChange={setOpenEdit}
        onSubmit={() => {
          setOpenEdit(false);
        }}
        defaultValues={{
          id: discussions?.discussionId || "",
          title: discussions?.title || "",
          description: discussions?.description || "",
          tags: discussions?.tag || [],
          image: discussions?.image || null,
        }}
      />

      {/* Delete Dialog */}
      <DeleteDiscussionComponent
        open={openDelete}
        onOpenChange={setOpenDelete}
        discussionId={deleteTargetId}
      />
    </div>
  );
};

export default CardDiscussionComponent;
