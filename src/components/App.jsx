import React from 'react'
import Header from './Header'
import MainSection from './MainSection'
import { reducer } from '../stores/reducer'
import { TodoProvider } from '../TodoProvider'

const initialState = {
  todos: [
    {
      text: 'React Hooks',
      completed: false,
      id: 'b967afe24b23'
    },
    {
      text: 'Viva la comunidad de Midu ORALE',
      completed: true,
      id: '43286487fhsdjasd'
    },
    {
      text: 'Hooooola Twitch!',
      completed: false,
      id: '54937fhajd'
    },
    {
      text: 'Context',
      completed: true,
      id: '43242341aaaaa'
    },
    {
      text: 'BUA BUA BUA BUA',
      completed: true,
      id: 'b967afe24a13'
    }
  ],
  visibilityFilter: 'All'
}
const App = () => (
  <TodoProvider initialState={initialState} reducer={reducer}>
    <div>
      <Header />
      <MainSection />
    </div>
  </TodoProvider>
)

export default App
