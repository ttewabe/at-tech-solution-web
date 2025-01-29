import {
    ContactList,
    DropdownContentContainer,
    DropdownList,
    DropdownListItem,
    DropdownLogoContainer,
    DropdownMenu,
    Logo,
    SocialMediaLogos,
    SocialMediaLogoItem,
    CloseButton,
    ContactListContent,
    DropdownMenuContent,
    OneLineContainer,
    DropdownListItemDiv,
} from '../header/Header.style';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTelegram,
    FaYoutube,
    FaPhone,
    FaAngleRight,
} from 'react-icons/fa';
import { FaXmark, FaEnvelope } from 'react-icons/fa6';

// Let's take out the dropdown menu from the header and make it a separate component in this file
const DropdownMenuComponent: React.FC<{
    setMenuOpen: (isOpen: boolean) => void;
}> = ({ setMenuOpen }) => {
    return (
        <DropdownMenu>
            <DropdownMenuContent>
                <OneLineContainer>
                    <CloseButton onClick={() => setMenuOpen(false)}>
                        {<FaXmark size={25} />}
                    </CloseButton>
                </OneLineContainer>
                <DropdownLogoContainer>
                    <Logo>AT Tech</Logo>
                </DropdownLogoContainer>
                <DropdownContentContainer>
                    <DropdownList>
                        <DropdownListItem>
                            <DropdownListItemDiv>
                                Website Development
                                <FaAngleRight />
                            </DropdownListItemDiv>
                        </DropdownListItem>
                        <DropdownListItem>
                            <DropdownListItemDiv>
                                Social Services
                                <FaAngleRight />
                            </DropdownListItemDiv>
                        </DropdownListItem>
                        <DropdownListItem>
                            <DropdownListItemDiv>
                                Business Card Development
                                <FaAngleRight />
                            </DropdownListItemDiv>
                        </DropdownListItem>
                        <DropdownListItem>
                            <DropdownListItemDiv>
                                Teaching Coding
                                <FaAngleRight />
                            </DropdownListItemDiv>
                        </DropdownListItem>
                        <DropdownListItem>
                            <DropdownListItemDiv>
                                Application Development
                                <FaAngleRight />
                            </DropdownListItemDiv>
                        </DropdownListItem>
                    </DropdownList>
                </DropdownContentContainer>
                <ContactList>
                    <SocialMediaLogos>
                        <SocialMediaLogoItem>
                            {<FaFacebook size={20} />}
                        </SocialMediaLogoItem>
                        <SocialMediaLogoItem>
                            {<FaInstagram size={20} />}
                        </SocialMediaLogoItem>
                        <SocialMediaLogoItem>
                            {<FaLinkedin size={20} />}
                        </SocialMediaLogoItem>
                        <SocialMediaLogoItem>
                            {<FaTelegram size={20} />}
                        </SocialMediaLogoItem>
                        <SocialMediaLogoItem>
                            {<FaYoutube size={20} />}
                        </SocialMediaLogoItem>
                    </SocialMediaLogos>
                    <ContactListContent>
                        <FaPhone size={40} />
                        <span>Contact: +1-123-456-7890</span>
                        <FaEnvelope size={40} />
                        <span>Email: info@attechsolution.com</span>
                    </ContactListContent>
                </ContactList>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DropdownMenuComponent;
