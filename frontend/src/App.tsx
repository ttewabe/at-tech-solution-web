import React from 'react';
import { Header } from './header/Header';
import MainContentComponent from './mainContent/MainContentComponent';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <MainContentComponent />
        </div>
    );
};

export default App;
