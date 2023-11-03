import axios from "axios";
import config from "./Constants/Constants";

const instance = axios.create({
  baseURL: config.BASEURL,
});

export default instance;
