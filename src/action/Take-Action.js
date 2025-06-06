import { deleteTakeActionService } from "@/service/takeActionService";

export const deleteTakeAction = async (takeActionId) => {
    try {
        await deleteTakeActionService(takeActionId);
    } catch (e) {
        console.log("error", e);
    }
}