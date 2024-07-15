
import styled from 'styled-components';

const Roledice = ({roledice,currentdice}) => {



    return ( 
       <DiceContainer>
        
       <div className="dice" onClick={roledice}>
            <img src={`images/dice/dice_${currentdice}.png`} />
            
        </div>
       
        <p>Click on Dice to roll</p>

        </DiceContainer>
     );
}
 
export default Roledice;


const DiceContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;
max-height: 250px;

.dice{
    cursor: pointer;
}
p{
    font-size: 18px;
}

`;