import React, { useCallback, useEffect, useState } from 'react';
import {
  FiUsers, FiDollarSign, FiLoader, FiArrowLeft,
} from 'react-icons/fi';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';

import {
  Container,
  Background,
  Footer,
  Content,
  AnimationContainer,
  AppointmentInfo,
  Header,
  Bottom,
  Top,
  Item,
  Load,
} from './styles';
import logo from '../../assets/logo.png';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import formatValue from '../../utils/formatValue';
import Button from '../../components/Button';

interface IUser {
  id: string;
  user_id: string;
  name: string;
  paid: number;
  total_to_pay: number;
  formattedValue?: string;
}

interface IAppointment {
  total_collected: number;
  total_people: number;
  title: string;
  date: Date;
  formattedDate?: string;
  formattedValue?: string;
}

interface IStateAppointment {
  appointment: IAppointment;
  users: IUser[];
}

interface IParams {
  id_appointment: string;
}

const AppointmentDetail: React.FC = () => {
  const { addToast } = useToast();
  const [loaded, setLoaded] = useState(false);
  const [appointment, setAppointment] = useState<IStateAppointment>({} as IStateAppointment);
  const { id_appointment } = useParams<IParams>();

  const getInfos = useCallback(async () => {
    try {
      const { data } = await api.get(`appointments/${id_appointment}/users`);

      const appointmentFormatted = {
        ...data.appointment,
        formattedDate: format(new Date(data.appointment.date), 'dd/MM'),
        formattedValue: formatValue(data.appointment.total_collected),
      };

      const usersFormatted = data.users.map((user: IUser) => ({
        ...user,
        formattedValue: formatValue(user.total_to_pay),
      }));

      setAppointment({ users: usersFormatted, appointment: appointmentFormatted });
      setLoaded(true);
    } catch (err) {
      const { response: { data } } = err;

      addToast({
        type: data.status,
        title: 'Erro ao buscar o evento',
        description: data.message,
      });
    }
  }, [id_appointment, addToast]);

  useEffect(() => {
    getInfos();
  }, [getInfos]);

  if (!loaded) {
    return (
      <Container>
        <Background>
          <h1>Agenda de Churras</h1>
        </Background>
        <Content>
          <Load>
            <FiLoader size="50" />
          </Load>
        </Content>
        <Footer>
          <img src={logo} alt="Trinca" />
        </Footer>
      </Container>
    );
  }
  return (
    <Container>
      <Background>
        <h1>Agenda de Churras</h1>
      </Background>
      <Content>
        <AnimationContainer>
          <AppointmentInfo>
            <Header>
              <Top>
                <h3>{appointment.appointment.formattedDate}</h3>
                <div>
                  <FiUsers size="15" />
                  <span>{appointment.appointment.total_people}</span>
                </div>
              </Top>
              <Bottom>
                <h2>{appointment.appointment.title}</h2>
                <div>
                  <div>
                    <FiDollarSign size="12" />
                  </div>
                  <span>{appointment.appointment.formattedValue}</span>
                </div>
              </Bottom>
            </Header>
            <ul>
              {appointment.users.map((user: IUser) => (
                <Item key={user.user_id} paid={user.paid === user.total_to_pay}>
                  <div>
                    <span />
                    <span>{user.name}</span>
                  </div>
                  <span>{user.formattedValue}</span>
                </Item>
              ))}
            </ul>
          </AppointmentInfo>
        </AnimationContainer>
        <Footer>
          <Link to="/appointments">
            <FiArrowLeft size="20" />
            voltar
          </Link>
          <Button>Pagar</Button>
        </Footer>
      </Content>
      <Footer>
        <img src={logo} alt="Trinca" />
      </Footer>
    </Container>
  );
};

export default AppointmentDetail;
