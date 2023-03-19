import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: #f8f9fa;
  padding: 30px 0;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
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

const DefinitionList = styled.dl`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-row-gap: 20px;
  grid-column-gap: 40px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const DefinitionTerm = styled.dt`
  font-size: 24px;
  font-weight: bold;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const DefinitionDescription = styled.dd`
  font-size: 20px;
  line-height: 1.6;
  color: #6c757d;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const TerminologySection = () => {
  return (
    <Section className="px-2">
      <Container>
        <TitleContainer>
          <Title className="display-4">
            Terminology
            <Hr />
          </Title>
        </TitleContainer>
        <DefinitionList>
          <DefinitionTerm>Cloud-based</DefinitionTerm>
          <DefinitionDescription>
            Cloud-based refers to applications, services, or resources that are
            hosted on the internet and accessed remotely instead of locally.
          </DefinitionDescription>
          <DefinitionTerm>Collaboration</DefinitionTerm>
          <DefinitionDescription>
            Collaboration is the process of working together with others to
            achieve a shared goal or task.
          </DefinitionDescription>
          <DefinitionTerm>Upload</DefinitionTerm>
          <DefinitionDescription>
            Uploading refers to the process of transferring a file from a local
            computer to a remote server or storage device.
          </DefinitionDescription>
          <DefinitionTerm>Download</DefinitionTerm>
          <DefinitionDescription>
            Download refers to the process of transferring a file from a remote
            server or storage device to a local computer.
          </DefinitionDescription>
        </DefinitionList>
      </Container>
    </Section>
  );
};

export default TerminologySection;
