import React, { useState } from 'react';
import { tasks } from '../../data/taskListDb';

import ToDoForm from '../forms/ToDoForm';
import SingleTask from './SingleTask';

const TaskList = () => {
  const [tasksList, setTasksList] = useState<any>(tasks.data);

  const addTasks = (tasks: any) => {
    if (!tasks.value || /^\s*$/.test(tasks.value)) {
      return;
    }
    const newTaskList = [tasks, ...tasksList];
    setTasksList(newTaskList);
  };

  const removeTask = (id: any) => {
    const removeArr = [...tasksList].filter((task: any) => {
      return task.id !== id;
    });
    setTasksList(removeArr);
  };

  const completeTask = (id: any) => {
    let updatedTasks = tasksList.map((task: any) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return tasksList;
    });
    setTasksList(updatedTasks);
  };

  const updateTask = (taskId: any, newValue: any) => {
    if (!newValue.value || /^\s*$/.test(newValue.value)) {
      return;
    }

    setTasksList((prev: any) =>
      prev.map((item: any) => (item.id === taskId ? newValue : item))
    );
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
    </div>
  );
};

export default TaskList;
