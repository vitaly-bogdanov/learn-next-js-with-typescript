import ClientLayout from '../../layouts/ClientLayout';
import { NextPage } from 'next';
import TTodo from '../../types/TTodos';
import styles from './index.module.scss';

interface Props {
  todos: TTodo[]
};

const Index: NextPage<Props> = ({ todos }) => {
  return (
    <ClientLayout title="Todos" description="All todos" keywords="todos">
      <h1>Все todos</h1>
      {
        todos.map((todo) => (
          <div>
            <h2>{todo.title}</h2>
            <p>Завершено: {todo.completed ? 'yes' : 'no'}</p>
          </div>
        ))
      }
    </ClientLayout>
  );
}

export async function getServerSideProps() {
  let response = await fetch("http://localhost:3000/api/todos");
  let todos = await response.json();
  return { props: { todos } }
}

export default Index;