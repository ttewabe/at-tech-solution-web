import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderProvider from './pages/HeaderProvider';
import MainContentComponent from './mainContent/MainContentComponent';

const AuthenticatedApp: React.FC = () => {
    return (
        <Routes>
            <Route path="" element={<HeaderProvider />}>
                <Route path="home" element={<MainContentComponent />} />
            </Route>
        </Routes>
    );
}

export default AuthenticatedApp;
