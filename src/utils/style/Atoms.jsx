import { Link } from "react-router-dom";
import { styled } from "styled-components";
import colors from "./colors";

export const StyledLink = styled(Link)`
    padding: 1px 15px;
    color: #8186A0;
    text-decoration: none;
    font-size: 18px;
    text-align: center;
    ${(props) =>
        props.headerLink &&
        `background-color: ${colors.primary};
        `}
    ${(props) => 
        props.$isFullLink &&
        `color: white;
        border-radius:30px;
        background-color: ${colors.primary};`}
`;