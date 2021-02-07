import React from 'react';
import { Link } from 'react-router-dom';
import { FiUsers, FiDollarSign } from 'react-icons/fi';

import {
  Container, Content, Footer, ContentCreate,
} from './styles';

import iconBbq from '../../../assets/icon_bbq.svg';

interface AppointmentProps {
  id?: string;
  isCreate?: boolean;
}

const Appointment: React.FC<AppointmentProps> = ({ id, isCreate }) => (
  isCreate ? (
    <Container>
      <Link to="appointment/create">
        <ContentCreate>
          <div>
            <img src={iconBbq} alt="Barbecue icon" />
          </div>
          <h3>Adicionar Churras</h3>
        </ContentCreate>
      </Link>
    </Container>
  ) : (
    <Container>
      <Link to={`appointment/${id}/show`}>
        <Content>
          <div>
            <h2>01/12</h2>
            <h3>É os guri</h3>
          </div>
          <Footer>
            <div>
              <FiUsers size={16} />
              <span>12</span>
            </div>
            <div>
              <div>
                <FiDollarSign size={16} />
              </div>
              <span>R$ 400</span>
            </div>
          </Footer>
        </Content>
      </Link>
    </Container>
  )
);

export default Appointment;
