import axios from ".";

export const getTodosAPI = () => axios.get("api/todos");
