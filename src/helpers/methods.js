export const replaceUrlParam = (original = "", replacer) => {
  const firstIndex = original.indexOf("{");
  const lastIndex = original.indexOf("}");
  return original.replace(original.substring(firstIndex, lastIndex+1), replacer);
}

export const showDisplayDuration = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return seconds == 60 ? (minutes + 1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

export const getDaysAgo = (date) => {
  const currDate = new Date();
  const oldDate = new Date(String(date));
  const diff = Math.round((currDate-oldDate)/(1000*60*60*24));
  return diff == 1 ? diff + " day ago" : diff + " days ago";
}