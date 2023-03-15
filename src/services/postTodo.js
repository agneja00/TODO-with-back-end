export const postTodo = (todo) => {
  return fetch(
    "https://codeacademy-todo.vercel.app/api/todo?user=agnieska",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }
  ).then((response) => response.json());
};