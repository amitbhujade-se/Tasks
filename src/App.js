import React from 'react'
import ProfileForm from './Components/ProfileForm/ProfileForm'
import ProfileCard from './Components/ProfileCard/ProfileCard'
import BlogFeed from './Components/BlogFeed/BlogFeed'
import Counter from './Components/Counter/Counter'
import LoginSystem from './Components/LoginSystem/LoginSystem'
import TodoApp from './Components/TodoApp/TodoApp'
import Dashboard from './Components/Dashboard/Dashboard'
import BlogPost from './Components/TaskDate19sSep/BlogPost/BlogPost'
import CountdownTImer from './Components/TaskDate19sSep/Countdown/CountdownTImer'
import ThemeToggle from './Components/TaskDate19sSep/ThemeToggle/ThemeToggle'
import { ThemeProvider } from './Components/TaskDate19sSep/ThemeToggle/ThemeContext'
import TaskManager from './Components/TaskDate19sSep/TaskManagement/TaskManager'
import MultiStepForm from './Components/TaskDate19sSep/MultiStepForm/MultiStepForm'

const App = () => {
  return (
    <div>
      {/* Task 1  */}
      {/* <ProfileForm /> */}
      {/* Task 2 */}
      {/* <ProfileCard /> */}
      {/* Task 3 */}
      {/* <BlogFeed /> */}
      {/*  Task 4 */}
      {/* <Counter /> */}
      {/*  Task 5 */}
      {/* <LoginSystem /> */}
      {/*  Task 6 */}
      {/* <TodoApp /> */}
      {/*  Task 7 */}
      {/* <Dashboard />  */}


      {/*  Taskdate 19/09/2024 */}
      <BlogPost />

      <CountdownTImer />

      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>

      <TaskManager />

      <MultiStepForm />
    </div>
  )
}

export default App
