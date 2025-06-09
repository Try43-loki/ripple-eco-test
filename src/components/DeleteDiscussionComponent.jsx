import React, { startTransition, useTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { deleteDiscussionAction } from "@/action/DiscussionAction";

const DeleteDiscussionComponent = ({ open, onOpenChange, discussionId }) => {
  const [isPending, setStartTransition] = useTransition();

  const handleDelete = () => {
    setStartTransition(async () => {
      const res = await deleteDiscussionAction(discussionId);
      if (res.success) {
        onOpenChange(false);
      } else {
        console.error("Deleted discussion failed: ", res.message);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex flex-col justify-center items-center text-center bg-white border border-lightes-white">
        <DialogHeader>
          <DialogTitle className="text-dark-green">
            Delete Discussion
          </DialogTitle>
        </DialogHeader>
        <p className="text-lighter-green px-10">
          Deleting this post will permanently remove it from your library. This
          action cannot be undone.
        </p>
        <div className="w-full flex gap-5">
          <Button
            className="bg-light-gray text-lighter-green w-39 hover:bg-light-gray"
            onClick={() => onOpenChange(false)}
            disabled={isPending}
          >
            Cancel
          </Button>
          <Button
            className="bg-red text-white w-39 hover:bg-red"
            onClick={handleDelete}
            disabled={isPending}
          >
            {isPending ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDiscussionComponent;
