import React from 'react';
import styled from 'styled-components';

const Peanut: React.FC = () => {
  const title = `땅콩스쿨이란?`;
  const text =
    `실시간(LIVE)으로, 아이들이 좋아하는 캐릭터 선생님을 통해, 
친구들과 함께 창의독서, 퀴즈 등을 재미있게 즐길 수 있는 온라인 서비스입니다.`
  return (
    <Container>
      <Img src="assets/gif/peanutGif.gif" alt="logo" />
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
};

export default Peanut;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffb100;
  padding: 100px 20px;
`;

const Img = styled.img`
  width: 94px;
  height: 60px;
`;

const Title = styled.div`
  font-size: 50px;
  margin-bottom: 45px;
  color: #ffffff;
`;

const Text = styled.div`
  font-size: 24px;
  line-height: 40px;
  white-space: pre-wrap;
  text-align: center;
  color: #ffffff;
`;