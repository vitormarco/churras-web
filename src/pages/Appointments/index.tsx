import React from 'react';

import {
  Container,
  Background,
  Content,
  AnimationContainer,
  Footer,
} from './styles';
import logo from '../../assets/logo.png';

const Appointments: React.FC = () => (
  <Container>
    <Background>
      <h1>Agenda de Churras</h1>
    </Background>
    <Content>
      <AnimationContainer />
    </Content>
    <Footer>
      <img src={logo} alt="Trinca" />
    </Footer>
  </Container>
);

export default Appointments;
