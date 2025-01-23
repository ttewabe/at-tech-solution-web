import React, { useState } from 'react';
import {
    HeaderContainer,
    Logo,
    ContactInfo,
    HamburgerContainer,
    HamburgerButton,
    HeaderDetails,
    HeaderNavitems,
    HeaderMainLine,
} from './Header.style';
import DropdownMenuComponent from '../components/dropdownMenuComponent/DropdownMenuComponent';

export const Header: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    return (
        <HeaderContainer>
            <Logo>AT Tech</Logo>
            <HeaderMainLine>
                <ContactInfo>
                    <span>Contact: +1-123-456-7890</span>
                    <span>Email: info@attechsolution.com</span>
                </ContactInfo>
                <HeaderDetails>
                    <HeaderNavitems>
                        <span>Home</span>
                        <span>Services</span>
                        <span>Portfolio</span>
                        <span>About</span>
                        <span>Contact Us</span>
                    </HeaderNavitems>
                </HeaderDetails>
            </HeaderMainLine>
            <HamburgerContainer>
                <HamburgerButton onClick={toggleMenu}>☰</HamburgerButton>
                {isMenuOpen && <DropdownMenuComponent />}
            </HamburgerContainer>
        </HeaderContainer>
    );
};
