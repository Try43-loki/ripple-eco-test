import { createTakeActionService, deleteTakeActionService, submitTakeActionAnswerService } from "@/service/takeActionService";
import { fileUploadAction } from "./FileUploadAction";

export const createTakeAction = async (data) => {
    try {
        const imageUrl = await fileUploadAction(data.image);
        const takeActionData = {
            title: data.title,
            destinationPerson: data.sendTo,
            image: imageUrl,
            description: data.description,
            isAnonymous: data.isAnonymous,
        }
        const upload = await createTakeActionService(takeActionData);
        return upload;
    } catch (e){
        console.log( "error",e);
    }
}
export const deleteTakeAction = async (takeActionId) => {
    try {
    const deleted = await deleteTakeActionService(takeActionId);
    return deleted;
} catch (e) {
    console.log("error", e);
}
}

export const submitTakeActionAnswer = async (answerData, takeActionID) => {
    try {
        const takeActionAnswer = {
            answer: answerData.description,
            takeActionId: takeActionID
        }
        const response = await submitTakeActionAnswerService(takeActionAnswer);
        return response;
    } catch (e) {
        console.log("error", e);
    }
}
