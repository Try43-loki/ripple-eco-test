import { Controller } from "react-hook-form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";

export function SelectGenderComponent({ control }) {
  return (
    <Controller
      name="gender"
      control={control}
      rules={{ required: "Gender is required" }}
      render={({ field, fieldState }) => (
        <div className="grid w-full gap-1.5">
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="w-full border-none bg-lighter-white !text-gray-600">
              <SelectValue placeholder="Select a gender" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-light-strok text-gray-600">
              <SelectGroup>
                <SelectItem value="FEMALE">Female</SelectItem>
                <SelectItem value="MALE">Male</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* {fieldState.error && (
            <p className="text-red-500 text-xs">{fieldState.error.message}</p>
          )} */}
        </div>
      )}
    />
  );
}
