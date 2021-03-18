import { BASE_URL, PORT } from '../config';

const apiHello: Function = async (): Promise<string> => {
  try {
    let response = await fetch(`${BASE_URL}:${PORT}/api/hello`);
    let data = await response.json();
    return data.message;
  } catch (error) {
    console.error(error);
    return '';
  }
}

export default apiHello;