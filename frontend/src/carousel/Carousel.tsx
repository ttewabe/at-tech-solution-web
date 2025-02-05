import {
    ProjectLink,
    ServiceCard,
} from '../components/mainContent/homeContent/HomeContent.style';
import { CarouselStyled } from './Carousel.style';
import { FaAngleRight } from 'react-icons/fa';

interface CarouselData {
    title: string;
    description: string[];
}

export const Carousel: React.FC<{ items: CarouselData[] }> = ({ items }) => {
    const settings: any = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <CarouselStyled {...settings}>
            {items.map((item, index) => (
                <ServiceCard key={index}>
                    <ServiceCard className="title-card">
                        <h4>{item.title}</h4>
                    </ServiceCard>
                    {item.description.map((desc, i) => (
                        <p key={i}>{desc}</p>
                    ))}
                    <ProjectLink>
                        View Project <FaAngleRight />
                    </ProjectLink>
                </ServiceCard>
            ))}
        </CarouselStyled>
    );
};
