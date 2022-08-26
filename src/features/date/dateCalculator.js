export const dateCalculator = (created) => {
  const currentDate = Date.now();
  const postDate = new Date(created * 1000);

  const dateDifference = currentDate - postDate;

  const dateDifferenceMonths = dateDifference / (1000 * 3600 * 24 * 30.4);
  const dateDifferenceDays = dateDifference / (1000 * 3600 * 24);
  const dateDifferenceHours = dateDifference / (1000 * 3600);
  const dateDifferenceMinutes = dateDifference / (1000 * 60);

  if (dateDifferenceMonths > 12) {
    return "more than a  year ago";
  } else if (dateDifferenceMonths >= 1) {
    return Math.round(dateDifferenceMonths) + " months ago";
  } else if (dateDifferenceDays >= 1) {
    return Math.round(dateDifferenceDays) + " days ago";
  } else if (dateDifferenceHours >= 1) {
    return Math.round(dateDifferenceHours) + " hours ago";
  } else if (dateDifferenceMinutes >= 1) {
    return Math.round(dateDifferenceMinutes) + " minutes ago";
  } else {
    return "less than a minute ago";
  }
};
