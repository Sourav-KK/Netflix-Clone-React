import config from "./Constants";
const NETFLIX_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png";

const userIcon =
  "https://www.shutterstock.com/image-vector/man-icon-vector-600w-1040084344.jpg";

const trendingLink = `trending/all/week?api_key=${config.APIKEY}&language=en-US`;

const movieLink = `videos?api_key=${config.APIKEY}&language=en-US`;

const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};

export { NETFLIX_LOGO, userIcon, trendingLink, movieLink, opts };
