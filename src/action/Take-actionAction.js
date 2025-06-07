import { createTakeActionService } from "@/service/takeActionService";
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