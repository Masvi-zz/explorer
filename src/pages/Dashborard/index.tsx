import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore respositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="testes">
          <img src="https://avatars0.githubusercontent.com/u/14143177?s=460&u=61d95e626cbcff279835d90e323fc12017694631&v=4" alt="Jean Masvi"></img>
          <div>
            <strong>teste/teste-repositorio</strong>
            <p>apenas uma descrição de um repositorio ficticio</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="testes">
          <img src="https://avatars0.githubusercontent.com/u/14143177?s=460&u=61d95e626cbcff279835d90e323fc12017694631&v=4" alt="Jean Masvi"></img>
          <div>
            <strong>teste/teste-repositorio</strong>
            <p>apenas uma descrição de um repositorio ficticio</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="testes">
          <img src="https://avatars0.githubusercontent.com/u/14143177?s=460&u=61d95e626cbcff279835d90e323fc12017694631&v=4" alt="Jean Masvi"></img>
          <div>
            <strong>teste/teste-repositorio</strong>
            <p>apenas uma descrição de um repositorio ficticio</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>

    </>
  );
};

export default Dashboard;

