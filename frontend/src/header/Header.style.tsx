import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #003366;
    color: white;
    padding: 0.4rem 0.8rem 1.2rem 1.2rem;
`;

export const HeaderMainLine = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding-right: 20px;
    font-family: Arial, sans-serif;
    gap: 30px;
`;

export const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
    min-width: max-content;
    padding-top: 10px;
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
    gap: 80px;
    justify-content: space-between;
    margin-right: 20%;

    span {
        cursor: pointer;
        min-width: max-content;
    }
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 20px;
    margin-left: 5%;
    width: 100%;

    span {
        font-size: 12px;
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
    padding-top: 10px;
`;

export const DropdownLogoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem;
`;

export const CloseButton = styled.div`
    color: #aa2222;
    text-align: center;
    line-height: 30px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: solid 1px #a2a2a2;
`;

export const DropdownContentContainer = styled.div`
    display: flex;
    justify-content: left;
    padding-left: 1.5rem;
`;

export const DropdownList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const DropdownListItem = styled.li`
    padding: 10px 20px;
    margin: 0.8rem;
    cursor: pointer;
    background-color: #d9d9d9;
    back &:hover {
        background-color: #e8e5e5;
    }
`;

export const ContactList = styled.div`
    display: flex;
    padding: 5px;
    margin: 1rem 1rem;
    border 1px solid #a2a2a2;
    background-color: #d9d9d9;
`;

export const SocialMediaLogos = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: 0.3rem;
    padding: 0.5rem;
    justify-content: space-between;
`;

export const SocialMediaLogoItem = styled.div`
    width: 10px;
`;

export const DropdownMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    background: white;
    color: black;
    border: 1px solid #c9c9c9;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    width: 350px;
    height: 700px;
    z-index: 1000;
`;
