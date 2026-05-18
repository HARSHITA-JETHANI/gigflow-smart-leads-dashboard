import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
          }
        />

        <Route
          path="/leads"
          element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
          <ProtectedRoute>
            <AnalyticsPage />
          </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
          <ProtectedRoute>
            <ReportsPage />
          </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={<Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;