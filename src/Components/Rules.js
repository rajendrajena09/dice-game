import styled from 'styled-components';

const Rules = () => {
    return ( 
        <Rulescontainer>
            <h2>How to play dice game</h2>
            <div className="text">
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                <p>if you get wrong guess then  2 point will be dedcuted </p>
            </div>
        </Rulescontainer>
     );
}
 
export default Rules;

const Rulescontainer = styled.div`

background-color: #FBF1F1;
max-width: 750px;
padding: 20px;
margin: 0 auto;
margin-top: 40px;
border-radius: 10px;
text-align: start;

h2{
    font-size: 24px;
}
p{
    margin-top: 24px;
}

`;