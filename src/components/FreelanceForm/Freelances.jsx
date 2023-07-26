import { styled } from "styled-components";
import Card from "../Card";
import { freelanceProfiles } from "./data";

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 350px 350px;
`;
function Freelances(){
    return(
        <div>
            <h1>Freelances</h1>
            <CardsContainer>
                {freelanceProfiles.map((freelanceProfile, index) => (
                    <Card
                        key={`${freelanceProfile.name}-${index}`}
                        label={freelanceProfile.name}
                        picture={freelanceProfile.picture}
                        title={freelanceProfile.jobTitle}
                    />
                ))}
            </CardsContainer>
        </div>
    )
}

export default Freelances