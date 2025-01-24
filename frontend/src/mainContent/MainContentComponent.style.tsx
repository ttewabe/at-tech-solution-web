import styled from 'styled-components';

export const MainContent = styled.div`
    width: 100%;
    padding-bottom: 4rem;
`;

interface WallPaperProps {
    backgroundImage: string;
}

export const WallPaper = styled.div<WallPaperProps>`
    height: 85dvh;
    background-color: #efefef;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
`;
