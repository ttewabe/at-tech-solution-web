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

export const HeaderDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 15px;
`;

export const HeaderNavitems = styled.div`
    display: flex;
    gap: 40px;
    justify-content: space-between;

    span {
        cursor: pointer;
    }
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 20px;

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
    font-weight: bold;
    cursor: pointer;
`;

export const DropdownMenu = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    color: black;
    border: 1px solid #c9c9c9;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    z-index: 1000;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
            padding: 10px 20px;
            cursor: pointer;

            &:hover {
                background-color: #e8e5e5;
            }
        }
    }
`;
