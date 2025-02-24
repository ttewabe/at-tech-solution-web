import React from 'react';
import {
    MainWrapper,
    Section,
    SectionTitle,
} from '../../commonStyledComponents/CommonStyledComponents.style';
import {
    ImageContainer,
    ImageContainerSmall,
    ServiceList,
} from './Services.style';
import ServicesImage from '../../../assets/services.jpg';
import CodingEducation from '../../../assets/coding-education.jpg';
import SoftwareDevelopment from '../../../assets/software-development.jpg';
import OtherServices from '../../../assets/other-services.jpg';

const Services: React.FC = () => {
    return (
        <MainWrapper>
            <Section>
                <SectionTitle>Our Services</SectionTitle>
                <p>
                    We offer a diverse set of services from software development
                    to notary services to meet your needs:
                </p>
                <ImageContainer>
                    <img alt="img" src={ServicesImage} />
                </ImageContainer>
            </Section>

            {/* Software Development Section */}
            <Section>
                <SectionTitle>Software Development</SectionTitle>
                <div className="horizontal-container uneven left-bigger">
                    <ServiceList className="left">
                        <li>
                            <p>
                                <b>Web Development: </b>
                            </p>{' '}
                            Building responsive, user-friendly websites to
                            enhance your online presence.
                        </li>
                        <li>
                            <p>
                                <b>Mobile Development: </b>
                            </p>{' '}
                            Creating mobile applications for Android and iOS
                            platforms.
                        </li>
                        <li>
                            <p>
                                <b>Software Maintenance: </b>
                            </p>{' '}
                            Ensuring your software remains up-to-date, secure,
                            and fully functional.
                        </li>
                    </ServiceList>
                    <ImageContainerSmall className="right">
                        <img alt="img" src={SoftwareDevelopment} />
                    </ImageContainerSmall>
                </div>
            </Section>

            {/* Education Services Section */}
            <Section>
                <SectionTitle>Education Services</SectionTitle>
                <div className="horizontal-container uneven right-bigger">
                    <ImageContainerSmall className="left">
                        <img alt="img" src={CodingEducation} />
                    </ImageContainerSmall>
                    <ServiceList className="right">
                        <li>
                            <p>
                                <b>Coding Tutorials: </b>
                            </p>{' '}
                            Offering tutorials to help you master different
                            coding languages and frameworks.
                        </li>
                        <li>
                            <p>
                                <b>Web Design and Development: </b>
                            </p>{' '}
                            Crafting visually appealing and functional websites.
                        </li>
                        <li>
                            <p>
                                <b>Fundamental Algorithms: </b>
                            </p>{' '}
                            Implementing essential algorithms to optimize your
                            software solutions.
                        </li>
                    </ServiceList>
                </div>
            </Section>

            {/* Other Services Section */}
            <Section>
                <SectionTitle>Other Services</SectionTitle>
                <div className="horizontal-container uneven left-bigger">
                    <ServiceList className="left">
                        <li>
                            <p>
                                <b>USIS Form: </b>
                            </p>{' '}
                            Assistance with completing USIS forms accurately.
                        </li>
                        <li>
                            <p>
                                <b>US Citizenship Form: </b>
                            </p>{' '}
                            Guidance and support for US citizenship
                            applications.
                        </li>
                        <li>
                            <p>
                                <b>Notary Services: </b>
                            </p>{' '}
                            Providing certified notary services for your
                            important documents.
                        </li>
                    </ServiceList>
                    <ImageContainerSmall className="right">
                        <img alt="img" src={OtherServices} />
                    </ImageContainerSmall>
                </div>
            </Section>
        </MainWrapper>
    );
};

export default Services;
