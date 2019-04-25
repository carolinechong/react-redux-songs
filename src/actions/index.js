// Action creator

// Named export allows exporting multiple diff action creators from a file (vs 'export default').
export const selectSong = song => {
  // Return an action
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
