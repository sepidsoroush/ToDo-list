import React from "react";
import {Plus, Calendar , SquareCheck, Square, Trash, Edit} from 'tabler-icons-react';


const TaskList = ({item , checkBox , removeItem, editItem , dateItem}) => {
    return (
        <div className="task-container">
            <div>
                <div className="task-border">
                    <Square className="btn"/>
                    <p>task name</p>
                    <p className="date">01/23</p>
                </div>
                <Trash className="btn"/>
                <Edit className="btn"/>
            </div>
            <div className="add-container">
                <Plus className="btn"/>
                <p>e.g. buy flower</p>
                <Calendar className="btn"/>
            </div>
        </div>
      );
};

export default TaskList;