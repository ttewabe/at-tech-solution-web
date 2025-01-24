import React from 'react'

import { MainContent, WallPaper, CompanyMoto, AboutSection, CustomButton, } from './MainContentComponent.style';
import WallPaperImage from '../assets/wallpaper.jpg';

const MainContentComponent: React.FC = () => {
    return (
        <MainContent>
            <WallPaper backgroundImage={WallPaperImage}>
                <CompanyMoto>
                    <h1>Empowering Ideas With Code</h1>
                    <p>Crafting Websites, Applications, and Dreams Since March 2023.
                        Your trusted partner for web development, application solutions,
                        business presence, and educational services.</p>
                </CompanyMoto>
            </WallPaper>
            <AboutSection>
                <h1>About AT Tech Solutions</h1>
                <p>Founded by passionate software engineers in March 2023,
                    Dream Soft has rapidly evolved into a comprehensive technology
                    solutions provider. Our expertise spans across web development,
                    application creation, and social services.</p>
                <CustomButton>Meet the Team</CustomButton>
            </AboutSection>
        </MainContent>
    )
}

export default MainContentComponent;