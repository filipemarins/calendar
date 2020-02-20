import React from 'react';
import Head from 'next/head';

import Typography from '@material-ui/core/Typography';

import Content from '../components/content';
import Dashboard from '../components/dashboard';

const Calendar = () => (
  <>
    <Head>
      <title>Dashboard | Calendar</title>
    </Head>
    <Dashboard>
      <Content>
        <Typography paragraph>Dorime, ameno - calendar</Typography>
      </Content>
    </Dashboard>
  </>
);

export default Calendar;
