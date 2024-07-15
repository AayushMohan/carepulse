import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
 return twMerge(clsx(inputs));
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

// Format Date Time
export const formatDateTime = (dateString: Date | string) => {
 const dateTimeOptions: Intl.DateTimeFormatOptions = {
  // weekday: "short", // abbreviated weekday name (e.g., 'Mon')
  month: "short", // abbreviated month name (e.g., 'Oct')
  day: "numeric", // numeric day of the month (e.g., '25')
  year: "numeric", // numeric year (e.g., '2024')
  hour: "numeric", // numeric hours (e.g., '8')
  minute: "numeric", // numeric minutes (e.g., '30')
  hour12: true, // use 12-hour clock format (true) or 24-hour format (false)
 }

 const dateDayOptions: Intl.DateTimeFormatOptions = {
  weekday: "short", // abbreviated weekday name (e.g., 'Mon')
  year: "numeric", // numeric year (e.g., '2024')
  month: "2-digit", // abbreviated month name (e.g., 'Oct')
  day: "2-digit", // numeric day of the month (e.g., '25')
 }

 const dateOptions: Intl.DateTimeFormatOptions = {
  month: "short", // abbreviated month name (e.g., 'Oct')
  year: "numeric", // numeric year (e.g., '2024')
  day: "numeric", // numeric day of the month (e.g., '25')
 }
 const timeOptions: Intl.DateTimeFormatOptions = {
  hour: "numeric", // numeric hours (e.g., '8') 
  minute: "numeric", // numeric minutes (e.g., '30')
  hour12: true, // use 12-hour clock format (true) or 24-hour format (false)
 }

 const formattedDateTime: string = new Date(dateString).toLocaleString("en-US", dateTimeOptions);
 const formattedDateDay: string = new Date(dateString).toLocaleString("en-US", dateDayOptions);
 const formattedDate: string = new Date(dateString).toLocaleString("en-US", dateOptions);
 const formattedTime: string = new Date(dateString).toLocaleTimeString("en-US", timeOptions);

 return {
  dateTime: formattedDateTime,
  dateDay: formattedDateDay,
  dateOnly: formattedDate,
  timeOnly: formattedTime,
 }
}

export function encryptKey(passkey: string) {
 return btoa(passkey);
}

export function decryptKey(passkey: string) {
 return atob(passkey);
}