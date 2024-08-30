/* Utility functions for displaying dates in the UI */

export function formattedDate(date: Date) {
  const localDate = date
    .toLocaleDateString("en-DK", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, ".");

  return localDate;
}

export function formattedTime(
  date: Date | null | undefined,
  secs: boolean = false
) {
  if (!date) {
    return "";
  }

  const localTime = date
    .toLocaleTimeString("da-DK", {
      hour: "2-digit",
      minute: "2-digit",
      second: secs ? "2-digit" : undefined,
    })
    .replace(/\./g, ":");

  return localTime;
}

export function formattedDay(date: Date) {
  const options = { weekday: "long" };
  return new Intl.DateTimeFormat("en-UK", options).format(date);
}
