import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../features/dashboard/pages/Dashboard";
import Jobs from "../features/jobs/pages/Jobs";
import Candidates from "../features/candidates/pages/Candidate";
import Kanban from "../features/applications/pages/Kanban";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../features/auth/pages/Login";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/jobs"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Jobs />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/candidates"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Candidates />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/applications"
          element={
            <MainLayout>
              <Kanban />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
