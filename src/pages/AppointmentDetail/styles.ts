import styled, { keyframes } from 'styled-components';

import signInBackgroundImg from '../../assets/bbq-pattern.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  position: relative;
`;

export const Background = styled.header`
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
  flex: 1;

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

const loading = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;

  animation: ${appearFromTop} 1s;
`;

export const Load = styled.div`
  margin-top: 20px;
  animation: ${loading} 2s linear infinite;
`;

export const AppointmentInfo = styled.div`
  width: 100%;
  max-width: 588px;
  border-radius: 2px;
  margin-top: -50px;
  min-height: 100px;
  padding: 24px 24px 46px 24px;

  background: #fff;

  ul {
    list-style: none;
    margin-top: 40px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    width: 94px;

    svg {
      margin-right: 8px;
      color: #FFD836;
    }

    span {
      font-weight: bold;
    }
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 8px;

  div {
    display: flex;
    align-items: center;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 20px;
      height: 20px;
      background: #FFD836;
      border-radius: 50%;
      margin-right: 8px;

      svg {
        color: #fff;
      }
    }

    span {
      font-weight: bold;
    }
  }

`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 6px;
  border-bottom: 1px solid #FFD836;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      display: inline-block;
      width: 25px;
      height: 25px;
      border: 3px solid #998220;
      border-radius: 50%;
      margin-right: 20px;
    }
    span + span {
      border: none;
      width: auto;
      height: auto;
    }
  }

  span {
    font-weight: bold;
  }
`;

export const Footer = styled.footer`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-top: auto;
    margin-bottom: 15px;

    width: 48px;
    height: 48px;
  }
`;
