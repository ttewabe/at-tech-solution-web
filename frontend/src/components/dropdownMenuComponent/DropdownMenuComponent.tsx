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
} from '../../header/Header.style';
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaYoutube } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

// Let's take out the dropdown menu from the header and make it a separate component in this file
const DropdownMenuComponent: React.FC = () => {
    return (
        <DropdownMenu>
            <CloseButton>{<FaXmark />}</CloseButton>
            <DropdownLogoContainer>
                <Logo>AT Tech</Logo>
            </DropdownLogoContainer>
            <DropdownContentContainer>
                <DropdownList>
                    <DropdownListItem>Website Development</DropdownListItem>
                    <DropdownListItem>Social Services</DropdownListItem>
                    <DropdownListItem>Business Card Development</DropdownListItem>
                    <DropdownListItem>Teaching Coding</DropdownListItem>
                    <DropdownListItem>Application Development</DropdownListItem>
                </DropdownList>
            </DropdownContentContainer>
            <ContactList>
                <SocialMediaLogos>
                    <SocialMediaLogoItem>{<FaFacebook />}</SocialMediaLogoItem>
                    <SocialMediaLogoItem>{<FaInstagram />}</SocialMediaLogoItem>
                    <SocialMediaLogoItem>{<FaLinkedin />}</SocialMediaLogoItem>
                    <SocialMediaLogoItem>{<FaTelegram />}</SocialMediaLogoItem>
                    <SocialMediaLogoItem>{<FaYoutube />}</SocialMediaLogoItem>
                </SocialMediaLogos>
            </ContactList>
        </DropdownMenu>
    );
};

export default DropdownMenuComponent;
