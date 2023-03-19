import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
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

const ButtonDownloadFile = styled.button`
  background-color: var(--primary-title-color);
  color: white;
  width: 200px;
  display: block;
  margin: 0 auto;
  :hover {
    background-color: #004aba;
  }
`;

function useQuery() {
  const params = new URLSearchParams(window.location.search);
  const file = params.get("file");

  return file;
}

const FileDownloader = () => {
  const [progress, setProgress] = useState(0);
  const [totalBytesToTransfer, setTotalBytesToTransfer] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [fileName, setFileName] = useState(useQuery());
  const [originFileName, setOriginFileName] = useState(
    fileName ? fileName.substring(0, fileName.lastIndexOf("_")) : ""
  );
  const [file, setFile] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const userId = uuidv4();

  const handleDownload = () => {
    setProgress(0);
    setTotalBytesToTransfer(0);
    setErrorMessage();

    const handleProgress = () => {
      FileService.getProgressDownload(userId, {})
        .then((response) => {
          if (response.data) {
            setProgress(Math.floor(response.data.progress));
            const megaBytes = response.data.totalBytesToTransfer / 1000000;
            setTotalBytesToTransfer(Math.floor(megaBytes * 100) / 100);
          }
        })
        .catch((error) => {
          clearInterval(interval);
        });
    };

    const interval = setInterval(handleProgress, 1000);
    setLoading(true);

    const formData = new FormData();
    formData.append("id", userId);

    FileService.get(userId, fileName)
      .then((response) => {
        setProgress(100);
        clearInterval(interval);
        setLoading(false);
        if (response.status === 200) {
          setFile(response.data);
        }
      })
      .catch((error) => {
        setLoading(false);
        clearInterval(interval);
        setProgress(0);
        setTotalBytesToTransfer(0);
        setFile();
        if (error.response.status === 404) {
          setErrorMessage(error.response.data.message);
        }
      });
  };

  useEffect(() => {
    if (file) {
      const blob = new Blob([file]);
      const downloadLink = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadLink;
      a.download = originFileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(downloadLink);
      setFile();
    }
  }, [file, originFileName]);

  const handleFileNameChange = (event) => {
    setFileName(event.target.value);
    setOriginFileName(event.target.value);
  };

  return (
    <HelmetProvider>
      <MainContainer className="row justify-content-center px-2">
        <div className="col-sm-10 col-md-10 col-lg-8">
          <Card className="card pb-4 bg-dark text-white">
            <section className="container mt-5">
              <Helmet>
                <title>File Downloader | UploFile</title>
                <meta
                  name="description"
                  content="Download files from URLs using this file downloader tool. UploFile allows you to quickly and easily download files from the internet by simply entering the file URL. Try it now and experience hassle-free file downloads!"
                />
              </Helmet>
              <Title className="text-center mb-4">File Downloader</Title>
              <h6 className="text-center mb-4">
                Download Large Files Up To 1 GB Quickly and Securely
              </h6>
              {errorMessage ? (
                <p className="alert alert-danger mb-3">
                  <small>{errorMessage}</small>
                </p>
              ) : (
                <></>
              )}
              <div className="row">
                <div className="form-group">
                  <input
                    type="url"
                    className="form-control"
                    id="urlInput"
                    placeholder="Enter file name.."
                    value={originFileName}
                    onChange={handleFileNameChange}
                  />
                </div>
              </div>
              {isLoading || progress === 100 ? (
                <div className="row mt-2">
                  <div className="col-md-12 mx-auto">
                    <div className="progress mt-3 progress-lg">
                      <div
                        className={`progress-bar progress-bar-striped bg-success 
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
                                : "Downloaded successfuly!"
                            }`}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
              {totalBytesToTransfer ? (
                <div className="row mt-3">
                  <small>Size : {totalBytesToTransfer} Mo</small>
                </div>
              ) : (
                <></>
              )}
              <ButtonDownloadFile
                className="btn mt-3"
                onClick={handleDownload}
                disabled={isLoading}
              >
                {isLoading ? "Downloading ..." : "Download"}
              </ButtonDownloadFile>
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
};

export default FileDownloader;
