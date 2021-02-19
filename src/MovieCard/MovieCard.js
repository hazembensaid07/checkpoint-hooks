import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./MovieCard.css";
function MovieCard({ title, desc, postUrl, rate }) {
  return (
    <div>
      <div className="movie_card" id="bright">
        <div className="info_section">
          <div className="movie_header">
            <img
              className="locandina"
              src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"
            />
            <h1> {title} </h1>
            <h4>{postUrl}</h4>
            <span className="minutes">117</span>
            <p className="type">{rate}</p>
          </div>
          <div className="movie_desc">
            <p className="text">{desc}</p>
          </div>
          <div className="movie_social">
            <ul>
              <li>
                <i className="material-icons">share</i>
              </li>
              <li>
                <i className="material-icons"></i>
              </li>
              <li>
                <i className="material-icons">chat_bubble</i>
              </li>
            </ul>
          </div>
        </div>
        <div className="blur_back bright_back"></div>
      </div>
    </div>
  );
}

export default MovieCard;
