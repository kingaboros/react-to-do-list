import React from 'react';

import Heading from '../../components/headings/Heading';
import TaskList from '../../components/tasks/TaskList';
import Credits from '../../components/credits/Credits';

import styles from './styles.module.scss';

const LandingPage = () => {
  return (
    <div>
      <Heading />
      <TaskList />
      <Credits />
    </div>
  );
};

export default LandingPage;
