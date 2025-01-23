import { useState } from 'react';
import {
    MenuDetailsContainer, MenuDetailsItem, MenuDetailsTitle,
    MenuDetailsItemContent, MenuDetailsItemContentItem
} from './MenuDetails.style';

const MenuDetails: React.FC = () => {

    const [menuDetailsOpen, setMenuDetailsOpen] = useState<boolean>(false);

    return (
        <MenuDetailsContainer
            onMouseEnter={() => setMenuDetailsOpen(true)}
            onMouseLeave={() => setMenuDetailsOpen(false)}>
            <MenuDetailsItem>
                <MenuDetailsTitle>Software Developement</MenuDetailsTitle>
                <MenuDetailsItemContent>
                    <MenuDetailsItemContentItem>sd</MenuDetailsItemContentItem>
                </MenuDetailsItemContent>
            </MenuDetailsItem>
            <MenuDetailsItem>
                <MenuDetailsTitle>Education Services</MenuDetailsTitle>
                <MenuDetailsItemContent>
                    <MenuDetailsItemContentItem>sd</MenuDetailsItemContentItem>
                </MenuDetailsItemContent>
            </MenuDetailsItem>
            <MenuDetailsItem>
                <MenuDetailsTitle>Other Services</MenuDetailsTitle>
                <MenuDetailsItemContent>
                    <MenuDetailsItemContentItem>sd</MenuDetailsItemContentItem>
                </MenuDetailsItemContent>
            </MenuDetailsItem>
        </MenuDetailsContainer>
    );
};

export default MenuDetails;
