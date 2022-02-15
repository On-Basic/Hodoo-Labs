import React from 'react';
import styled from 'styled-components';

const Bookmarks: React.FC = () => {
  const title = `땅콩스쿨만의 특징`
  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <BookmarkContainer>
          <Img src="assets/bookmark/bookmark1.png" alt="bookmark1" />
          <Img src="assets/bookmark/bookmark2.png" alt="bookmark2" />
          <Img src="assets/bookmark/bookmark3.png" alt="bookmark3" />
        </BookmarkContainer>
      </Wrapper>
    </Container>
  )
};

export default Bookmarks;

const Container = styled.section`
  height: 940px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  width: 1000px;
  height: 142px;
  font-size: 45px;
  font-weight: bold;
  line-height: 70px;
  text-align: center;
  white-space: pre-wrap;
  padding: 50px 0;
`;

const BookmarkContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  height: 458px;
  padding-top: 300px;
`;

const Img = styled.img``;