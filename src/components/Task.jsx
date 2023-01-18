import React from "react";
import {SquareCheck, Square, Trash, Edit} from 'tabler-icons-react';

const Task = ({item , checkBox , removeItem, editItem , dateItem}) => {
    return (
        <div className="task-container">
            <div className="task-border">
                <Square/>
                <p>task name</p>
                <p className="date">01/23</p>
            </div>
            <Trash/>
            <Edit/>
        </div>
      );
};

export default Task;