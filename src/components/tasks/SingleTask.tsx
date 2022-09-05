import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
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
}: any) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (value: any) => {
    updateTask(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div className={styles.taskListDiv}>
      {tasksList.map((task: any, index: any) => (
        <div
          className={task.isComplete ? styles.taskComplete : styles.singleTask}
          key={index}
        >
          <Row>
            <Col md={10}>
              <div key={task.id} onClick={() => completeTask(task.id)}>
                {task.name}
              </div>
            </Col>
            <Col md={2}>
              <div className={styles.icons}>
                <RiCloseCircleLine
                  onClick={() => removeTask(task.id)}
                  className={styles.deleteIcon}
                />
                <TiEdit
                  onClick={() => setEdit({ id: task.id, value: task.value })}
                  className={styles.editIcon}
                />
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
};

export default SingleTask;
