import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export const CarouselStyled = styled(Slider)`
    display: none;

    @media (max-width: 1024px) {
        display: block;
    }
`;
