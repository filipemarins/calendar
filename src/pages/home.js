import React from 'react';
import Head from 'next/head';

import Typography from '@material-ui/core/Typography';

import Content from '../components/content';
import Dashboard from '../components/dashboard';

const Home = () => (
  <>
    <Head>
      <title>Dashboard | Home</title>
    </Head>
    <Dashboard>
      <Content>
        <Typography paragraph>Dorime, ameno - home</Typography>
      </Content>
    </Dashboard>
  </>
);

export default Home;
