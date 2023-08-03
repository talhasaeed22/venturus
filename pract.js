function getTimeAgoOrFormattedTime(timestamp) {
  const currentTime = Date.now();
  const diffInMilliseconds = currentTime - timestamp;

  // Convert milliseconds to seconds, minutes, hours, and days
  const seconds = Math.floor(diffInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);

  if (months > 0) {
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    // If it's within the last minute, show the formatted time as HH:mm:ss
    const formattedTime = new Date(timestamp).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    return formattedTime;
  }
}

// Example usage:
const timestamp = Date.now() - 21083 * 60 * 1000; // Replace this with your timestamp in milliseconds
const formattedTimeAgo = getTimeAgoOrFormattedTime(timestamp);
