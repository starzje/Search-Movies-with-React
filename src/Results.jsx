function Results({ song }) {
  return (
    <div className="card">
      <a
        className="link"
        href={song.trackViewUrl ? song.trackViewUrl : song.artistViewUrl}
      >
        <div className="image-overlay">
          <img src={song.artworkUrl100} className="img" alt="..." />

          <p className="artist-name">{song.artistName}</p>
          <p className="track-name">
            <span className="special-track-name">{song.wrapperType}:</span>{" "}
            {song.trackName ? song.trackName : song.collectionName}
          </p>
          <p className="moreInfo">
            <i className="fa-brands fa-apple"></i>
            <i className="fa-solid fa-music"></i>
            <i className="fa-solid fa-play"></i>
          </p>
        </div>
      </a>
    </div>
  );
}

export default Results;
