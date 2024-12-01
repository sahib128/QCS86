import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './pages/welcome';
import Home from './pages/Home'; // Import the Home component
import CourseHub from './pages/Courses'; // Import the CourseHub component
import Signup from './Components/Sign-Tutor/Signup'; // Import the Signup component
import Login from './Components/Login-Form/Login'; // Import the Login component
import ProfilePage from './pages/Profile';
import GroupChat from './Components/Group-Chat/gc';
import SettingsPage from './pages/Settings';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* The Navbar will be part of Welcome */}
        <Route path="/" element={<Home />} />
        {/* Route for CourseHub */}
        <Route path="/courses" element={<CourseHub />} />
        {/* Route for Signup */}
        <Route path="/signup" element={<Signup />} />
        {/* Route for Login */}
        <Route path="/login" element={<Login />} /> {/* Add this line */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/chat" element={<GroupChat />} />
      </Routes>
    </Router>
  );
}

export default App;
