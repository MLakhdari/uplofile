import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FileUploader from "./components/sharing-files/upload/FileUploader";
import FileDownloader from "./components/sharing-files/download/FileDownloader";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<FileUploader />} />
        <Route path="/upload" element={<FileUploader />} />
        <Route path="/download" element={<FileDownloader />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
