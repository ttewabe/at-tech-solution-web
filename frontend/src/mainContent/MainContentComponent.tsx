import React from 'react'
import { MainContent, WallPaper } from './MainContentComponent.style';
import WallPaperImage from '../assets/wallpaper.jpg';

const MainContentComponent: React.FC = () => {
    return (
        <MainContent>
            <WallPaper backgroundImage={WallPaperImage}/>
            <h1>Empowering Ideas With Code</h1>
        </MainContent>
    )
}

export default MainContentComponent;