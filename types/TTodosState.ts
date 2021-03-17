import TTodo from './TTodo';

type TTodosState = {
  todos: TTodo[],
  loaded: boolean,
  count: number
}

export default TTodosState;