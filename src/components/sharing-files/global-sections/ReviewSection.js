import React from "react";
import styled from "styled-components";

const ReviewSectionContainer = styled.section`
  background-color: #f8f9fa;
  padding: 30px 0;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const ReviewItem = styled.div`
  width: calc(50% - 20px);
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    text-align: center;
  }
`;

const ReviewImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
`;

const ReviewText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewAuthor = styled.h4`
  font-size: 20px;
  margin-bottom: 10px;
`;

const ReviewContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
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

const Review = ({ image, author, content }) => {
  return (
    <ReviewItem>
      <ReviewImage src={image} />
      <ReviewText>
        <ReviewAuthor>{author}</ReviewAuthor>
        <ReviewContent>{content}</ReviewContent>
      </ReviewText>
    </ReviewItem>
  );
};

const ReviewSection = () => {
  return (
    <ReviewSectionContainer className="px-2">
      <TitleContainer>
        <Title className="display-4">
          Feedback from Users
          <Hr />
        </Title>
      </TitleContainer>
      <ReviewContainer>
        <Review
          image="user-john.jpg"
          author="John Doe"
          content="Uplofile has been a game changer for my business. The ease of use and flexibility it offers has made it my go-to file management platform."
        />
        <Review
          image="user-jane.jpg"
          author="Jane Smith"
          content="I have been using Uplofile for a few months now and it has really helped me stay organized with my files. I highly recommend it!"
        />
        <Review
          image="user-bob.jpg"
          author="Bob Johnson"
          content="I was hesitant to try Uplofile at first, but I'm glad I did. It has made sharing files with my team a breeze."
        />
        <Review
          image="user-sara.jpg"
          author="Sara Lee"
          content="Uplofile has saved me so much time and effort. I used to spend hours searching for files, but now everything is in one place and easy to find."
        />
      </ReviewContainer>
    </ReviewSectionContainer>
  );
};

export default ReviewSection;
