import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.magicthegathering.io/v1",
});

export default instance;
