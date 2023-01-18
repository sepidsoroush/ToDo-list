import './App.css';
import {Sun, Moon} from 'tabler-icons-react';
import Task from './components/Task';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <AddTask/>
      <Task />
    </div>
  );
}

export default App;
