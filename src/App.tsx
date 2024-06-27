import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage.tsx';
import OnHoldNotificationPage from './pages/NotificationPages/OnHoldNotificationPage.tsx';
import RequestNotificationPage from './pages/NotificationPages/RequestNotificationPage.tsx';
import NewFeatureNotificationPage from './pages/NotificationPages/NewFeatureNotficationPage.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/notification/on-hold/:id"
          element={<OnHoldNotificationPage />}
        />
        <Route
          path="/notification/request/:id"
          element={<RequestNotificationPage />}
        />
        <Route
          path="/notification/new-feature/:id"
          element={<NewFeatureNotificationPage />}
        />
      </Routes>
    </Router>
  );
};

export default App
