import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { Header, RepositoryInfo } from './styles';

import logo from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  //const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="" alt="" />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>teste teste </p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1090</strong>
            <span>Start</span>
          </li>
          <li>
            <strong>1090</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1090</strong>
            <span>Isuies</span>
          </li>
        </ul>
      </RepositoryInfo>
    </>
  )
};

export default Repository;

