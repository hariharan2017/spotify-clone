//API Documentation - https://developer.spotify.com/documentation/web-api/reference/#/

//Current User
export const GET_CURRENT_USER_DETAILS = "/me";
export const GET_CURRENT_USER_TOP_SONGS = "/me/top/{type}";
export const GET_CURRENT_USER_FOLLOWED_ARTISTS = "/me/following";
export const GET_CURRENT_USER_PLAYLISTS = "/me/playlists";

//Categories
export const GET_SEVERAL_BROWSE_CATEGORIES = "/browse/categories";
export const GET_SINGLE_BROWSE_CATEGORY = "/browse/categories/{category_id}";

//Playlists
export const GET_PLAYLIST = "/playlists/{playlist_id}";

//Albums
export const GET_ALBUM = "/albums/{id}";