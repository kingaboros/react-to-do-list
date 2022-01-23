import React from 'react';

import styles from './styles.module.scss';
import strings from '../../themes/strings';

const ClearBtn = () => {
  return (
    <div className='d-flex justify-content-end'>
      <p className={styles.clearAll}>{strings.clearText}</p>
    </div>
  );
};

export default ClearBtn;
