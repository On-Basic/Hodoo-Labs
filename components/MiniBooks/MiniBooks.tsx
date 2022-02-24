import React from 'react';
import styled from 'styled-components';
import Books from '../MiniBooks/Books';

const MiniBooks: React.FC = () => {
  const title = `입학 전 1000권 읽기!
  땅콩스쿨로 도전해보세요.`;
  const text = `매달 새로운 32권의 어린이 베스트 셀러를 만날 수 있어요.
  독서를 통해 배움의 즐거움을 알아가 보세요.`;
  return (
    <>
      <Container>
        <Wrapper>
          <TextContainer>
            <Title>{title}</Title>
            <Text>{text}</Text>
          </TextContainer>
        </Wrapper>
      </Container>
      <Books />
    </>
  );
};

export default MiniBooks;

const Container = styled.section`
  display: flex;
  align-items: center;
  height: 400px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 0 20px;
  margin: 100px auto;
`;

const TextContainer = styled.div`
  margin: 0px auto;
  padding-top: 50px;
`;

const Title = styled.div`
  width: 600px;
  height: 150px;
  font-size: 45px;
  font-weight: bold;
  text-align: center;
  white-space: pre-wrap;
`;

const Text = styled.div`
  width: 600px;
  height: 150px;
  font-size: 20px;
  white-space: pre-wrap;
  text-align: center;
  margin-top: 30px;
`;
