import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LandingPage } from '../pages/LandingPage';

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
<<<<<<< HEAD
=======
        <Route path="/StudentDashboard" element={<StudentDashboard />} />
>>>>>>> d300c93 (khushboo)
      </Routes>
    </BrowserRouter>
  );
};