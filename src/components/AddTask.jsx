import React from "react";
import {Plus, Calendar} from 'tabler-icons-react';

const AddTask = () => {
    return (
        <div className="add-container">
            <Plus className="btn"/>
            <p>e.g. buy flower</p>
            <Calendar className="btn"/>
        </div>
      );
};

export default AddTask;