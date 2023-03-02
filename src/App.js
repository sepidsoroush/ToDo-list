import './App.css';
// import {Sun, Moon} from 'tabler-icons-react';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <div className='flex flex-col justify-center items-center mx-auto my-auto h-screen w-full bg-slate-100'>
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
