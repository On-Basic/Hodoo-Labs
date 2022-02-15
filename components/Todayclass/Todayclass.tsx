import React from 'react';
import styled from 'styled-components';

const TodayClass: React.FC = () => {
  const title = `실시간 방송 형태로 제공되는 신개념 책읽기`;
  const text =
    `방송 중이라면 언제든 접속하세요.
수강신청, 수업예약 없이 편하게 수업참여가 가능해요.`;
  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </TextContainer>
        <ImgContainer>
          <ImgTab src="assets/todayclass/todayclass_tablet.png" alt="tab" />
          <ImgPhone src="assets/todayclass/todayclass_phone.png" alt="phone" />
        </ImgContainer>
      </Wrapper>
    </Container>

  );
};

export default TodayClass;

const Container = styled.section`
  height: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;  
  background-color: #e5e5e5;
`;

const Wrapper = styled.div`
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
`;

const Title = styled.div`
  width: 600px;
  height: 142px;
  font-size: 45px;
  font-weight: bold;
  line-height: 70px;
  text-align: center;
`;

const Text = styled.div`
  width: 640px;
  height: 75px;
  font-size: 20px;
  white-space: pre-wrap;
  margin: 50px 0 0;
  line-height: 40px;
  text-align: center;
`;

const ImgContainer = styled.div`
  position: relative;
`;

const ImgTab = styled.img`
  width: 1000px;
  height: 860px;
`;

const ImgPhone = styled.img`
  position: absolute;
  width: 300px;
  height: 600px;
  top: 200px;
  left: 800px;

`;

