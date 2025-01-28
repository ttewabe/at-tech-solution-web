import React from 'react';

import {
    MainContent,
    WallPaper,
    CompanyMoto,
    AboutSection,
    CustomButton,
    WallPaperButtons,
    ServicesGrid,
    ServiceCard,
    ServiceCardIcon,
    ProjectLink,
} from './MainContentComponent.style';
import WallPaperImage from '../../assets/wallpaper.jpg';
import EducationIcon from '../../assets/education-icon.png';
import AppDevelopmentIcon from '../../assets/app-development-icon.png';
import MobileDevelopmentIcon from '../../assets/mobile-development-icon.jpg';
import { FaAngleRight } from 'react-icons/fa';

const MainContentComponent: React.FC = () => {
    return (
        <MainContent>
            <WallPaper $backgroundimage={WallPaperImage}>
                <CompanyMoto>
                    <h1>Empowering Ideas With Code</h1>
                    <p>
                        Crafting Websites, Applications, and Dreams Since March
                        2023. Your trusted partner for web development,
                        application solutions, business presence, and
                        educational services.
                    </p>
                    <WallPaperButtons>
                        <CustomButton>View Portfolio</CustomButton>
                        <CustomButton>Contact Us</CustomButton>
                    </WallPaperButtons>
                </CompanyMoto>
            </WallPaper>
            <AboutSection key={'about-us'}>
                <h1>About AT Tech Solutions</h1>
                <p>
                    Founded by passionate software engineers in March 2023,
                    Dream Soft has rapidly evolved into a comprehensive
                    technology solutions provider. Our expertise spans across
                    web development, application creation, and social services.
                </p>
                <CustomButton>Meet the Team</CustomButton>
                <ServicesGrid>
                    <ServiceCard>
                        <ServiceCardIcon>
                            <img alt="" src={AppDevelopmentIcon} />
                        </ServiceCardIcon>
                        <h4>Web Development</h4>
                        <p>Custom websites and web applications</p>
                    </ServiceCard>
                    <ServiceCard>
                        <ServiceCardIcon>
                            <img alt="" src={MobileDevelopmentIcon} />
                        </ServiceCardIcon>
                        <h4>Application Development</h4>
                        <p>Mobile and Desktop applications</p>
                    </ServiceCard>
                    <ServiceCard>
                        <ServiceCardIcon>
                            <img alt="" src={EducationIcon} />
                        </ServiceCardIcon>
                        <h4>Educational Services</h4>
                        <p>Coding classes for all ages</p>
                    </ServiceCard>
                </ServicesGrid>
            </AboutSection>
            <AboutSection key={'featured-projects'}>
                <h1>Featured Projects</h1>
                <p>Explore some of our recent work and success stories</p>
                <ServicesGrid className="featured-projects">
                    <ServiceCard className="featured-project-card">
                        <ServiceCard>
                            <h4>Enterprise Resource Planning System</h4>
                        </ServiceCard>
                        <p>
                            An ERP system integrates business processes into a
                            single system, improving efficiency and
                            decision-making.
                        </p>
                        <p>
                            It provides real-time data and insights for better
                            resource management.
                        </p>
                        <ProjectLink>
                            View Project <FaAngleRight />
                        </ProjectLink>
                    </ServiceCard>
                    <ServiceCard className="featured-project-card">
                        <ServiceCard>
                            <h4>Inventory Management System</h4>
                        </ServiceCard>
                        <p>
                            An Inventory Management System tracks and manages
                            inventory levels, orders, sales, and deliveries.
                        </p>
                        <p>
                            It optimizes stock levels, reduces costs, and
                            improves overall efficiency.
                        </p>
                        <ProjectLink>
                            View Project <FaAngleRight />
                        </ProjectLink>
                    </ServiceCard>
                    <ServiceCard className="featured-project-card">
                        <ServiceCard>
                            <h4>Insurance Claim Management System</h4>
                        </ServiceCard>
                        <p>
                            An Insurance Claim Management System streamlines the
                            process of filing, tracking, and managing insurance
                            claims.
                        </p>
                        <p>
                            It enhances efficiency, reduces errors, and improves
                            customer satisfaction.
                        </p>
                        <ProjectLink>
                            View Project <FaAngleRight />
                        </ProjectLink>
                    </ServiceCard>
                    <ServiceCard className="featured-project-card">
                        <ServiceCard>
                            <h4>Customer Relationship Management System</h4>
                        </ServiceCard>
                        <p>
                            A Customer Relationship Management (CRM) system
                            helps manage interactions with customers and
                            prospects.
                        </p>
                        <p>
                            It improves customer service, boosts sales, and
                            enhances customer retention.
                        </p>
                        <ProjectLink>
                            View Project <FaAngleRight />
                        </ProjectLink>
                    </ServiceCard>
                </ServicesGrid>
            </AboutSection>
        </MainContent>
    );
};

export default MainContentComponent;
