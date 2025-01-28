import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderProvider from './pages/HeaderProvider';
import MainContentComponent from './mainContent/MainContentComponent';
import Services from './services/Services';
import Portfolio from './portfolio/Portfolio';

const AuthenticatedApp: React.FC = () => {
    return (
        <Routes>
            <Route path="" element={<HeaderProvider />}>
                <Route path="home" element={<MainContentComponent />} />
                <Route path="services" element={<Services />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="contact" element={<Services />} />
                <Route path="about" element={<Services />} />
            </Route>
        </Routes>
    );
};

export default AuthenticatedApp;
