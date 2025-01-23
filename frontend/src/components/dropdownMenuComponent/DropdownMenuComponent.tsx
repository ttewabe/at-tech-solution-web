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

// lets take out the dropdown menu from the header and make it a separate component in this file
const DropdownMenuComponent: React.FC = () => {
    return (
        <DropdownMenu>
            <CloseButton>X</CloseButton>
            <DropdownLogoContainer>
                <Logo>AT Tech</Logo>
            </DropdownLogoContainer>
            <DropdownContentContainer>
                <DropdownList>
                    <DropdownListItem>Website Development</DropdownListItem>
                    <DropdownListItem>Social Services</DropdownListItem>
                    <DropdownListItem>
                        Business Card Development
                    </DropdownListItem>
                    <DropdownListItem>Teaching Coding</DropdownListItem>
                    <DropdownListItem>Application Development</DropdownListItem>
                </DropdownList>
            </DropdownContentContainer>
            <ContactList>
                <SocialMediaLogos>
                    <SocialMediaLogoItem>h</SocialMediaLogoItem>
                    <SocialMediaLogoItem>y</SocialMediaLogoItem>
                    <SocialMediaLogoItem>h</SocialMediaLogoItem>
                    <SocialMediaLogoItem>y</SocialMediaLogoItem>
                    <SocialMediaLogoItem>h</SocialMediaLogoItem>
                    <SocialMediaLogoItem>y</SocialMediaLogoItem>
                </SocialMediaLogos>
            </ContactList>
        </DropdownMenu>
    );
};

export default DropdownMenuComponent;
