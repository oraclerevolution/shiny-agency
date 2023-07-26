import { Link } from "react-router-dom";
import { styled } from "styled-components";
import colors from "../../utils/style/colors";

const StyledLink = styled(Link)`
    padding: 15px;
    color: ${colors.secondary};
    text-decoration: none;
    font-size: 18px;
`
function Header(){
    return(
        <nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/survey/42">Survey</StyledLink>
            <StyledLink to="/freelances">Freelances</StyledLink>
        </nav>
    )
}

export default Header