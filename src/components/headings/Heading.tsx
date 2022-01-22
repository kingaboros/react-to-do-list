import React from 'react';

import styles from './styles.module.scss';
import strings from '../../themes/strings';

const Heading = () => {
  return (
    <div>
      <h1 className={styles.mainHeading}>{strings.heading}</h1>
    </div>
  );
};

export default Heading;
