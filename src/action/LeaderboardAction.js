"use server"
import { getUserRankingFilterService } from "@/service/leaderboardService";
import { revalidateTag } from "next/cache";

export const filterLeaderboardAction = async (provinceId,categoryId) => {
    try{
        await getUserRankingFilterService(provinceId, categoryId);
        
        return{success: true, message: "Filter applied successfully"};
    }
    catch (error) {
        console.error("Error applying filter:", error);
        return { success: false, message: "Failed to apply filter" };
    }
}