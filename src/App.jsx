// src/App.jsx

const App = () => {
  const todo = { text: 'A brand new task', done: true };
  return (
    <>
      <h1>JavaScript in JSX</h1>
      <p>{todo.text}</p>
      
    </>
  );
};

export default App;