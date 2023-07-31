import { Link } from "react-router-dom";
import { styled } from "styled-components";
import colors from "../../utils/style/colors";
import DarkLogo from '../../assets/dark-logo.png'
import {StyledLink} from "../../utils/style/Atoms";

const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  align-items: center;
`
const LeftSide = styled.div``;

const RightLink = styled(StyledLink)`
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  right: 0;
`;
function Header(){
    return(
        <NavContainer>
          <LeftSide>
            <Link to="/">
                <HomeLogo src={DarkLogo} alt="logo" />
            </Link>
          </LeftSide>
          <RightLink>
              <StyledLink to="/">Accueil</StyledLink>
              <StyledLink to="/freelances">Profils</StyledLink>
              <StyledLink to="/survey/1">Faire le test</StyledLink>
          </RightLink>
        </NavContainer>
    )
}

export default Header