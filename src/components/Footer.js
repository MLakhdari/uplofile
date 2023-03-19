import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
`;

const FooterText = styled.p`
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6">
            <FooterText>Uplofile &copy; {new Date().getFullYear()}</FooterText>
          </div>
          <div className="col-md-6">
            <FooterText>Développé avec amour par MedLakh</FooterText>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
