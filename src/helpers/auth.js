export const getTokenFromUrl = (url) => {
  return url.split("&")[0].split("=")[1];
};
