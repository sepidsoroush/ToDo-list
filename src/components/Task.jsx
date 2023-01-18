import React from "react";
import {SquareCheck, Square, Trash, Edit} from 'tabler-icons-react';

const Task = ({item , checkBox , removeItem, editItem , dateItem}) => {
    return (
        <div className="task-container">
            <div className="task-border">
                <Square className="btn"/>
                <p>task name</p>
                <p className="date">01/23</p>
            </div>
            <Trash className="btn"/>
            <Edit className="btn"/>
        </div>
      );
};

export default Task;