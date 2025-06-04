
import { editUserProfileService } from "@/service/profileService";

export const getEditUserProfileData = async (formData , dataFile) => {
    try {
        const userData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            profileImageUrl: dataFile,
            password: formData.password,
            address: formData.address,
            birthDate: `${formData.dobYear}-${String(formData.dobMonth).padStart(2, "0")}-${String(formData.dobDay).padStart(2, "0")}`,
            gender: "MALE",
            phoneNumber: formData.phoneNumber,
            bio: formData.bio,
        };
        const edit =  await editUserProfileService(userData);
        return { success: true, message: 'Student added successfully' }
    } catch (e){
        console.log( "error",e);
    }
}