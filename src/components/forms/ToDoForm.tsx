import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

import strings from '../../themes/strings';
import styles from './styles.module.scss';

const ToDoForm = (props: any) => {
  const [task, setTask] = useState<string>('');

  const handleChange = (e: any) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      value: task,
    });
    setTask('');
  };

  return (
    <div className={styles.formDiv} onSubmit={handleSubmit}>
      <Row>
        <Col md={11}>
          <Form.Control
            autoComplete={'off'}
            className={styles.formInputs}
            type='text'
            placeholder={strings.addTask}
            value={task}
            onChange={handleChange}
          />
        </Col>
        <Col md={1}>
          <div>
            <span className={styles.addIcon} onClick={handleSubmit}>
              +
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ToDoForm;
