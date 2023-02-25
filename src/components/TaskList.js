import React from "react";
import {Plus, Calendar , SquareCheck, Square, Trash, Edit} from 'tabler-icons-react';


const TaskList = ({item , checkBox , removeItem, editItem , dateItem}) => {
    return (
        <div>
            <div>
                <div>
                    <Square/>
                    <p>task name</p>
                    <p>01/23</p>
                </div>
                <Trash/>
                <Edit/>
            </div>
            <div>
                <Plus/>
                <p>e.g. buy flower</p>
                <Calendar/>
            </div>
        </div>
      );
};

export default TaskList;