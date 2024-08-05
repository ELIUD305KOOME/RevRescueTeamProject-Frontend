import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import UserHomePage from "./components/UserHomePage";
import Footer from "./components/Footer";
import AdminLogin from "./components/AdminLogin";
import AdminSignup from "./components/AdminSignup";
import MechanicLogin from "./components/MechanicLogin";
import UserLogin from "./components/UserLogin";
import UserSignup from "./components/UserSignup";
import MechanicSignup from "./components/MechanicSignup";
import AdminHomePage from "./components/AdminHomePage";
import AdminManager from "./components/AdminManager";
import UsersList from "./components/UsersList";
import MechanicsList from "./components/MechanicsList";
import MechanicHomePage from "./components/MechanicHomePage";
import MechanicReviewsReceived from "./components/MechanicReviewsReceived";
import UserProfile from "./components/UserProfile";
import ServiceList from "./components/ServiceList";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <AdminLogin /> <UserLogin /> <MechanicLogin />{" "}
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                {" "}
                <UserHomePage /> <Footer />{" "}
              </>
            }
          />
          <Route path="/admin_register" element={<AdminSignup />} />
          <Route path="/user_register" element={<UserSignup />} />
          <Route path="/mechanic_register" element={<MechanicSignup />} />
          <Route path="/adminhomepage" element={<AdminHomePage />} />
          <Route path="/adminhomepage/admins" element={<AdminManager />} />
          <Route path="/adminhomepage/users" element={<UsersList />} />
          <Route path="/adminhomepage/mechanics" element={<MechanicsList />} />
          <Route path="/mechanichomepage" element={<MechanicHomePage />} />
          <Route
            path="/mechanichomepage/reviews"
            element={<MechanicReviewsReceived />}
          />
          <Route
            path="/profile"
            element={<UserProfile id={localStorage.getItem("userId")} />}
          />
          <Route path="/home/services" element={<ServiceList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
