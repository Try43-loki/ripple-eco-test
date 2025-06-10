"use server";

import { Knock } from "@knocklabs/node";

const knock = new Knock({
  apiKey: "sk_test_54taCg965eCJPFKr_OYsPf0AyftLby9kaILDVl8nuIw",
});

export const sendCommentAction = async (comment) => {
  // console.log("comment ", comment);

  try {
    // The key of the workflow (from Knock dashboard)
    await knock.workflows.trigger("on-invited", {
      data: {
        message: "A Notification just sent to you!",
      },
      recipients: ["3"],
    });
  } catch (error) {
    console.log(error);
  }
};
