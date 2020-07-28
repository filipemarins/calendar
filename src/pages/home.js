import React from 'react';
import Head from 'next/head';

import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import EventNoteIcon from '@material-ui/icons/EventNote';

import Card from 'components/shared/card';
import Content from 'components/shared/content';
import Button from 'components/shared/button';
import Dashboard from 'components/shared/dashboard';
import Flex from 'components/shared/flex';

const Home = () => (
  <>
    <Head>
      <title>Dashboard | Home</title>
    </Head>
    <Dashboard>
      <Content>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary">This month</Typography>
                <Typography variant="h5" component="h2">
                  Feb 01 - Feb 28
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary">Appointments Done</Typography>
                <Typography variant="h5" component="h2">
                  3
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary">
                  Appointments Remaining
                </Typography>
                <Typography variant="h5" component="h2">
                  4
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary">
                  Total Appointments
                </Typography>
                <Typography variant="h5" component="h2">
                  7
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Card>
              <CardContent>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                  py="180px"
                  px="40px"
                >
                  <EventNoteIcon style={{ fontSize: 100 }} />
                  <Typography>Make your first appointment</Typography>
                  <Button variant="outlined" my={2} startIcon={<AddIcon />}>
                    Book Appointment
                  </Button>
                </Flex>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Card>
              <CardContent>Ameno</CardContent>
            </Card>
          </Grid>
        </Grid>
      </Content>
    </Dashboard>
  </>
);

export default Home;
