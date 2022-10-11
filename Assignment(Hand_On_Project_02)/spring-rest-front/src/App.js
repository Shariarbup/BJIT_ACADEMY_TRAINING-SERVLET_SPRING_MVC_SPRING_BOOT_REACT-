import logo from './logo.svg';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/Authentication/RegistrationForm';
import LoginForm from './components/Authentication/LoginForm';
import StudentsList from './components/Student/StudentsList';
import StudentProfile from './components/Student/StudentProfile';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
       <HeaderComponent />
        <Routes>
          <Route exact path='/'  element={<HomePage/>}></Route>
          <Route exact path='/students' element={<StudentsList/>}></Route>
          <Route exact path='/add-student' element={<RegistrationForm/>}></Route>
          <Route exact path='/student/edit/:studentId' element={<RegistrationForm/>}></Route>
          <Route exact path='/student/profile/:studentName' element={<StudentProfile/>}></Route>
          <Route exact path='/registration' element={<RegistrationForm/>}></Route>
          <Route exact path='/login' element={<LoginForm/>}></Route>
          <Route exact path='*' element={<NotFound/>}></Route>
        </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
