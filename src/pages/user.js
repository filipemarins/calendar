import React from 'react';
import Head from 'next/head';

import Typography from '@material-ui/core/Typography';

import Content from '../components/content';
import Dashboard from '../components/dashboard';

const User = () => (
  <>
    <Head>
      <title>Dashboard | User</title>
    </Head>
    <Dashboard>
      <Content>
        <Typography paragraph>Dorime, ameno - user</Typography>
      </Content>
    </Dashboard>
  </>
);

export default User;
