import React from 'react'
import { Footer } from './Footer'
import { TodoList } from './TodoList'
import { useTodo } from '../useTodo'

const getCompletedCount = todos =>
  todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0)

const MainSection = () => {
  const [{ todos, visibilityFilter }, dispatch] = useTodo()
  const todosCount = todos.length
  const completedCount = getCompletedCount(todos)
  return (
    <section className='main'>
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
      <TodoList todos={todos} visibilityFilter={visibilityFilter} />
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
    </section>
  )
}

export default MainSection
