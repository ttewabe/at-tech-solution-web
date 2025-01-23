import styled from 'styled-components';

export const MenuDetailsContainer = styled.div`
    position: absolute;
    top: 13%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    background-color: #fff;
    color: #000;
    padding: 1rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    z-index: 1000;
    width: 50%;
`;

export const MenuDetailsItem = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MenuDetailsTitle = styled.h4`
    text-align: center;
`;

export const MenuDetailsItemContent = styled.ul`
    list-style: none;
    padding: 0;
`;

export const MenuDetailsItemContentItem = styled.li`
    margin-bottom: 0;
`
