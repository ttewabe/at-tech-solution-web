import {
    MenuDetailsContainer, MenuDetailsItem, MenuDetailsTitle,
    MenuDetailsItemContent, MenuDetailsItemContentItem
} from './MenuDetails.style';

interface MenuDetailsProps {
    setMenuDetailsOpen: (isOpen: boolean) => void;
}

const MenuDetails: React.FC<MenuDetailsProps> = ({setMenuDetailsOpen}) => {

    return (
        <MenuDetailsContainer onMouseEnter={() => setMenuDetailsOpen(true)}>
            <MenuDetailsItem>
                <MenuDetailsTitle>Software Developement</MenuDetailsTitle>
                <MenuDetailsItemContent>
                    <MenuDetailsItemContentItem>Web Developement</MenuDetailsItemContentItem>
                    <MenuDetailsItemContentItem>Mobile Developement</MenuDetailsItemContentItem>
                    <MenuDetailsItemContentItem>Web Developement</MenuDetailsItemContentItem>
                </MenuDetailsItemContent>
            </MenuDetailsItem>
            <MenuDetailsItem>
                <MenuDetailsTitle>Education Services</MenuDetailsTitle>
                <MenuDetailsItemContent>
                    <MenuDetailsItemContentItem>Coding Tutorials</MenuDetailsItemContentItem>
                    <MenuDetailsItemContentItem>Coding Tutorials</MenuDetailsItemContentItem>
                    <MenuDetailsItemContentItem>Coding Tutorials</MenuDetailsItemContentItem>
                </MenuDetailsItemContent>
            </MenuDetailsItem>
            <MenuDetailsItem>
                <MenuDetailsTitle>Other Services</MenuDetailsTitle>
                <MenuDetailsItemContent>
                    <MenuDetailsItemContentItem>USIS Form</MenuDetailsItemContentItem>
                    <MenuDetailsItemContentItem>US Citizenship Form</MenuDetailsItemContentItem>
                    <MenuDetailsItemContentItem>Notary Services</MenuDetailsItemContentItem>
                </MenuDetailsItemContent>
            </MenuDetailsItem>
        </MenuDetailsContainer>
    );
};

export default MenuDetails;
