import { useState } from "react";
import { Plus , Edit } from "tabler-icons-react";
import TaskList from "./TaskList";
import Alert from "./Alert";

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
    const [isEditing , setIsEditing] = useState(false);
    const [editId , setEditId] =useState(null);
    const [alert , setAlert] = useState({show:false , type :'' ,message:'' });
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!name){
            setAlert({show:true , type :'error' ,message:'Please Enter Value' })
        } else if (name && isEditing){
            setList(
                list.map((item)=>{
                    if(item.id === editId){
                        return {...item , title:name};
                    }
                    return item;
                })
            );
            setName('');
            setEditId(null);
            setIsEditing(false);
            setAlert({show:true , type :'valid' ,message:'Value Changed' });
        }else {
            const newItem = { id: new Date().getTime().toString() , title: name};
            setList([...list , newItem]);
            setName('');
            setIsEditing(false);
        }
    };
    const showAlert = ()=>{
        setAlert({show:false , type :'' ,message:'' });
    }
    const clearList = ()=>{
        setAlert({show:true , type :'error' ,message:'All Items Cleared' });
        setList([]);
    }
    const removeItem = (id) =>{
        setAlert({show:true , type :'error' ,message:'Item Removed' });
        setList(list.filter((item)=> item.id !==id));
    }
    const editItem = (id) =>{
        setIsEditing(true);
        const selectedItem = list.find((item)=> item.id === id);
        setEditId(id);
        setName(selectedItem.title);
    }
    return(
        <section>
            <form
            onSubmit={handleSubmit}
            >
                {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
                <input 
                type="text"
                placeholder="e.g. Buying grocery"
                value={name}
                onChange={(event)=>setName(event.target.value)}
                 />
                <button type="submit">
                    {isEditing ? <Edit/> :<Plus/>}
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