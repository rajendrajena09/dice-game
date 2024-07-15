import styled from 'styled-components';
import { Button } from "../styled/Button";

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content{
  h1{
  font-size:91px;
   white-space: nowrap;
  }
  }

`;

const Startplay = ( {toggle} ) => {
    return ( 
        <Container>
            <div>
                <img src="images/dices.png" alt="" />
            </div>
            <div className="content">
                <h1>DICE GAME</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
     );
}
 
export default Startplay;

