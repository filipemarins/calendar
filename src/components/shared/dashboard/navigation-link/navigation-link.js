import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { node, string } from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

import Link from 'components/shared/link';

export const StyledNavigationLink = styled(ListItem)`
  padding: ${({ theme }) => theme.spacing(3) - 4}px
    ${({ theme }) => theme.spacing(2)}px;
`;

const NavigationLink = ({ children, href, title, ...rest }) => {
  const { pathname } = useRouter();
  const isSelected = href === pathname;
  return (
    <Tooltip title={title} placement="right" arrow>
      <StyledNavigationLink
        href={href}
        component={Link}
        naked
        button
        selected={isSelected}
        {...rest}
      >
        {children}
      </StyledNavigationLink>
    </Tooltip>
  );
};

NavigationLink.propTypes = {
  children: node.isRequired,
  href: string.isRequired,
  title: string.isRequired,
};

export default NavigationLink;
