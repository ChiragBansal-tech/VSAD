import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Pages/LoginPage";
import Sign from './Pages/SignupPage';
import PageOTP from "./Pages/OtpPage";
import ForgotPassword from "./Pages/ForgotPasswordPage";
import NewPassword from "./Pages/NewPasswordPage";
import Upload from "./Pages/UploadLogoPage";
import ChangePassword from "./Pages/ChangePasswordPage";
import PendingApproval from "./Pages/PendingApprovalPage";
import ServiceCategories from "./Pages/MaintanceCategoriesPage";
import ServiceCateg from "./Pages/RepairCategoriesPage";
import Dashboard from "./Pages/DashboardPage";
import Servicepage from "./Pages/ServicesPage";
import DetailService from "./Pages/ServiceDetail";
import ServiceRequest from "./Pages/ServiceRequest";
import Inbox from "./Pages/InboxPage";
import Info from './Pages/UserInfoPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/otp" element={<PageOTP />} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/newpassword" element={<NewPassword/>} />
        <Route path="/upload" element={<Upload/>} />
        <Route path="/change" element={<ChangePassword />} />
        <Route path="/service" element={<ServiceCategories />} />
        <Route path='/repairservice' element={<ServiceCateg />} />
        <Route path="/approval" element={<PendingApproval/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Servicepage" element={<Servicepage />} />
        <Route path="/Servicedetail/:id" element={<DetailService />} /> 
        <Route path="/Servicerequest/:id" element={<DetailService />} /> 
        <Route path="/Servicerequest" element={<ServiceRequest />}/>
        <Route path="/inbox" element={<Inbox/>} />
        <Route path='/userdetail' element={<Info />} />
      </Routes>
    </Router>
  );
}
