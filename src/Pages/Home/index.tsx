import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router";
import Logo from "../../Assets/images/pokemonLogo.png";
import Button from "../../Components/Button";
import Typography from "../../Components/Typography";

const Home = () => {
  const navigate = useNavigate();
  return (
    <S.Background>
      <img src={Logo} alt="Logo" />
      <Button
        onClick={() => {
          navigate("/map");
        }}
      >
        <Typography color="100" type="title">
          START
        </Typography>
      </Button>
    </S.Background>
  );
};

export default Home;
