import { DropdownMenu } from "../../header/Header.style";

// lets take out the dropdown menu from the header and make it a separate component in this file
const DropdownMenuComponent: React.FC = () => {
    return (
        <DropdownMenu>
            <ul>
                <li>Website Development</li>
                <li>Application Development</li>
                <li>Business Card Development</li>
                <li>Teaching Coding</li>
                <li>Social Services</li>
            </ul>
        </DropdownMenu>
    );
}

export default DropdownMenuComponent;
