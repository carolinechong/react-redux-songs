// Reducers

import { combineReducers } from "redux";

// Reducer 1: Static array - list of songs
const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "No Macarena", duration: "2:30" },
    { title: "All Star", duration: "3:15" },
    { title: "I Want It That Way", duration: "1:45" }
  ];
};

// Reducer 2: Selected song
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

// Rest of project has access to combined set of reducers
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
