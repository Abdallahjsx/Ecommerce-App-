export function fromTimeToRelativeString(dateString: string) {
    const now = new Date();
    const then = new Date(dateString);
    const diff = now.getTime() - then.getTime();
    const diffInMinutes = Math.floor(diff / (1000 * 60));
    if (diffInMinutes < 1) {
        return "Just now";
    }
    if (diffInMinutes < 60) {
        return `${diffInMinutes}m ago`;
    }
    const diffInHours = Math.floor(diff / (1000 * 60 * 60));
    if (diffInHours < 24) {
        return `${diffInHours}h ago`;
    }
    const diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (diffInDays < 30) {
        return `${diffInDays}d ago`;
    }
    const diffInMonths = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    if (diffInMonths < 12) {
        return `${diffInMonths}mo ago`;
    }
    const diffInYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    return `${diffInYears}y ago`;
}