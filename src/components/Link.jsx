import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useTodo } from '../useTodo'

export const Link = ({ children, filter }) => {
  const [{ visibilityFilter }, dispatch] = useTodo()

  return (
    <a
      href='#'
      type='button'
      className={classnames({ selected: filter === visibilityFilter })}
      style={{ cursor: 'pointer' }}
      onClick={() =>
        dispatch({
          type: 'SET_VISIBILITY',
          payload: {
            visibilityFilter: filter
          }
        })}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  filter: PropTypes.string.isRequired
}
