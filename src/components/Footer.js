import React from "react";

function Footer() {
  return (
    <footer className="bg-dark py-3 position-fixed bottom-0 w-100">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6">
            <p className="mb-0 text-light">
              Uplofile &copy; {new Date().getFullYear()}
            </p>
          </div>
          <div className="col-md-6">
            <p className="mb-0 text-light">Développé avec amour par MedLakh</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
