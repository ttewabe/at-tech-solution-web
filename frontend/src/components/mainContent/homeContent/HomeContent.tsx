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
} from './HomeContent.style';
import WallPaperImage from '../../../assets/wallpaper.jpg';
import EducationIcon from '../../../assets/education-icon.png';
import AppDevelopmentIcon from '../../../assets/app-development-icon.png';
import MobileDevelopmentIcon from '../../../assets/mobile-development-icon.jpg';
import { FaAngleRight } from 'react-icons/fa';

const services = [
    {
        icon: AppDevelopmentIcon,
        title: 'Web Development',
        description: 'Custom websites and web applications',
    },
    {
        icon: MobileDevelopmentIcon,
        title: 'Application Development',
        description: 'Mobile and Desktop applications',
    },
    {
        icon: EducationIcon,
        title: 'Educational Services',
        description: 'Coding classes for all ages',
    },
];

const featuredProjects = [
    {
        title: 'Enterprise Resource Planning System',
        description: [
            'An ERP system integrates business processes into a single system, improving efficiency and decision-making.',
            'It provides real-time data and insights for better resource management.',
        ],
    },
    {
        title: 'Inventory Management System',
        description: [
            'An Inventory Management System tracks and manages inventory levels, orders, sales, and deliveries.',
            'It optimizes stock levels, reduces costs, and improves overall efficiency.',
        ],
    },
    {
        title: 'Insurance Claim Management System',
        description: [
            'An Insurance Claim Management System streamlines the process of filing, tracking, and managing insurance claims.',
            'It enhances efficiency, reduces errors, and improves customer satisfaction.',
        ],
    },
    {
        title: 'Customer Relationship Management System',
        description: [
            'A Customer Relationship Management (CRM) system helps manage interactions with customers and prospects.',
            'It improves customer service, boosts sales, and enhances customer retention.',
        ],
    },
];

const HomeContent: React.FC = () => {
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
                    {services.map((service, index) => (
                        <ServiceCard key={index}>
                            <ServiceCardIcon>
                                <img alt="" src={service.icon} />
                            </ServiceCardIcon>
                            <h4>{service.title}</h4>
                            <p>{service.description}</p>
                        </ServiceCard>
                    ))}
                </ServicesGrid>
            </AboutSection>
            <AboutSection key={'featured-projects'}>
                <h1>Featured Projects</h1>
                <p>Explore some of our recent work and success stories</p>
                <ServicesGrid className="featured-projects">
                    {featuredProjects.map((project, index) => (
                        <ServiceCard key={index} className="featured-project-card">
                            <ServiceCard>
                                <h4>{project.title}</h4>
                            </ServiceCard>
                            {project.description.map((desc, i) => (
                                <p key={i}>{desc}</p>
                            ))}
                            <ProjectLink>
                                View Project <FaAngleRight />
                            </ProjectLink>
                        </ServiceCard>
                    ))}
                </ServicesGrid>
            </AboutSection>
        </MainContent>
    );
};

export default HomeContent;
