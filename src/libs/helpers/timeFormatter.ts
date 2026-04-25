export function fromTimeToRelativeString(dateString: string) {
  const normalized = dateString
    .replace(/\.(\d{3})\d+/, ".$1") + "Z";

  const now = Date.now();
  const then = new Date(normalized).getTime();

  const diff = now - then;

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 365 * day;

  if (diff < minute) return "Just now";
  if (diff < hour) return `${Math.floor(diff / minute)}m ago`;
  if (diff < day) return `${Math.floor(diff / hour)}h ago`;
  if (diff < month) return `${Math.floor(diff / day)}d ago`;
  if (diff < year) return `${Math.floor(diff / month)}mo ago`;

  return `${Math.floor(diff / year)}y ago`;
}
