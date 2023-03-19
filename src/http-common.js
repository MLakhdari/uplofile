import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:9000/api/services",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
