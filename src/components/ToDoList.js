import { useState , useRef } from "react";
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
    const [date , setDate] = useState('');
    const dateInputRef = useRef(null);
    const handleChange = (e) =>{
        setDate(e.target.value);
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!name){
            setAlert({show:true , type :'error' ,message:'Please Enter Value' })
        } else if (name && isEditing){
            setList(
                list.map((item)=>{
                    if(item.id === editId){
                        return {...item , title:name , time :date};
                    }
                    return item;
                })
            );
            setName('');
            setEditId(null);
            setIsEditing(false);
            setAlert({show:true , type :'valid' ,message:'Value Changed' });
        }else {
            const newItem = { id: new Date().getTime().toString() , title: name , time : date};
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
    const checkItem =(id) =>{
        const selectedItem = list.map((item)=>{
            if(item.id === id){
                return {...item, status : !item.status};
            }
            return item;
        });
        setList(selectedItem);
    }
    return(
        <section className="bg-white px-20 py-10 rounded-md shadow-lg">
            <h1 className="text-4xl font-semibold text-center text-emerald-900">To Do List</h1>
            <div>
                {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
            </div>
            <form
            className="flex flex-row flex-nowrap  shadow-md rounded  border  my-4 p-2"
            onSubmit={handleSubmit}
            > 
                <input 
                className="p-2 w-96 rounded focus:border-0"
                type="text"
                placeholder="e.g. Buying grocery"
                value={name}
                onChange={(event)=>setName(event.target.value)}
                 />
                <input
                className="p-2 mx-4 w-10 text-lg rounded bg-emerald-500 focus:border-0" 
                type="date"
                value={date}
                onChange={handleChange}
                ref={dateInputRef}
                 />
                <button 
                className="p-2 w-10 rounded bg-emerald-500 text-center"
                type="submit">
                    {isEditing ? <Edit/> :<Plus/>}
                </button>
            </form>
            <div>
                <TaskList
                key={list.id}
                items={list} 
                removeItem={removeItem} 
                editItem={editItem}
                checkItem={checkItem} />
            </div>
            <div className="flex justify-center items-center ">
                <button 
                className="px-4 py-2 bg-red-50 text-red-700 text-sm font-semibold shadow-md"
                onClick={clearList}>
                    Clear Items
                </button>
            </div>
        </section>
    )
}
export default ToDoList;