import React from 'react';

import { mountWithTheme } from '../../../test/utils';

import NavigationLink, { StyledNavigationLink } from './navigation-link';

describe('NavigationLink', () => {
  it('Should have selected false if href does not have the same value of pathname', () => {
    const navigation = mountWithTheme(
      <NavigationLink title="Bla" href="/bla">
        test
      </NavigationLink>
    );
    expect(navigation.find(StyledNavigationLink).props()).toHaveProperty(
      'selected',
      false
    );
  });

  it('Should have selected true if href does have the same value of pathname', () => {
    const navigation = mountWithTheme(
      <NavigationLink title="Bla" href="/mockpath">
        test
      </NavigationLink>
    );
    expect(navigation.find(StyledNavigationLink).props()).toHaveProperty(
      'selected',
      true
    );
  });
});
