import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  // Helper function: take a list of songs, map of them, and return JSX.
  renderList() {
    // Return new array of JSX elements
    return this.props.songs.map(song => {
      // Return JSX
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// get my state (runs every time button is clicked)
const mapStateToProps = state => {
  // return an object that will show as props inside SongList component
  // object value is from combineReducers: reducers > index.js file
  return { songs: state.songs };
};

// Configure Connect
// 1st set of (): pass mapStateToProps and selectSong Action Creator
// 2nd set of () invokes the SongList function that got returned
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
