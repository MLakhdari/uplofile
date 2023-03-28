import http from "../../http-common";

const getProgressUpload = (id, options) => {
  return http.get(`/documents/upload-progress/${id}`, options);
};

const getProgressDownload = (id, options) => {
  return http.get(`/documents/download-progress/${id}`, options);
};

const get = (id, fileName, options) => {
  return http.get("/documents?file=" + fileName + "&id=" + id, options);
};

const create = (data, options) => {
  return http.post("/documents/", data, options);
};

const FileService = {
  get,
  getProgressUpload,
  getProgressDownload,
  create,
};

export default FileService;
