
import styled from 'styled-components';




const Numberselector = ({setError,selectedNumber,setselectedNumber,error}) => {

    const  Arraynum = [1,2,3,4,5,6];
    
    const SelectHandler = (value) => {
        setselectedNumber(value);
        setError("");
    }

    return ( 
        <NumberSelectorContainer>
            <p className='error'>{error}</p>
            <div className="flex">
            {
                Arraynum.map((value,i) => (
                    <Box 
                    isSelected={value===selectedNumber}
                    key={i} onClick={() => SelectHandler(value)}>  
                    {value}
                    </Box>
                ))
            }
            
            </div>
            <p>Select Number</p>
            
        </NumberSelectorContainer>
     );
}
 
export default Numberselector;


const Box = styled.div`

height: 60px;
width: 60px;
border: 1px solid black;
font-size: 24px;
font-weight: 700;
display: grid;
place-items: center;
cursor: pointer;
background-color:${(props) =>( props.isSelected ? "black" : "white")};
color:${(props) =>( !props.isSelected ? "black" : "white")};
`;

const NumberSelectorContainer = styled.div`

display: flex;
flex-direction: column;

.error{
    top: 2px;
    position: absolute;
    color: red;
    padding-bottom:5px;
    align-items: end;
}
.flex{
display: flex;
gap: 24px;
}
p{
    font-size:18px;
    font-weight:500;
    margin-top:6px;
}
`;

