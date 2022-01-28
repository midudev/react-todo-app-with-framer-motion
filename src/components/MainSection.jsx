import React from 'react'
import { Footer } from './Footer'
import { TodoList } from './TodoList'
import { useTodo } from '../useTodo'
import { motion } from 'framer-motion'

const getCompletedCount = todos =>
  todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0)

const MainSection = () => {
  const [{ todos, visibilityFilter }, dispatch] = useTodo()
  const todosCount = todos.length
  const completedCount = getCompletedCount(todos)
  return (
    <motion.section layout className='main'>
      {!!todosCount && (
        <span>
          <input
            className='toggle-all'
            type='checkbox'
            defaultChecked={completedCount === todosCount}
          />
          <label
            onClick={() =>
              dispatch({
                type: 'COMPLETE_ALL'
              })}
          />
        </span>
      )}
      <TodoList
        todos={todos}
        visibilityFilter={visibilityFilter}
        setTodos={todos => dispatch({
          type: 'SET_TODOS',
          payload: {
            todos
          }
        })}
      />
      {!!todosCount && (
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={() => {
            dispatch({
              type: 'CLEAR_COMPLETED'
            })
          }}
        />
      )}
    </motion.section>
  )
}

export default MainSection
