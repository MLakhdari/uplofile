import React from "react";

const UnderConstruction = () => {
  return (
    <>
      <div className="bg-dark vh-100 text-light">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h1 className="display-4 mb-4">Site en construction</h1>
              <p className="lead">
                Nous sommes en train de travailler sur ce site. Veuillez revenir
                plus tard.
              </p>
              <hr className="bg-light my-4" />
              <p className="small">
                N'hésitez pas à nous contacter si vous avez des questions ou des
                préoccupations. Nous serons ravis de vous aider
              </p>
              <a
                href="mailto:support@uplofile.com"
                className="btn btn-primary btn-lg mt-3 rounded-pill"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope mx-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8.934L1.38 3H14.62L8 8.934zm6.698-6.763a1 1 0 0 0-1.396-.135L8 7.434 2.698 2.036a1 1 0 1 0-1.263 1.548L7.333 8l-5.897 4.416a1 1 0 1 0 1.263 1.548L8 8.566l6.302 4.898a1 1 0 0 0 1.396-.135l.001-.001a1 1 0 0 0-.261-1.383L8.666 8.562l5.771-4.291a1 1 0 0 0 .261-1.384z" />
                </svg>
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnderConstruction;
