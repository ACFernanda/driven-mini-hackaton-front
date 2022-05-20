import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function MainPage({ setCards }) {
  const navigate = useNavigate();
  const URL = "https://mini-hackathon2-driven.herokuapp.com/questions";

  function beginGame() {
    const promise = axios.get(URL);
    promise.then((response) => {
      console.log(response.data);
      localStorage.setItem("cards", JSON.stringify(response.data));
      setCards(response.data);
      navigate(`/jogar/1`);
    });
    promise.catch((err) => {
      console.log(err.response);
      alert("Erro! :( Tente novamente.");
    });
  }

  return (
    <Container>
      <header>PERGUNTE AO DEVINHO</header>
      <p>Com duas equipes, quem responder primeiro, ganha.</p>
      <button onClick={beginGame}>JOGAR</button>
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
    width: 362px;
    height: 50px;
    text-align: center;
    margin-bottom: 80px;
  }

  button {
    width: 200px;
    height: 200px;
    font-size: 30px;
    border-radius: 5px;
    background-color: #fafafa;
    font-weight: 700;
    box-shadow: 5px 5px 5px black;
  }
`;
