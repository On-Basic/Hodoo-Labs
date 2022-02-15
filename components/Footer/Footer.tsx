import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  const title = `(주)호두랩스`;

  return (
    <Container>
      <Wrapper>
        <Info>
          <Title>{title}</Title>
          <Text>대표 : 김민우 | 사업자등록번호 : 431-88-01287</Text>
          <Text>서율특별시 강남구 언주로 637, 12층 (논현동, 싸이칸홀딩스타워) </Text>
          <Text>제주특별시 서귀포시 중정로 86, 304</Text>
          <Text>통신판매업 신고번호 : 2019-서울강남-00301호</Text>
          <Text>© Hodoo Labs. ALL RIGHTS RESERVED</Text>
        </Info>
      </Wrapper>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 0px;
`;
const Info = styled.div``;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 35px;
`;

const Text = styled.div`
  font-size: 14px;
  line-height: 24px;
`;
