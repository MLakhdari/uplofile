import axios from "axios";

export default axios.create({
  baseURL: "https://uplofile.com/api/services",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
