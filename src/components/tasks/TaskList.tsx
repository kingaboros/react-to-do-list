import React, { useState } from 'react';

import ClearBtn from '../buttons/ClearBtn';

import styles from '../forms/styles.module.scss';
import ToDoForm from '../forms/ToDoForm';
import SingleTask from './SingleTask';

const TaskList = () => {
  const [tasksList, setTasksList] = useState<string[]>([]);
  const [completeTask, setCompleteTask] = useState<number>(0);

  const addTasks = (tasks: any) => {
    if (!tasks.text || /^\s*$/.test(tasks.text)) {
      return;
    }

    const newTaskList = [tasks, ...tasksList];

    setTasksList(newTaskList);
    console.log(...tasksList);
  };

  return (
    <div>
      <ToDoForm onSubmit={addTasks} />
      <SingleTask
        tasksList={tasksList}
        completeTask={completeTask}
        removeTask={removeTask}
        updateTask={updateTask}
      />

      <ClearBtn />
    </div>
  );
};

export default TaskList;
