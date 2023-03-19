import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: white;
  padding: 30px 0;
`;

const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
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

const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;
  text-align: center;
  max-width: 90%;
  margin: 0 auto 30px;
  color: #6c757d;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.4;
  }
`;

const DescriptionSection = () => {
  return (
    <Section className="px-2">
      <Container>
        <TitleContainer>
          <Title className="display-4">
            Streamline Your File Management <Hr />
          </Title>
        </TitleContainer>
        <Description className="lead">
          Uplofile is the fastest and easiest cloud-based solution for
          uploading, downloading, and sharing files with anyone, anywhere, at
          any time. Whether you need to send large files to a friend,
          collaborate with coworkers on a project, or share documents with
          clients, Uplofile has you covered. With our intuitive interface and
          powerful features, you'll be able to manage your files with ease and
          speed – and best of all, it's free!
        </Description>
      </Container>
    </Section>
  );
};

export default DescriptionSection;
