import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { GrUpdate } from 'react-icons/gr';

import strings from '../../themes/strings';
import styles from './styles.module.scss';
import iconStyles from '../tasks/styles.module.scss';

const ToDoForm = (props: any) => {
  const [task, setTask] = useState<any>(props.edit ? props.edit.value : '');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      value: task,
    });

    setTask('');
  };

  return (
    <div className={styles.formDiv}>
      {props.edit ? (
        <Row>
          <Col md={11}>
            <Form.Control
              className={styles.editInput}
              type='text'
              placeholder={strings.updateTask}
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </Col>
          <Col md={1}>
            <button onClick={handleSubmit} className={styles.updateBtn}>
              <GrUpdate className={iconStyles.updateIcon} />
            </button>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col md={11}>
            <Form.Control
              className={styles.formInputs}
              type='text'
              placeholder={strings.addTask}
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </Col>
          <Col md={1}>
            <button onClick={handleSubmit} className={styles.addIcon}>
              +
            </button>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ToDoForm;
