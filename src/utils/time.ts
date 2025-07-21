export function formatDateTime(isoTime: string): {
  time: string;
  date: string;
} {
  const date = new Date(isoTime);

  const hours = date.getUTCHours().toString();
  const minutes = date.getUTCMinutes().toString();
  const time = `${hours}:${minutes}`;

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getUTCMonth()];
  const day = date.getUTCDate().toString();
  const formattedDate = `${month} ${day}`;

  return { time, date: formattedDate };
}

export function secondsToTimeFormat(seconds: string | number): string {
  const secondsNum =
    typeof seconds === "string" ? parseInt(seconds, 10) : seconds;
  const hours = Math.floor(secondsNum / 3600);
  const minutes = Math.floor((secondsNum % 3600) / 60);
  return `${hours.toString()}:${minutes.toString()}`;
}

export function calculateDuration(
  startTime: string,
  endTime: string
): { hours: number; minutes: number; seconds: number } {
  const start = new Date(startTime);
  const end = new Date(endTime);

  const diffMs = Math.abs(end.getTime() - start.getTime());

  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

  return { hours, minutes, seconds };
}
