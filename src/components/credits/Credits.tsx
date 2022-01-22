import React from 'react';

import styles from './styles.module.scss';
import strings from '../../themes/strings';

const Credits = () => {
  return (
    <div className={styles.creditsDiv}>
      <p>
        <a
          className={styles.creditLinks}
          href='https://github.com/kingaboros/react-to-do-list'
        >
          {strings.credits}{' '}
        </a>{' '}
        by{' '}
        <a
          className={styles.creditLinks}
          href='https://www.linkedin.com/in/kingaboros/'
        >
          {' '}
          Kinga Boros
        </a>
      </p>
    </div>
  );
};

export default Credits;
