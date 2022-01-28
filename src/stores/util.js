export const getFilteredTodos = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case 'All':
      return todos
    case 'Completed':
      return todos.filter(t => t.completed)
    case 'Active':
      return todos.filter(t => !t.completed)
    default:
      throw new Error(`Unknown filter: ${visibilityFilter}`)
  }
}

export const getCompletedCount = todos =>
  todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0)
