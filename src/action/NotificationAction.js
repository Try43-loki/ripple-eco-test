"use server";

import { Knock } from "@knocklabs/node";

const knock = new Knock(process.env.KNOCK_API_SECRET);

export const sendCommentAction = async (_, FormData) => {
  console.log("FormData", FormData);

  try {
    // The key of the workflow (from Knock dashboard)
    await knock.workflows.trigger("on-invited", {
      data: {
        message: "A Notification just sent to you!",
      },
      recipients: [
        {
          id: "3",
          name: "Kimhout Theam",
          email: "movin430630@gmail.com",
        },
      ],
    });
  } catch (error) {
    console.log(error);
  }
};
