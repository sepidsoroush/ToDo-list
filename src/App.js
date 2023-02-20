import './App.css';
import {Sun, Moon} from 'tabler-icons-react';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>To Do List</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
