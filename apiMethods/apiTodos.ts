import TTodo from '../types/TTodo';

const apiTodos: Function = async (): Promise<TTodo[]> => {
  try {
    let response = await fetch("http://localhost:3000/api/todos");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default apiTodos;