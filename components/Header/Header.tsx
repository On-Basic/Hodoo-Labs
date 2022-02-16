import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <img src="assets/gif/peanutGif.gif" alt="logo" />
          <Img src="assets/headerIcon/peanutschoolIcon.png" alt="text" />
          <ul>
            <li>도서구매</li>
            <li>장바구니</li>
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
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  justify-content: center;
  height: 90px;
`;

const Wrapper = styled.div`
  max-width: 1140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  font-size: 16px;
  img {
    width: 47px;
    height: 30px;
  }
  ul {
    display: flex;
  }
  li {
    list-style-type: none;
    margin-right: 50px;
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 47px;
  height: 30px;
`;
