import TTodosState from '../../types/TTodosState';
import { TODOS_ACTION } from '../actionNames';
import { TTODOS_ACTION } from '../../types/TActionNames';
import TTodo from '../../types/TTodo';
import TAction from '../../types/TAction';

const initialState: TTodosState = {
  todos: [],
  count: 0,
  loaded: false
}

type T = TTODOS_ACTION;
type P = { todos: TTodo[] };

const todosReducer = (state: TTodosState = initialState, action: TAction<T, P>): TTodosState => {
  switch (action.type) {
    case TODOS_ACTION:
      return {
        todos: action.payload.todos,
        count: action.payload.todos.length,
        loaded: true
      };
    default:
      return state;
  }
}

export default todosReducer;