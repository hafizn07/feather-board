import { type ClassValue, clsx } from "clsx";
import { format, isToday, isTomorrow, isYesterday } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string): string => {
  const names = name.split(" ");
  if (names.length === 1) {
    return names[0].charAt(0).toUpperCase();
  }
  const initials = names[0].charAt(0) + names[names.length - 1].charAt(0);
  return initials.toUpperCase();
};

// Function to format the date
export const dateFormatter = (date: Date) => {
  const day = format(date, "dd");
  const month = format(date, "MMM");

  if (isToday(date)) return { text: "Today", color: "text-black" };
  if (isTomorrow(date)) return { text: "Tomorrow", color: "text-sky-600" };
  if (isYesterday(date)) return { text: "Yesterday", color: "text-red-500" };
  return { text: `${day} ${month}`, color: "text-gray-400" };
};

export const loadState = (key: string) => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error loading state from local storage:", error);
    return null;
  }
};

export const saveState = (key: string, state: any) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Error saving state to local storage:", error);
  }
};
