import React from 'react'
import ProfileForm from './Components/ProfileForm/ProfileForm'
import ProfileCard from './Components/ProfileCard/ProfileCard'
import BlogFeed from './Components/BlogFeed/BlogFeed'
import Counter from './Components/Counter/Counter'
import LoginSystem from './Components/LoginSystem/LoginSystem'
import TodoApp from './Components/TodoApp/TodoApp'
import Dashboard from './Components/Dashboard/Dashboard'

const App = () => {
  return (
    <div>
      {/* Task 1 */}
      <ProfileForm />
      {/* Task 2 */}
      <ProfileCard />
      {/* Task 3 */}
      <BlogFeed />
      {/*  Task 4 */}
      <Counter />
      {/*  Task 5 */}
      <LoginSystem />
      {/*  Task 6 */}
      <TodoApp />
      {/*  Task 7 */}
      <Dashboard />
    </div>
  )
}

export default App
