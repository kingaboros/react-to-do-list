import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

import ToDoForm from '../forms/ToDoForm';

import styles from './styles.module.scss';

interface iProps {
  tasksList: string[];
  completeTask: (arg1: number) => void;
  removeTask: (arg1: number) => void;
  updateTask: (arg1: null | number, arg2: string) => void;
}

const SingleTask = ({
  tasksList,
  completeTask,
  removeTask,
  updateTask,
}: iProps) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (value: string) => {
    updateTask(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return tasksList.map((task: any, index: number) => (
    <div
      className={task.isComplete ? 'taskComplete' : 'singleTask'}
      key={index}
    >
      <div key={task.id} onClick={() => completeTask(task.id)}>
        {task.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTask(task.id)}
          className={styles.deleteIcon}
        />
        <TiEdit
          onClick={() => setEdit({ id: task.id, value: task.text })}
          className={styles.editIcon}
        />
      </div>
    </div>
  ));
};

export default SingleTask;
