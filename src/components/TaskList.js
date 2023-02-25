import React from "react";
import {Plus, Calendar , SquareCheck, Square, Trash, Edit} from 'tabler-icons-react';


const TaskList = ({items , checkBox , removeItem, editItem}) => {
    return (
        <div>
            {items.map((item)=>{
                const {id , title , date} = item;
                return(
                    <article key={id}>
                        <div>
                            {checkBox? <SquareCheck/> : <Square />}
                        </div>
                        <div>
                            <p>{title}</p>
                            <p>{date}</p>
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