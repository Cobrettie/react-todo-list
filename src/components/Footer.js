import react from 'react';
import FilterLink from '../ContainerComponents/FilterLink';
import { VisibilityFilters } from '../actions/actions';

function Footer() {
  return (
    <div>
      <span>Show: </span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
  )
}