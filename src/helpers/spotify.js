export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "9a5a4198db4e43d690e7b8a69031bea1";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "playlist-read-private",
  "playlist-read-collaborative"
];

export const accessUrl = `${authEndpoint}?
client_id=${clientId}&
redirect_uri=${redirectUri}&
scope=${scopes.join("%20")}&
response_type=token&
show_dialog=true
}`
