import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './index.css';

import App from './App';

import AdminDashboard from './components/admindashboard';
import AdminLogin from './components/adminlogin';
import ProtectedRoute from './components/ProtectedRoute';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>

      <Routes>

        {/* MAIN WEBSITE */}
        <Route path="/" element={<App />} />

        {/* ADMIN LOGIN */}
        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        {/* PROTECTED ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);