import styled from 'styled-components';

export const FooterContainer = styled.footer`
    color: #fff;
    position: relative;
    bottom: 0;
    width: 100%;
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const FooterMain = styled.div`
    display: flex;
    height: 15rem;
    background-color: #eeeeee;
    width: 100%;
    padding-right: 1.5rem;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
`;

export const FooterElements = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000;

    h4 {
        margin-bottom: 0;
        margin-left: 25px;
    }

    ul {
        list-style: none;

        li {
            margin-bottom: 5px;
            cursor: pointer;
        }

        li:hover {
            scale: 1.05;
        }
    }

    input {
        padding: 10px;
        width: 250px;
        border: 0.2px solid #999;
        border-radius: 5px;
        margin-right: 10px;
    }

    button {
        padding: 10px;
        border: 0.2px solid #999;
        background-color: #003366;
        color: #fff;
        border-radius: 5px;
        width: 120px;

        &:hover {
            background-color: #114477;
            scale: 1.05;
        }
    }
`;

export const FooterBottom = styled.div`
    background-color: #333;
    display: flex;
    flex-direction: row
    padding: 0 1rem;
    font-size: 12px;
    margin-top: 0;
    width: 100%;
    justify-content: flex-end;
    box-sizing: border-box;
`;
