import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <LogoWrapper>
            <Img src="assets/gif/peanutGif.gif" alt="logo" />
            <Title>땅콩스쿨</Title>
          </LogoWrapper>
          <ul>
            <li>도서구매</li>
            <li>장바구니</li>
            <li>마이페이지</li>
            <li>|</li>
            <li>이용권 관리</li>
            <li>로그인/회원가입</li>
          </ul>
        </Wrapper>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.header`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 90px;
  z-index: 1000;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    display: flex;
  }
  li {
    color: #ffffff;
    font-size: 16px;
    line-height: 23px;
    list-style-type: none;
    margin-right: 50px;
    cursor: pointer;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 370px;
`;

const Title = styled.h1`
  font-size: 20px;
  color: #ffffff;
`;

const Img = styled.img`
  width: 47px;
  height: 30px;
`;
