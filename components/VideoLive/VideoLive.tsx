import React from 'react';
import styled from 'styled-components';

const VideoLive: React.FC = () => {
  const title = `랜선 라이브 북클래스`;
  const text =
    `친구들과 함께
그림 그리기, 퀴즈 풀기.
선생님과 대화하며 경험해요!`;

  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </TextContainer>
        <VideoContainer>
          <Img src="assets/videoLive/monitor.png" alt="모니터"></Img>
          <VideoWrapper>
            <Video loop={true} muted={true} autoPlay={true}>
              <source src="assets/videoLive/video.mp4" type="video/mp4" />
            </Video>
          </VideoWrapper>
        </VideoContainer>
      </Wrapper>
    </Container>
  );
};

export default VideoLive;

const Container = styled.section`
  display: flex;
  justify-content: center;
  height: 873px;
  background-image: url("assets/videoLive/background.png");
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
`;

const Title = styled.div`
  width: 290px;
  height: 142px;
  font-size: 50px;
  font-weight: bold;
  line-height: 70px;
`;

const Text = styled.div`
  width: 290px;
  height: 128px;
  font-size: 22px;
  white-space: pre-wrap;
  margin: 50px 0 0;
  line-height: 40px;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 870px;
  height: 700px;
  padding: 50px;
`;

const VideoWrapper = styled.div`
  width: 700px;
  height: 526px;
`;

const Img = styled.img`
  
`;

const Video = styled.video`
  position: absolute;
  width: 700px;
  height: 530px;
  object-fit: fill;
  top: 75px;
  left: 80px;
  border-radius: 20px;
`;