import React, { useState } from 'react';
import {HeaderContainer, Logo, ContactInfo,HamburgerContainer, HamburgerButton, DropdownMenu} from './Header.style';


export const Header: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    
    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    return (
        <HeaderContainer>
            <Logo>AT Tech</Logo>
            <ContactInfo>
                <span>Contact: +1-123-456-7890</span>
                <span>Email: info@attechsolution.com</span>
            </ContactInfo>
            <HamburgerContainer>
                <HamburgerButton onClick={toggleMenu}>☰</HamburgerButton>
                {isMenuOpen && (
                    <DropdownMenu>
                        <ul>
                            <li>Website Development</li>
                            <li>Application Development</li>
                            <li>Business Card Development</li>
                            <li>Teaching Coding</li>
                            <li>Social Services</li>
                        </ul>
                    </DropdownMenu>
                )}
            </HamburgerContainer>
        </HeaderContainer>
    );
};
