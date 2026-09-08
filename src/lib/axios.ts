import axios from "axios";

export const nexonApi = axios.create({
  baseURL: "https://open.api.nexon.com",
  headers: {
    "x-nxopen-api-key": process.env.NEXON_API_KEY ?? "",
  },
});
