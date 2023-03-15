export const getList = () => {
  return fetch(
    "https://codeacademy-todo.vercel.app/api/list?user=agnieska"
  ).then((response) => response.json());
};