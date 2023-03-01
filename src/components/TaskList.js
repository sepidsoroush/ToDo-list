import {SquareCheck, Square, Trash, Edit} from 'tabler-icons-react';


const TaskList = ({items , removeItem, editItem , checkItem}) => {
    return (
        <div>
            {items.map((item)=>{
                const {id , title ,time , status} = item;
                return(
                    <article key={id}>
                        <button
                        type="button"
                        onClick={()=>checkItem(id)}
                        >
                            { status? <SquareCheck/> : <Square />}
                        </button>
                        <div>
                            <p>{title}</p>
                            <p>{time}</p>
                        </div>
                        <div>
                            <button
                            type="button"
                            onClick={()=>editItem(id)}
                            >
                                <Edit />
                            </button>
                            <button
                            type="button"
                            onClick={()=>removeItem(id)}
                            >
                                <Trash />
                            </button>
                        </div>
                    </article>
                )
            })}
        </div>
      );
};

export default TaskList;