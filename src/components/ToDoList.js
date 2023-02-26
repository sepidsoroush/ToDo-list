import { useState } from "react";
import { Plus } from "tabler-icons-react";
import TaskList from "./TaskList";

const getLocalStorage = () =>{
    let list = localStorage.getItem('list');
    if (list) {
        return (list =JSON.parse(localStorage.getItem('list')));
    } else {
        return [];
    }
}

const ToDoList = ()=>{
    const [name , setName] = useState('');
    const [list , setList] = useState(getLocalStorage());
    const handleSubmit =(e)=>{
        e.preventDefault();
        const newItem = { id: new Date().getTime().toString() , title: name};
        setList([...list , newItem]);
        setName('');
    }
    const clearList = ()=>{
        setList([]);
    }
    const removeItem = (id) =>{
        setList(list.filter((item)=> item.id !==id));
    }
    const editItem = (id) =>{
        const selectedItem = list.find((item)=> item.id === id);
        setName(selectedItem.title);
    }
    return(
        <section>
            <form
            onSubmit={handleSubmit}
            >
                <input 
                type="text"
                placeholder="e.g. eggs"
                value={name}
                onChange={(event)=>setName(event.target.value)}
                 />
                <button
                type="submit"
                >
                    <Plus />
                </button>
            </form>
            <div>
                <TaskList 
                items={list} 
                removeItem={removeItem} 
                editItem={editItem} />
            </div>
            <button
            onClick={clearList}
            >
                Clear Items
            </button>
            
        </section>
    )
}
export default ToDoList;