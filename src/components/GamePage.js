import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import cardsContext from "../contexts/CardsContext";

export default function GamePage() {
  const { id } = useParams();
  console.log(id);
  const [visibility, setVisibility] = useState(false);
  const [winner, setWinner] = useState(false);
  const context = useContext(cardsContext);
  let { cards, time1, time2, setTime1, setTime2 } = context;
  const navigate = useNavigate();

  function setScore(gotRight) {
    if (gotRight === 1) {
      setTime1(time1+1);
    }

    if (gotRight === 2) {
      setTime2(time2+1);
    }


    if (id < cards.length) {
      navigate(`/jogar/${parseInt(id) + 1}`);
      setVisibility(false);
    } else {
      setWinner(true);
    }
  }

  function showWinner() {
    if (time1 > time2) {
      alert("Time 1 ganhou!");
    }
    if (time1 < time2) {
      alert("Time 2 ganhou!");
    }
    if (time1 === time2) {
      alert("Empate!!!");
    }
  }

  return (
    <Container>
      <header>PERGUNTE AO DEVINHO</header>

      {!visibility ? (
        <>
          <p>{cards[id - 1].question}</p>{" "}
          <button onClick={() => setVisibility(true)}>RESPOSTA</button>
        </>
      ) : (
        <>
          <p>{cards[id - 1].answer}</p>
          <div>
            <button className="time1" onClick={() => setScore(1)}>TIME 1 ACERTOU</button>
            <button className="time2" onClick={() => setScore(0)}>NINGUÉM ACERTOU</button>
            <button className="time3" onClick={() => setScore(2)}>TIME 2 ACERTOU</button>
          </div>
          {winner ? <button className="winner" onClick={() => showWinner()}>VEJA O GANHADOR</button> : <></>}
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  border: 10px solid #323424;
  height: 100vh;
  font-family: "Raleway", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3d90d9;

  header {
    margin: 40px 0 20px 0;
    border-radius: 5px;
    width: 250px;
    height: 80px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    font-family: "Press Start 2P";
    background-color: white;
    box-shadow: 5px 5px 5px black;
  }

  p {
    width: 90%;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 80px;
  }

  .winner {
    margin-top: 40px;
  }

  button {
    background-color: #98d2fa;
    border: none;
    border-radius: 5px;
    height: 30px;
    font-weight: bold;
    color: #000000;
    box-shadow: 5px 5px 5px #323424;
  }

  div {
    display: flex;
    justify-content: space-around;

    button {
      width: 30%;
      border-radius: 5px;
      border: none;
      box-shadow: 5px 10px 15px #323424;
      height: 40px;
    }

    .time1, .time3 {
      background-color: #5DBF17;
    }

    .time2 {
      background-color: #F29F05;
    }
  }
`;
