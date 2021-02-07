import React from 'react';
import { Link } from 'react-router-dom';
import { FiUsers, FiDollarSign } from 'react-icons/fi';

import {
  Container, Content, Footer, ContentCreate,
} from './styles';

interface AppointmentProps {
  id?: string;
  isCreate?: boolean;
}

const Appointment: React.FC<AppointmentProps> = ({ id, isCreate }) => (
  isCreate ? (
    <Container>
      <Link to={`appointment/${id}/show`}>
        <ContentCreate>
          <h1>Create</h1>
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
