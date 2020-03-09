import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import UserIcon from '@material-ui/icons/AccountCircle';

import Flex from '../shared/flex';
import NavigationLink from '../navigation-link';

const drawerWidth = 67;

const StyledAppBar = styled(AppBar)`
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
`;

const StyledDrawer = styled(Drawer)`
  flex-shrink: 0;
  white-space: nowrap;
`;

const ContentWrapper = styled.div`
  margin-left: ${drawerWidth}px;
  width: 100%;
`;

const InvisibleToolbar = styled.div`
  ${({ theme }) => theme.mixins.toolbar};
`;

const Dashboard = ({ children }) => (
  <>
    <Flex>
      <StyledAppBar>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Calendar
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer variant="permanent">
        <InvisibleToolbar />
        <List disablePadding>
          <NavigationLink title="Home" href="/home">
            <HomeIcon fontSize="large" />
          </NavigationLink>
          <NavigationLink title="Calendar" href="/calendar">
            <CalendarIcon fontSize="large" />
          </NavigationLink>
        </List>
        <Divider />
        <List disablePadding>
          <NavigationLink title="User" href="/user">
            <UserIcon fontSize="large" />
          </NavigationLink>
        </List>
      </StyledDrawer>
      <ContentWrapper>
        <InvisibleToolbar />
        {children}
      </ContentWrapper>
    </Flex>
  </>
);

Dashboard.propTypes = {
  children: node.isRequired,
};

export default Dashboard;
