import http from "../../http-common";

const getProgressUpload = (id, options) => {
  return http.get(`/documents/upload-progress/${id}`, options);
};

const getProgressDownload = (id, options) => {
  return http.get(`/documents/download-progress/${id}`, options);
};

const get = (id, fileName) => {
  return http.get("/documents?file=" + fileName + "&id=" + id);
};

const create = (data) => {
  return http.post("/documents/", data);
};

const FileService = {
  get,
  getProgressUpload,
  getProgressDownload,
  create,
};

export default FileService;
