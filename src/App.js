import { useState, useEffect } from "react";
import "./style.css";
import Results from "./Results";

const API_URL = "https://itunes.apple.com/search?term=";

const App = () => {
  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchSongs = async (song) => {
    const response = await fetch(`${API_URL}${song}`);
    const data = await response.json();
    setSongs(data.results);
  };

  useEffect(() => {
    searchSongs("Marko Perković");
  }, []);

  return (
    <>
      <header>
        <h1>Search Music</h1>
        <h4>
          Search our library to find information about your favorit artist or
          track
        </h4>
        <form>
          <input
            id="input"
            type="text"
            placeholder="Song or artist name"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button
            id="button"
            onClick={(e) => {
              e.preventDefault();
              searchSongs(searchTerm);
            }}
          >
            Search
          </button>
        </form>
      </header>
      <div className="container">
        <div id="results">
          <>
            {songs?.length > 0 ? (
              <>
                {songs.map((song, id) => (
                  <Results key={id} song={song} />
                ))}
              </>
            ) : (
              <h4 className="nothing-found">
                There is no artist or track with the name {searchTerm}
              </h4>
            )}
          </>
        </div>
      </div>
    </>
  );
};

export default App;
