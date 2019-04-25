import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ mySelectedSong }) => {
  if (!mySelectedSong) {
    return <div>Select a song.</div>;
  }

  return (
    <div>
      <h3>DETAILS</h3>
      <p>Title: {mySelectedSong.title}</p>
      <p>Duration: {mySelectedSong.duration}</p>
    </div>
  );
};

const mapStateToProps = state => {
  // object value is from combineReducers: reducers > index.js file
  return { mySelectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
