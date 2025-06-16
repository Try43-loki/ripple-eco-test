"use client";
import { usePathname } from "next/navigation";

export function useCurrentPathSegment(index) {
  const pathName = usePathname();
  const segments = pathName.split("/");
  return segments[index] || null;
}
