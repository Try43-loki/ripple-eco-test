import { apiRequest } from "@/utils/api";
// const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJza2dtZWRldkBnbWFpbC5jb20iLCJpYXQiOjE3NDg4MzE2NTQsImV4cCI6MTc0OTA5MDg1NH0.gzMpt30nq-bp5VubcIo5ppBVgNNSZJLrOOySCBBrWdo"
const token ="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5YW5la2FoNDAwQGNpZ2lkZWEuY29tIiwiaWF0IjoxNzQ4ODQ5MzI0LCJleHAiOjE3NDkxMDg1MjR9.xT38yXnRrqKXlByDQqo_pbYrX3WJI6kADd8B7PU2raY"
// eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5YW5la2FoNDAwQGNpZ2lkZWEuY29tIiwiaWF0IjoxNzQ4OTE5MDA5LCJleHAiOjE3NDkxNzgyMDl9.WetZAwJe9NIryNvfR7s8xBaj4dA47Blm-0LXrvP-jf0
export const getAllTakeActionService = async () => {
    try {
        const  data = await apiRequest ("/takeActions/all", "GET",null, token );
        return data ;
    } catch (e){
        console.log( "error",e);
    }
}
export const getTakeActionByTitleService = async (title) => {
    try {
        const  data = await apiRequest (`/takeActions/${title}`, "GET",null, token );
        return data ;
    } catch (e){
        console.log( "error",e);
    }
}
export const getOwnTakeActionService = async () => {
    try {
        const  data = await apiRequest (`/takeActions/own`, "GET",null, token );
        return data ;
    } catch (e){
        console.log( "error",e);
    }
}