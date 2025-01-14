import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #003366;
    color: white;
    font-family: Arial, sans-serif;
`;

export const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    span {
        font-size: 14px;
    }
`;

export const HamburgerContainer = styled.div`
    position: relative;
`;

export const HamburgerButton = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
`;

export const DropdownMenu = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    color: black;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
            padding: 10px 20px;
            cursor: pointer;

            &:hover {
                background-color: #f0f0f0;
            }
        }
    }
`;
