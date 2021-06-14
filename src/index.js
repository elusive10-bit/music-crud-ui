import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { nanoid } from "nanoid";

const DATA = [
  { id: "song-" + nanoid(), name: "Glow", artist: "Vocaloid", isAdded: false}
];

const SONG_RESULTS = [
  { id: "song-" + nanoid(), name: "Gallows Bell", artist: "Vocaloid", isAdded: false},
  { id: "song-" + nanoid(), name: "Glow", artist: "Vocaloid", isAdded: true},
  { id: "song-" + nanoid(), name: "Hysteria", artist: "Vocaloid", isAdded: false},
  { id: "song-" + nanoid(), name: "Mirai e", artist: "Unknown", isAdded: false},
  { id: "song-" + nanoid(), name: "Crossroads", artist: "Vocaloid", isAdded: false},
  { id: "song-" + nanoid(), name: "Now or Never", artist: "Vocaloid", isAdded: false},
  { id: "song-" + nanoid(), name: "Magenta", artist: "Vocaloid", isAdded: false},
];

ReactDOM.render(
  <React.StrictMode>
    <App songs={DATA} songResults={SONG_RESULTS}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
