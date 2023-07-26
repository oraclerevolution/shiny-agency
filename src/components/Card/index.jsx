import PropTypes from "prop-types";
import { styled } from "styled-components";
import colors from "../../utils/style/colors";

const CardLabel = styled.span`
    color: ${colors.primary};
    font-weight: bold;
    font-size: 22px;
`;

const CardImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding:15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`;

const CardTitle = styled.span`
    font-weight: bold;
    font-size: 22px;
`;
function Card({label, title, picture}){
    return(
        <CardWrapper>
            <CardLabel style={{display: 'flex', flexDirection: 'column', padding: '15px'}}>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <CardTitle>{title}</CardTitle>
        </CardWrapper>
    )
}

Card.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string
}

export default Card