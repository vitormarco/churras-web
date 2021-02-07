import styled, { keyframes } from 'styled-components';

import signInBackgroundImg from '../../assets/bbq-pattern.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  position: relative;

`;

export const Background = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    margin-top: 70px
  }

  background: url(${signInBackgroundImg}) no-repeat center, #FFD836;
  background-size: cover;
  width: 100%;
  height: 30vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 300px;

  animation: ${appearFromTop} 1s;

`;

export const Footer = styled.footer`
  flex: 1;
  position: relative;

  img {
    position: absolute;
    bottom: 15px;

    width: 48px;
    height: 48px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`;
