import React from 'react';
import styled from 'styled-components';

const Checkbooks: React.FC = () => {
  const title = `교육 전문가들이 선정한 도서`;
  const text = `호두랩스의 교육 전문가들이
교과 수록, 초등 필독 도서 등
아동 교육에 적합한 도서를
직접 선정해요!`;

  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </TextContainer>
        <ChecksContainer>
          <ChecksWrapper>
            <Checks src="assets/gif/check1.gif" alt="checked" />
            <Books src="assets/checkbook/check_book1.png" alt="books" />
          </ChecksWrapper>
          <ChecksWrapper>
            <Checks src="assets/gif/check2.gif" alt="checked" />
            <Books src="assets/checkbook/check_book2.png" alt="books" />
          </ChecksWrapper>
          <ChecksWrapper>
            <Checks src="assets/gif/check3.gif" alt="checked" />
            <Books src="assets/checkbook/check_book3.png" alt="books" />
          </ChecksWrapper>
        </ChecksContainer>
      </Wrapper>
    </Container>
  );
};

export default Checkbooks;

const Container = styled.section`
  display: flex;
  align-items: center;
  margin: 0px auto;`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  padding: 0 20px;
  margin: 100px auto;
`;

const TextContainer = styled.div`
  padding-right: 70px;
`;

const Title = styled.div`
  width: 350px;
  height: 150px;
  font-size: 45px;
  font-weight: bold;
  white-space: pre-wrap;
  text-align: left;
`;

const Text = styled.div`
  width: 280px;
  height: 150px;
  font-size: 20px;
  white-space: pre-wrap;
  text-align: left;
  margin-top: 30px;
`;

const ChecksContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ChecksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 100px;
`;

const Checks = styled.img`
  width: 100px;
  height: 90px;
`;

const Books = styled.img`
  width: 150px;
  height: 200px;
`;
