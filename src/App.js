import React from 'react'
import ProfileForm from './Components/ProfileForm/ProfileForm'
import ProfileCard from './Components/ProfileCard/ProfileCard'
import BlogFeed from './Components/BlogFeed/BlogFeed'
import Counter from './Components/Counter/Counter'
import LoginSystem from './Components/LoginSystem/LoginSystem'
import TodoApp from './Components/TodoApp/TodoApp'
import BlogPost from './Components/TaskDate19sSep/BlogPost/BlogPost'
import CountdownTImer from './Components/TaskDate19sSep/Countdown/CountdownTImer'
import ThemeToggle from './Components/TaskDate19sSep/ThemeToggle/ThemeToggle'
import { ThemeProvider } from './Components/TaskDate19sSep/ThemeToggle/ThemeContext'
import TaskManager from './Components/TaskDate19sSep/TaskManagement/TaskManager'
import MultiStepForm from './Components/TaskDate19sSep/MultiStepForm/MultiStepForm'
import Dashboard1 from './Components/TaskDate24Sep/HOC/Dashboard1'
import withAuthorization from './Components/TaskDate24Sep/HOC/withAuthorization'
import RenderProps from './Components/TaskDate24Sep/RenderProps/RenderProps'
import Dynamic from './Components/TaskDate24Sep/DynamicForm/Dynamic'
import UserList from './Components/TaskDate24Sep/DataFetching/UserList';
import withDataFetching from './Components/TaskDate24Sep/DataFetching/WithDataFetching';
import ShoppingDetails from './Components/TaskDate24Sep/ShoppingCart/ShoppingDetails'
// import MouseRender from './Components/TaskDate24Sep/MouseTracker/MouseRender'



const ProtectedDashboard = withAuthorization(Dashboard1, ['admin']);

const USERS_API = 'https://jsonplaceholder.typicode.com/users';

const UserListWithData = withDataFetching(USERS_API)(UserList);

const App = () => {

  const user = {
    name: 'Amit',
    role: 'admin',
  };

  const isAuthenticated = true;

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
      {/* <BlogPost />

      <CountdownTImer />

      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>

      <TaskManager />

      <MultiStepForm /> */}

      {/*  Taskdate 24/09/2024 */}
      <div style={{ textAlign: "center", width: "100%" }}><h1>Taskdate 24/09/2024 </h1></div>
      <ProtectedDashboard isAuthenticated={isAuthenticated} user={user} />

      <RenderProps />

      <Dynamic />

      <div style={{ borderBottom: "2px solid black" }}>
        <h1>Task no. 4</h1>
        <h2>HOC for Fetching Data</h2>
        <UserListWithData />
      </div>

      {/* <div>
        <h1>Task no. 5 </h1>
        <MouseRender />
      </div> */}

      <div>
        <h1>Task no. 6</h1>
        <ShoppingDetails />
      </div>

    </div>
  )
}

export default App
