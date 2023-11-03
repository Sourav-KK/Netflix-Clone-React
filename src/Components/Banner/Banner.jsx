import { useState, useEffect } from "react";
import "../Banner/Banner.css";
import axios from "../../Axios";
import config from "../../Constants/Constants";
import { trendingLink } from "../../Constants/Other_Constants";

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios
      .get(trendingLink)
      .then((result) => {
        const randomIndex = Math.floor(
          Math.random() * result.data.results.length
        );
        setMovie(result.data.results[randomIndex]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${
          movie ? config.IMAGEURL + movie?.backdrop_path : ""
        })`,
      }}
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title || movie.name : " "}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="descriptions">{movie?.overview}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
