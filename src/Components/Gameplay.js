import Numberselector from "./Numberselector";
import Roledice from "./Roledice";
import Totalscore from "./Totalscore";
import styled from "styled-components";
import { OutlineButton } from "../styled/Button";
import { Button } from "../styled/Button";
import { useState } from "react";
import Rules from "./Rules";

const Gameplay = () => {
  const [error, setError] = useState("");
  const [score, setScore] = useState(0);
  const [selectedNumber, setselectedNumber] = useState(1);
  const [currentdice, setcurrentdice] = useState(1);
  const [showRules, setshowRules] = useState(false);

  const generaterandomnumber = () => {
    return Math.floor(Math.random() * 6 + 1);
  };

  const roledice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    setcurrentdice(generaterandomnumber);

    if (selectedNumber === currentdice) {
      setScore((prev) => prev + currentdice);
    } else {
      setScore((prev) => prev - 2);
    }

    setselectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
    console.log("hii");
  };

  return (
    <Maincontainer>
      <div className="topsection">
        <Totalscore score={score} />
        <Numberselector
          selectedNumber={selectedNumber}
          setselectedNumber={setselectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <Roledice currentdice={currentdice} roledice={roledice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button
          onClick={() => {
            setshowRules((prev) => !prev);
          }}
        >
          {showRules ? "Hide " : "Show "}Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </Maincontainer>
  );
};

export default Gameplay;

const Maincontainer = styled.div`
  padding: 30px 20px;
  height: 110vh;

  .topsection {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .btns {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 200px;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-left: 550px;
  }
`;
