import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudUploadAlt,
  faFileAlt,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

const FeatureSectionContainer = styled.section`
  background-color: white;
  padding: 30px 0;
`;

const FeatureContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureItem = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 40px;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: calc(33.333% - 20px);
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const FeatureIcon = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
  color: var(--primary-color);
`;

const FeatureTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #6c757d;
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 30px;
  text-align: center;
  color: var(--primary-title-color);
  display: inline-block;
  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Hr = styled.hr`
  margin-top: 30px;
`;

const Feature = ({ icon, title, description }) => {
  return (
    <FeatureItem>
      <FeatureIcon>
        <FontAwesomeIcon icon={icon} />
      </FeatureIcon>
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureDescription>{description}</FeatureDescription>
    </FeatureItem>
  );
};

const FeatureSection = () => {
  return (
    <FeatureSectionContainer className="px-2">
      <TitleContainer>
        <Title className="display-4">
          Our Solutions
          <Hr />
        </Title>
      </TitleContainer>
      <FeatureContainer>
        <Feature
          icon={faFileAlt}
          title="Easy File Uploading"
          description="Upload files of any size quickly and easily with Uplofile's intuitive file uploader."
        />
        <Feature
          icon={faCloudUploadAlt}
          title="Cloud-Based"
          description="Store your files securely in the cloud and access them from anywhere, at any time."
        />
        <Feature
          icon={faShare}
          title="File Sharing"
          description="Share your files securely with others by generating shareable links or setting permissions."
        />
      </FeatureContainer>
    </FeatureSectionContainer>
  );
};

export default FeatureSection;
