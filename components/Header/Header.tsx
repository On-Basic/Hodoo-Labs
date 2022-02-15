import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Title />
        {/* <Img src="assets/headerIcon/starIcon.png" /> */}
      </Wrapper>
    </Container>
  );
}

export default Header;

const Container = styled.section``;

const Wrapper = styled.div``;

const Title = styled.span``;

const Img = styled.img``;