import React from 'react'

import { MainContent, WallPaper, CompanyMoto, AboutSection, CustomButton, WallPaperButtons, ServicesGrid, ServiceCard, } from './MainContentComponent.style';
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
                    <WallPaperButtons>
                        <CustomButton>View Portfolio</CustomButton>
                        <CustomButton>Contact Us</CustomButton>
                    </WallPaperButtons>
                </CompanyMoto>
            </WallPaper>
            <AboutSection>
                <h1>About AT Tech Solutions</h1>
                <p>Founded by passionate software engineers in March 2023,
                    Dream Soft has rapidly evolved into a comprehensive technology
                    solutions provider. Our expertise spans across web development,
                    application creation, and social services.</p>
                <CustomButton>Meet the Team</CustomButton>
                <ServicesGrid>
                    <ServiceCard>
                        <h4>Web Development</h4>
                        <p>Custom websites and web applications</p>
                    </ServiceCard>
                    <ServiceCard>
                        <h4>Application Development</h4>
                        <p>Mobile and Desktop applications</p>
                    </ServiceCard>
                    <ServiceCard>
                        <h4>Educational Services</h4>
                        <p>Coding classes for all ages</p>
                    </ServiceCard>
                </ServicesGrid>
            </AboutSection>
        </MainContent>
    )
}

export default MainContentComponent;