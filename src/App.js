import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <TodoList title={"Today"}/>
      {/* <TodoList title={"Tommorow"}/> */}
    </div>
  );
}

export default App;
