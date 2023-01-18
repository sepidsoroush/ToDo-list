import './App.css';
import {SquareCheck, Square, Trash, Edit, Plus, Calendar, Sun, Moon} from 'tabler-icons-react';
import Task from './components/Task';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className="App">
      <AddTask/>
      <Task />
    </div>
  );
}

export default App;
