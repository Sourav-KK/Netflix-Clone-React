import config from "./Constants/Constants";

const Trending = `trending/all/week?api_key=${config.APIKEY}&language=en-US`;
const Action = `discover/movie?api_key=${config.APIKEY}&with_genres=28`;
const Documtries = `discover/movie?api_key=${config.APIKEY}&with_genres=99`;

export { Trending, Action, Documtries };
