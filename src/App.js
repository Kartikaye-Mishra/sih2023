import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Container/Common/Landing/Landing";
import Dashboard from "./Container/Student/Dashboard/Dashboard";
import StudentOutlet from "./Container/Student/StudentOutlet";
import Report from "./Container/Student/Reports/Report";
import TeacherReport from "./Container/Teacher/Reports/Report";
import TeacherOutlet from "./Container/Teacher/TeacherOutlet";
import Login from "./Container/Common/Login/login";
import Profile from "./Container/Student/Profile/Profile";
import AddQuestion from "./Container/Teacher/AddQuestion/AddStudent";
import MyStudent from "./Container/Teacher/My Students/StudentList";
import Training from "./Container/Student/Training/Training"
import Counselling from "./Container/Student/Counselling/Counselling";
import StudentTest from "./Container/Student/StudentTest/MainPage";
import AddFeedback from "./Container/Teacher/AddFeedback.js/AddFeedback";
import RegistrationPage from "./Container/Common/Registration/Regis";
import MainPractise from "./Container/Student/Training/StudentPractice/MainPractice";
import AddStudent from "./Container/Teacher/AddQuestion/AddStudent";
function App() {
  return (
    <div className="root_container">
      <div className="main">
        <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<Landing />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/test" element={<StudentTest/>}></Route>
            <Route path="/register" element={<RegistrationPage/>}></Route>
            <Route path="/training_test" element={<MainPractise/>}></Route>
            <Route path="/student" element={<StudentOutlet />}>
              <Route path="" element={<Dashboard />}></Route>
              {/* <Route path="profile" element={<Profile />}></Route> */}
              <Route path="report" element={<Report />}></Route>
              <Route path="training" element={<Training />}></Route>
              <Route path="counselling" element={<Counselling />}></Route>

            </Route>

{/* http://172.172.170.251:5000 */}

            <Route path="/teacher" element={<TeacherOutlet />}>
              {/* <Route path="" element={<Dashboard />}></Route> */}
              <Route path="addquestion" element={<AddQuestion />}></Route>
              <Route path="addfeedback" element={<AddFeedback />}></Route>
              <Route path="addStudent" element={<AddStudent />}></Route>
              <Route path="" element={<MyStudent />}></Route>
              <Route path="profile" element={<Profile />}></Route>
              <Route path="report" element={<Report />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
