import ClientLayout from '../../layouts/ClientLayout';
import { NextPage } from 'next';
import TTodo from '../../types/TTodo';
import styles from './index.module.scss';
import apiTodos from '../../apiMethods/apiTodos';

interface Props {
  todos: TTodo[]
};

const Index: NextPage<Props> = ({ todos }) => {
  return (
    <ClientLayout title="Todos" description="All todos" keywords="todos">
      <h1>Все todos</h1>
      {
        todos.map((todo) => (
          <div key={todo.id}>
            <h2>{todo.title}</h2>
            <p>Завершено: {todo.completed ? 'yes' : 'no'}</p>
          </div>
        ))
      }
    </ClientLayout>
  );
}

export async function getServerSideProps() {
  let todos: TTodo[] = await apiTodos();
  return { props: { todos } }
}

export default Index;