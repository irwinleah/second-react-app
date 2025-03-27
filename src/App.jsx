const App = () => {
  const todo = { text: 'A brand new task', done: true };

  return (
    <>
    <h1>JavaScript in JSX</h1>
    <p>{todo.text}</p>

    <h2>Conditional rendering</h2>
    <p>{todo.done ? `Task Completed - ${todo.text}` : todo.text }</p>
    </>
  );
};

export default App;