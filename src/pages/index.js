import React from 'react';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Button from 'components/shared/button';
import Flex from 'components/shared/flex';
import Form from 'components/shared/form';
import Copyright from 'components/shared/copyright';

const Index = () => {
  return (
    <Container maxWidth="sm">
      <Form>
        <Flex
          flexDirection="column"
          my={15}
          mx="auto"
          maxWidth="280px"
          textAlign="center"
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Login
          </Typography>
          <TextField label="Email" margin="normal" />
          <TextField label="Password" type="password" margin="normal" />
          <Button variant="contained" color="primary" my="20px">
            Sign In
          </Button>
          <Copyright />
        </Flex>
      </Form>
    </Container>
  );
};

export default Index;
