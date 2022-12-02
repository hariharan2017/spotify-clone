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
  return hours + " hr " + minutes + " min";
}

export const getDaysAgo = (date) => {
  const currDate = new Date();
  const oldDate = new Date(String(date));
  const diff = Math.round((currDate-oldDate)/(1000*60*60*24));
  return diff == 1 ? diff + " day ago" : diff + " days ago";
}

export const getReleaseYear = (date) => {
  return new Date(date).getFullYear();
}