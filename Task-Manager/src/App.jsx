import Bar from "./Bar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./Profilepage";
import HomePage from "./HomePage";
import TaskPage from "./TaskPage";
import { TaskProvider } from "./TaskContext";
import GraphsPage from "./GraphsPage";
import SettingsPage from "./Settings";
function App() {
  

  return (
    <>
  <TaskProvider>
   <Router>
      <div className="flex">
        {/* Sidebar always visible */}
        <Bar />

        {/* Main content area changes based on route */}
        <div className="flex-1 md:p-6 p-2 overflow-hidden">
          <Routes>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/Home" element={<HomePage/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Task" element={<TaskPage/>} />
            <Route path="/graphs" element={<GraphsPage/>}/>
        

          </Routes>
        </div>
      </div>
    </Router>
</TaskProvider>
    </>
  )
}

export default App
