import Attendance from "@/pages/Attendance";
import Dashboard from "@/pages/Dashboard";
import Employee from "@/pages/Employee";
import Leave from "@/pages/Leave";
import Login from "@/pages/Login";
import Payslip from "@/pages/Payslip";
import Settings from "@/pages/Settings";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import PrintPayslip from "./components/PrintPayslip";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employee />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/payslips" element={<Payslip />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/print/payslip/:id" element={<PrintPayslip />} />
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
