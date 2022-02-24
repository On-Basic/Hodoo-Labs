import React from 'react';
import styled from 'styled-components';

const Main: React.FC = () => {
  return (
    <Container />
  );
};

export default Main;

const Container = styled.section`
  position: relative;
  height: 100vh;
  background-image: url('assets/img_main.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

const Content = styled.div``;

const Wrapper = styled.div``;

