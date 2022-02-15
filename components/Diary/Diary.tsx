import React from 'react';
import styled from 'styled-components';

const Diary: React.FC = () => {
  const title =
    `매일 매일 
알아서 기록하는 독서 일기`;
  const text =
    `오늘은 아이가 어떤 책을 읽었는지, 어떤 활동에 참여했는지 독서일기를 통해 확인해보세요.
읽기만 해도 자동으로 기록되고, 공유도 가능해요.`
  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <ContentContainer>
          <ContentWrapper>
            <Img src="assets/diary/diary1.png" alt="diary1" />
            <Img src="assets/diary/diary2.png" alt="diary2" />
          </ContentWrapper>
          <ContentWrapper>
            <Img src="assets/diary/diary_phone.png" alt="diary_phone" />
          </ContentWrapper>
          <ContentWrapper>
            <Img src="assets/diary/diary3.png" alt="diary3" />
            <Img src="assets/diary/diary4.png" alt="diary4" />
          </ContentWrapper>
        </ContentContainer>
      </Wrapper>
    </Container>
  );
}

export default Diary;

const Container = styled.section`
  height: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;  
  background-color: #f9f9f9;
`;

const Wrapper = styled.div`
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 1000px;
  height: 142px;
  font-size: 45px;
  font-weight: bold;
  line-height: 70px;
  text-align: center;
  white-space: pre-wrap;
  padding: 100px 0;
`;

const Text = styled.div`
  width: 1000px;
  height: 75px;
  font-size: 20px;
  white-space: pre-wrap;
  margin: 50px 0 0;
  line-height: 40px;
  text-align: center;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 1000px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 450px;
  padding-top: 100px;
`;

const Img = styled.img`
  padding-bottom: 100px;
  padding-right: 50px;
  border-radius: 10px;
`;