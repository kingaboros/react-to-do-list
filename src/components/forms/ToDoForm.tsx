import React from 'react';
import { Form } from 'react-bootstrap';
import strings from '../../themes/strings';

import styles from './styles.module.scss';

const ToDoForm = () => {
  return (
    <div className={styles.formDiv}>
      <Form.Control
        autoComplete={'off'}
        className={styles.formInputs}
        type='text'
        placeholder={strings.addTask}
      />
    </div>
  );
};

export default ToDoForm;
