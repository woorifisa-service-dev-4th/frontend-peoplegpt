// src/AppRoute.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import LandingPage from './pages/landing/_page';
import LoginPage from './pages/login/_page';
import SignUpPage from './pages/signup/_page';
import DashboardLayout from './pages/dashboard/_layout';
import QnaPage from './pages/dashboard/qna/_page';
import CodeSharePage from './pages/dashboard/codeshare/_page';
import DailyPage from './pages/dashboard/daily/_page';

const AppRoute = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      {/* Protected Dashboard Routes */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        {/* Dashboard Sub-routes */}
        <Route path="" element={<Navigate to="qna" replace />} />
        <Route path="qna" element={<QnaPage />} />
        <Route path="codeshare" element={<CodeSharePage />} />
        <Route path="daily" element={<DailyPage />} />
      </Route>

      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoute;