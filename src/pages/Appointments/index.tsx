import React from 'react';

import {
  Container,
  Background,
  Content,
  AnimationContainer,
  Footer,
  ListAppointment,
} from './styles';
import logo from '../../assets/logo.png';
import Appointment from './Appointment';

const Appointments: React.FC = () => (
  <Container>
    <Background>
      <h1>Agenda de Churras</h1>
    </Background>
    <Content>
      <AnimationContainer>
        <ListAppointment>
          <Appointment id="123123123" />
          <Appointment id="123123123" />
          <Appointment id="123123123" />
          <Appointment isCreate />
        </ListAppointment>
      </AnimationContainer>
    </Content>
    <Footer>
      <img src={logo} alt="Trinca" />
    </Footer>
  </Container>
);

export default Appointments;
