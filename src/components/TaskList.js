import React, { useState } from "react";
import {SquareCheck, Square, Trash, Edit} from 'tabler-icons-react';


const TaskList = ({items , removeItem, editItem}) => {
    const [check , setCheck] = useState(false);
    return (
        <div>
            {items.map((item)=>{
                const {id , title ,date} = item;
                return(
                    <article key={id}>
                        <button
                        type="button"
                        onClick={()=>setCheck(!check)}
                        >
                            { check? <SquareCheck/> : <Square />}
                        </button>
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