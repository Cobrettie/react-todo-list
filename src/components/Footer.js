import React from 'react';

import FilterLink from '../ContainerComponents/FilterLink';
import { VisibilityFilters } from '../actions/actions';

import styled from 'styled-components';

const FooterContainerDiv = styled.div`
  margin: 20px auto 0;
`;

function Footer() {
  return (
    <FooterContainerDiv>
      <span>Show: </span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </FooterContainerDiv>
  )
}

export default Footer;