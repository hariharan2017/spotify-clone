export const replaceUrlParam = (original = "", replacer) => {
  const firstIndex = original.indexOf("{");
  const lastIndex = original.indexOf("}");
  return original.replace(original.substring(firstIndex, lastIndex+1), replacer);
}

export const getUri = (uri) => {
  const splitItems = uri?.split(":") || [];
  //uris are like spotify:album:id
  return splitItems?.[2] || null;
}

export const showMinSecsDuration = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return seconds == 60 ? (minutes + 1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

export const showHrMinsDuration = (ms) => {
  const hours = Math.floor(ms/(1000*60*60));
  const minutes = Math.floor((ms/(1000*60*60) - hours) * 60);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  if (hours < 1) {
    return minutes + " min " + seconds + " sec"
  } else {
    return hours + " hr " + minutes + " min";
  }
}

const monthToLabel = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December"
}

export const getReadableDate = (date) => {
  const dt = new Date(date);
  return date ? monthToLabel[dt.getMonth()+1] + " " + dt.getUTCDate() + ", " + dt.getFullYear() : null;
}

export const getDaysAgo = (date) => {
  const currDate = new Date();
  const oldDate = new Date(String(date));
  const diff = Math.round((currDate-oldDate)/(1000*60*60*24));
  if (diff < 1) {
    return Math.round((currDate-oldDate)/(1000*60*60)) + " hrs ago";
  } else {
    return diff == 1 ? diff + " day ago" : diff + " days ago";
  }
}

export const getReleaseYear = (date) => {
  return new Date(date).getFullYear();
}