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

export const CompanyMoto = styled.div`
    width: 45%;
    position: absolute;
    top: 35%;
    left: 6%;

    h1 {
        font-weight: 900;
        font-size: 4rem;
        margin-top: 0;
    }

    p {
        font-size: 1.2rem;
        font-weight: 500;
    }
`;

export const AboutSection = styled.section`
    width: 70%;
    text-align: center;
    position: absolute;
    left: 15%;
`;

export const CustomButton = styled.button`
    padding: 1rem 2rem;
    border-radius: 20px;
    border: none;
    background-color: #003366;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #000;
        color: #ffffff;
    }
`;
