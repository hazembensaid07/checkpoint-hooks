import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./MovieCard.css";
function MovieCard({ title, desc, postUrl, rate }) {
  return (
    <div>
      <div class="movie_card" id="bright">
        <div class="info_section">
          <div class="movie_header">
            <img
              class="locandina"
              src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"
            />
            <h1> {title} </h1>
            <h4>{postUrl}</h4>
            <span class="minutes">117 min</span>
            <p class="type">{rate}</p>
          </div>
          <div class="movie_desc">
            <p class="text">{desc}</p>
          </div>
          <div class="movie_social">
            <ul>
              <li>
                <i class="material-icons">share</i>
              </li>
              <li>
                <i class="material-icons"></i>
              </li>
              <li>
                <i class="material-icons">chat_bubble</i>
              </li>
            </ul>
          </div>
        </div>
        <div class="blur_back bright_back"></div>
      </div>
    </div>
  );
}

export default MovieCard;
