import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// This function combines clsx for conditional classnames with twMerge for resolving conflicts
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
