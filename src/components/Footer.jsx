import React from 'react'
import PropTypes from 'prop-types'
import { Link as FilterLink } from './Link'

const FILTER_TITLES = ['All', 'Active', 'Completed']

export const Footer = ({ activeCount, completedCount, onClearCompleted }) => (
  <footer className='footer'>
    <span className='todo-count'>
      <strong>{activeCount || 'No'}</strong>{' '}
      {activeCount === 1 ? 'item' : 'items'} left
    </span>
    <ul className='filters'>
      {FILTER_TITLES.map(filter => (
        <li key={filter}>
          <FilterLink filter={filter}>{filter}</FilterLink>
        </li>
      ))}
    </ul>
    {!!completedCount && (
      <button
        type='button'
        className='clear-completed'
        onClick={onClearCompleted}
      >
        Clear completed
      </button>
    )}
  </footer>
)

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired
}
