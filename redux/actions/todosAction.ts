import TTodo from '../../types/TTodo';
import { TODOS_ACTION } from '../actionNames';

const todosAction = (todos: TTodo[]) => ({
  type: TODOS_ACTION,
  payload: { todos }
});

export default todosAction;