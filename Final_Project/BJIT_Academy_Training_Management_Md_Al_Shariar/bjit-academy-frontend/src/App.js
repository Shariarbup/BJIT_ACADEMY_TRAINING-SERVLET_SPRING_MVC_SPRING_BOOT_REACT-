import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import HomePage from "./Components/User/HomePage";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Footer/Footer";
import LoginForm from "./Components/Autehntication/LoginForm";
import BatchList from "./Components/Batch/BatchList";
import AddBatch from "./Components/Batch/AddBatch";
import TraineeList from "./Components/Trainee/TraineeList";
import AddTrainee from "./Components/Trainee/AddTrainee";
import TrainerList from "./Components/Trainer/TrainerList";
import AddTrainer from "./Components/Trainer/AddTrainer";
import AdminList from "./Components/Admin/AdminList";
import AddAdmin from "./Components/Admin/AddAdmin";
import CourseList from "./Components/Course/CourseList";
import AddCourse from "./Components/Course/AddCourse";
import AssignmentList from "./Components/Assignment/AssignmentList";
import AddAssignment from "./Components/Assignment/AddAssignment";
import AddAssignmentMark from "./Components/AssignmentMark/AddAssignmentMark";
import AssignmentMarkList from "./Components/AssignmentMark/AssignmentMarkList";
import CourseSessionList from "./Components/CourseSession/CourseSessionList";
import AddCourseSession from "./Components/CourseSession/AddCourseSession";
import AdminHomePage from "./Components/Admin/AdminHomePage";
import TraineeHomePage from "./Components/Trainee/TraineeHomePage";
import TrainerHomePage from "./Components/Trainer/TrainerHomePage";
import Profile from "./Components/Admin/AdminProfile";
import TrainerBatches from "./Components/Trainer/TrainerBatches";
import TrainerProfile from "./Components/Trainer/TrainerProfile";
import AdminProfile from "./Components/Admin/AdminProfile";
import TraineeProfile from "./Components/Trainee/TraineeProfile";
import TrainerCourses from "./Components/Trainer/TrainerCourses";
import TrainerCourseSessions from "./Components/Trainer/TrainerCourseSessions";
import ReactTable from "./Components/User/ReactTable";
import BatchesTrainees from "./Components/Batch/BatchesTrainees";
import CourseSessions from "./Components/Course/CourseSessions";
import TrainerBatchCourses from "./Components/Trainer/TrainerBatchCourses";
import TrainerBatchAssignments from "./Components/Trainer/TrainerBatchAssignments";
function App() {
  const role = localStorage.getItem("roles");
  console.log(role);
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* For Login */}
        <Route exact path="/login" element={<LoginForm />}></Route>
        {role === "ROLE_ADMIN" ? (
          <Route exact path="/" element={<AdminHomePage/>}></Route>
        ) : (
          ""
        )}
        {role === "ROLE_TRAINER" ? (
          <Route exact path="/" element={<TrainerHomePage/>}></Route>
        ) : (
          ""
        )}

        {role === "ROLE_TRAINEE" ? (
          <Route exact path="/" element={<TraineeHomePage/>}></Route>
        ) : (
          ""
        )}
         {/* For Profile */}
         {role === "ROLE_ADMIN" ?
         <Route exact path="/profile" element={<AdminProfile/>}></Route>
          :""}
          {role === "ROLE_TRAINER" ?
         <Route exact path="/profile" element={<TrainerProfile/>}></Route>
         :""}

        {role === "ROLE_TRAINEE" ?
         <Route exact path="/profile" element={<TraineeProfile/>}></Route>
         :""}


        {/* For Admin */}
        <Route exact path="/admins" element={<AdminList />}></Route>
        <Route
          exact
          path="/admins/edit/:adminId"
          element={<AddAdmin />}
        ></Route>
        <Route exact path="/add-admin" element={<AddAdmin />}></Route>
       

        {/* For Trainer */}
        <Route exact path="/trainers" element={<TrainerList />}></Route>
        <Route
          exact
          path="/trainers/edit/:trainerId"
          element={<AddTrainer />}
        ></Route>
         <Route
          exact
          path="/trainers/courses/:batchId"
          element={<TrainerBatchCourses />}
        ></Route>
        <Route
          exact
          path="/trainers/assignments/:batchId"
          element={<TrainerBatchAssignments />}
        ></Route>
        <Route exact path="/add-trainer" element={<AddTrainer />}></Route>
        <Route exact path="/trainerBatchList" element={<TrainerBatches/>}></Route>
        <Route exact path="/trainer/courses" element={<TrainerCourses/>}></Route>
        <Route exact path="/trainer/courses/session/:courseId" element={<TrainerCourseSessions/>}></Route>

        {/* For Trainee */}
        <Route exact path="/trainees" element={<TraineeList />}></Route>
        <Route
          exact
          path="/trainees/edit/:traineeId"
          element={<AddTrainee />}
        ></Route>
        <Route exact path="/add-trainee" element={<AddTrainee />}></Route>

        {/* For Batch */}
        <Route exact path="/batches" element={<BatchList />}></Route>
        <Route
          exact
          path="/batches/edit/:batchId"
          element={<AddBatch />}
        ></Route>
        <Route
          exact
          path="/batches/trainees/:batchId"
          element={<BatchesTrainees />}
        ></Route>
        <Route exact path="/add-batch" element={<AddBatch />}></Route>

        {/* For Course */}
        <Route exact path="/courses" element={<CourseList />}></Route>
        <Route
          exact
          path="/courses/edit/:courseId"
          element={<AddCourse />}
        ></Route>
        <Route
          exact
          path="/courses/courseSessions/:courseId"
          element={<CourseSessions/>}
        ></Route>
        <Route exact path="/add-course" element={<AddCourse/>}></Route>

        {/* For Course Session */}
        <Route
          exact
          path="/courseSessions"
          element={<CourseSessionList />}
        ></Route>
        <Route
          exact
          path="/courseSessions/edit/:courseSessionId"
          element={<AddCourseSession />}
        ></Route>
        <Route
          exact
          path="/add-courseSession"
          element={<AddCourseSession />}
        ></Route>

        {/* For Assignment */}
        <Route exact path="/assignments" element={<AssignmentList />}></Route>
        <Route
          exact
          path="/assignments/edit/:assignmentId"
          element={<AddAssignment />}
        ></Route>
        <Route exact path="/add-assignment" element={<AddAssignment />}></Route>

        {/* For Assignment MArk */}
        <Route
          exact
          path="/assignmentMarks"
          element={<AssignmentMarkList />}
        ></Route>
        <Route
          exact
          path="/assignmentMarks/edit/:assignmentMarkId"
          element={<AddAssignmentMark />}
        ></Route>
        <Route
          exact
          path="/add-assignmentMark"
          element={<AddAssignmentMark />}
        ></Route>

        {/* For Not Found Error Handling */}
        <Route exact path="*" element={<NotFound />}></Route>
        <Route exact path="/reactTable" element={<ReactTable />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
