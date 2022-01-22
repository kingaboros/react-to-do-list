import React from 'react';

import Credits from '../../components/credits/Credits';
import ToDoForm from '../../components/forms/ToDoForm';
import Heading from '../../components/headings/Heading';

import styles from './styles.module.scss';

const LandingPage = () => {
  return (
    <div className={styles.landingPageDiv}>
      <Heading />
      <ToDoForm />
      <Credits />
    </div>
  );
};

export default LandingPage;
