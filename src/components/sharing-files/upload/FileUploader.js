import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import FileService from "../../../services/sharing-files/FileService";
import DescriptionSection from "../global-sections/DescriptionSection";
import ReviewSection from "../global-sections/ReviewSection";
import FeatureSection from "../global-sections/FeatureSection";
import TerminologySection from "../global-sections/TerminologySection";

const MainContainer = styled.div`
  position: relative;
  background-image: url("background-upload.jpg");
  background-size: cover;
  background-position: center center;
  padding: 100px 0 30px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 90px 0 30px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const Card = styled.div`
  opacity: 0.98;
`;

const Title = styled.h2`
  color: var(--primary-title-color);
`;

const ButtonSelectFile = styled.button`
  background-color: var(--primary-title-color);
  color: white;
  :hover {
    background-color: #004aba;
  }
`;

const UrlContainer = styled.div`
  display: flex;
  overflow: hidden;
  gap: 5px;
  align-items: stretch;
`;

const UrlRef = styled.a`
  overflow-x: scroll;
  max-width: 100%;
  white-space: nowrap;
`;

function FileUploader() {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [urlCopied, setUrlCopied] = useState(false);
  const userId = uuidv4();

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles[0].size > 1024 * 1024 * 1024 - 1) {
        setErrorMessage("File size exceeds 1 GB.");
        return;
      }

      const handleProgress = () => {
        FileService.getProgressUpload(userId, {})
          .then((response) => {
            if (response.data) {
              if (Math.floor(response.data) < 1) {
                console.log("hey");
                setProgress(1);
              } else {
                setProgress(Math.floor(response.data));
              }
            } else {
              setProgress(0);
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      };

      setLoading(true);
      setProgress(0);
      setUrl("");
      const interval = setInterval(handleProgress, 1000);
      const file = acceptedFiles[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("id", userId);

      FileService.create(formData, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = progressEvent.loaded / progressEvent.total;
          let percent = Math.floor(percentCompleted * 100);
          setProgress(percent);
        },
      })
        .then((response) => {
          setUrl(response.data);
          setLoading(false);
          clearInterval(interval);
          setProgress(100);
        })
        .catch((error) => {
          clearInterval(interval);
        });
    },
    [userId]
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setUrlCopied(true);
    setTimeout(() => {
      setUrlCopied(false);
    }, 2000);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noClick: isLoading,
    noDrag: isLoading,
  });

  return (
    <HelmetProvider>
      <MainContainer className="row justify-content-center px-2">
        <div className="col-sm-10 col-md-10 col-lg-8">
          <Card className="card pb-4 bg-dark text-white">
            <section className="container mt-5">
              <Helmet>
                <title>File Uploder | UploFile</title>
                <meta
                  name="description"
                  content="Easily upload files online with UploFile's file uploader tool. Simply drag and drop your files or select them manually, and watch the progress bar as your files are uploaded. Once completed, you'll receive a link to share your files with others. Try it now and enjoy hassle-free file uploads!"
                />
              </Helmet>
              <Title className="text-center mb-4">Powerful File Uploader</Title>
              <h6 className="text-center mb-4">
                Share Large Files Up To 1 GB Quickly and Securely
              </h6>
              {errorMessage ? (
                <p className="alert alert-danger mb-3">
                  <small>{errorMessage}</small>
                </p>
              ) : (
                <></>
              )}
              <div className="row">
                <div className="col-md-12 mx-auto">
                  <div
                    {...getRootProps()}
                    className={`dropzone text-center border p-4 ${
                      isDragActive ? "bg-primary text-white opacity-70" : ""
                    }`}
                    style={{
                      cursor: `${isLoading ? "wait" : "grab"}`,
                    }}
                    disabled
                  >
                    <input {...getInputProps()} required />
                    {isDragActive ? (
                      <p className="mb-0">Drop the files here...</p>
                    ) : (
                      <p className="mb-0">
                        Drag and drop files here, or click to select files
                      </p>
                    )}
                    <p className="mb-0">Maximum file size: 1 GB</p>
                    <ButtonSelectFile className="btn mt-3" disabled={isLoading}>
                      {isLoading ? "Loading..." : "Select file"}
                    </ButtonSelectFile>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12 mx-auto">
                  <div className="progress mt-3 progress-lg">
                    <div
                      className={`progress-bar progress-bar-striped bg-primary 
          ${progress !== 100 && progress !== 0 ? "progress-bar-animated" : ""}`}
                      role="progressbar"
                      style={{ width: `${progress}%` }}
                      aria-valuenow={progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <small>
                        {progress > 0 &&
                          `${
                            progress !== 100
                              ? `${progress}%`
                              : "Uploded successfuly!"
                          }`}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              {url && (
                <div className="row mt-4">
                  <div className="col-md-12 mx-auto">
                    <div className="card" style={{ opacity: "0.85" }}>
                      <div className="card-body text-black">
                        <p className="card-text">
                          Share the link with others by copying it below:
                        </p>
                        <div className="input-group file-url">
                          <UrlContainer>
                            <UrlRef
                              href={url}
                              className="form-control"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {url}
                            </UrlRef>
                            <button
                              className={`btn btn-outline-secondary copy-button ${
                                urlCopied ? "copied" : ""
                              }`}
                              onClick={handleCopy}
                            >
                              {urlCopied ? (
                                <span
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",
                                  }}
                                >
                                  Copied! <FontAwesomeIcon icon={faCheck} />
                                </span>
                              ) : (
                                <span
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",
                                  }}
                                >
                                  <FontAwesomeIcon icon={faCopy} /> Copy
                                </span>
                              )}
                            </button>
                          </UrlContainer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </Card>
        </div>
      </MainContainer>
      <DescriptionSection />
      <ReviewSection />
      <FeatureSection />
      <TerminologySection />
    </HelmetProvider>
  );
}

export default FileUploader;
