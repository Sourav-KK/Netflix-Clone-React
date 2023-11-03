import { useState, useEffect } from "react";
import axios from "../../Axios";
import config from "../../Constants/Constants";
import Youtube from "react-youtube";
import "../Row_post/Row_post.css";
import { movieLink, opts } from "../../Constants/Other_Constants";

function Row_post(props) {
  const [movie, setMovie] = useState([]);
  const [urld, setUrld] = useState("");

  useEffect(() => {
    axios
      .get(props.url)
      .then((result) => {
        setMovie(result.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleMovieTrailer = (id) => {
    axios.get(`movie/${id}/${movieLink}`).then((response) => {
      if (response.data.results.length !== 0) setUrld(response.data.results[0]);
      else console.log(" Empty array");
    });
  };

  return (
    <div className="row">
      <h2 className="title">{props.title}</h2>
      <div className="posters">
        {movie.map((obj, index) => (
          <img
            key={index}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${config.IMAGEURL + obj.backdrop_path}`}
            alt="posters"
            onClick={() => handleMovieTrailer(obj.id)}
          />
        ))}
      </div>
      {urld && <Youtube videoId={urld.key} opts={opts} />}
    </div>
  );
}

export default Row_post;
