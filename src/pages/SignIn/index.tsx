import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiMail, FiLock } from 'react-icons/fi';

import {
  Container,
  Background,
  Content,
  AnimationContainer,
} from './styles';
import logo from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Container>
      <Background>
        <h1>Agenda de Churras</h1>
      </Background>
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={() => { console.log('teste'); }}>
            <div>
              <h3>Login</h3>
              <Input icon={FiMail} type="text" name="email" id="email" placeholder="E-mail" />
            </div>
            <div>
              <h3>Senha</h3>
              <Input icon={FiLock} type="password" name="password" id="password" placeholder="Senha" />
            </div>

            <Button type="submit">Entrar</Button>
          </Form>
        </AnimationContainer>
      </Content>
      <img src={logo} alt="Trinca" />
    </Container>
  );
};

export default SignIn;
