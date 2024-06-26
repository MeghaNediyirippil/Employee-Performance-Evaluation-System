import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import HrHome from "./pages/Hr-Home/HrHome";
import HrRegisterPage from "./pages/Register/HRRegisterPage";
import TLRegisterPage from "./pages/Register/TLRegisterPage";
import HRLoginPage from "./pages/Login/HRLoginPage";
import TeamLeadHome from "./pages/TL-Home/TeamLeadHome";
import EmployeeHome from "./pages/Emp-Home/EmployeeHome";
import HrProfile from "./pages/Hr-Profile/HrProfile";
import TeamLeadProfile from "./pages/TL-Profile/TeamLeadProfile";
import EmpRegister from "./pages/Register/EmpRegister";
import ProjectRegister from "./pages/Register/ProjectRegister";
import HrProjectDetails from "./pages/Project/HrProjectDetails";
import TLProjectDetails from "./pages/Project/TLProjectDetails";
import Login from "./pages/Login/Login";
import TLLoginPage from "./pages/Login/TLLoginPage";
import EmployeeLogin from "./pages/Login/EmployeeLogin";
import TeamCreation from "./pages/TL-Home/TeamCreation";
import ViewEmployees from "./pages/TL-Home/ViewEmployees";
import ViewTeam from "./pages/TL-Home/ViewTeam";
import ViewTeams from "./pages/Hr-Home/ViewTeams";
// import ProjectAssign from "./pages/TL-Home/ProjectAssign";
import AssignProjectEmployees from "./pages/TL-Home/AssignProjectEmployees";
import HrInbox from "./pages/Hr-Home/HrInbox";
import AssignedProjects from "./pages/Hr-Home/AssignedProjects";
import ProjectOfTeams from "./pages/Emp-Home/ProjectOfTeams";
import EmpTeam from "./pages/Emp-Home/EmpTeam";
import TaskUpdateLists from "./pages/Emp-Home/TaskUpdateLists";
import UpdateTask from "./pages/Emp-Home/UpdateTask";
import TaskChart from "./pages/Emp-Home/TaskChart";
import AssignedProject from "./pages/TL-Home/AssignedProject";
import Performance from "./pages/Hr-Home/Performance";
import PerformanceLists from "./pages/Hr-Home/PerformanceLists";
import TaskChartList from "./pages/TL-Home/TaskChartList";
// import UpdatedTasks from "./pages/TL-Home/UpdatedTasks";

const App = () => {
  const [projectData, setProjectData] = useState([]);
  const [requests, setRequests] = useState([]);

  // Define the updateRequests function
  const updateRequests = (updatedRequests) => {
    setRequests(updatedRequests);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/hr-login" element={<HRLoginPage />} />
          <Route path="/tl-login" element={<TLLoginPage />} />
          <Route path="/emp-login" element={<EmployeeLogin />} />

          <Route path="/hr-register" element={<HrRegisterPage />} />
          <Route path="/tl-register" element={<TLRegisterPage />} />
          <Route path="/hr-home" element={<HrHome />} />
          <Route path="/tl-home" element={<TeamLeadHome />} />
          <Route path="/emp-home" element={<EmployeeHome />} />
          <Route path="/hr-profile" element={<HrProfile />} />
          <Route path="/tl-profile" element={<TeamLeadProfile />} />
          <Route path="/emp-register" element={<EmpRegister />} />
          <Route
            path="/register-project"
            element={
              <ProjectRegister
                projectData={projectData}
                setProjectData={setProjectData}
              />
            }
          />
          <Route path="/hr-project-details" element={<HrProjectDetails />} />
          {/* Pass the updateRequests function to HrInbox */}
          <Route
            path="/hr-home/hr-inbox"
            element={<HrInbox updateRequests={updateRequests} />}
          />
          <Route
            path="/tl-project-details"
            element={<TLProjectDetails updateRequests={updateRequests} />}
          />
          {/* <Route path="/emp-assign" element={<ProjectStatusReport />} /> */}
          <Route path="/team-create" element={<TeamCreation />} />
          <Route path="/view-employees" element={<ViewEmployees />} />
          <Route path="/view-team" element={<ViewTeam />} />
          <Route path="/view-teams" element={<ViewTeams />} />
          {/* <Route path="/project-assign/:projectId" element={<ProjectAssign />} /> */}
          <Route
            path="/assign-to-emp/:id"
            element={<AssignProjectEmployees />}
          />
          <Route path="/assigned-projects" element={<AssignedProjects />} />
          <Route path="/emp-team" element={<EmpTeam />} />
          <Route path="/project-of-teams" element={<ProjectOfTeams />} />
          {/* <Route path="/task-update-lists" element={<TaskUpdateLists />} /> */}
          <Route path="/task-chart" element={<TaskChart />} />
          <Route path="/update-tasks/:id" element={<UpdateTask />} />
          <Route path="/assigned-project" element={<AssignedProject />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/performance-lists" element={<PerformanceLists />} />
          <Route path="/task-chart-list" element={<TaskChartList />} />
          {/* <Route path="/updated-tasks" element={<UpdatedTasks />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
