import { useState } from "react";
import * as S from "./styles";
import ash from "../../Assets/images/ashFront.png";
import Tooltip from "../../Components/Tooltip";
import Modal from "../../Components/Modal";

const PokeMap = () => {
  const [ashActive, setAshActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  function searchPokémon() {
    setAshActive(true);
    setTimeout(() => {
      setModalActive(true);
      setAshActive(false);
    }, 2500);
  }

  const ashSpites = ashActive ? (
    <>
      <S.AshWalking onClick={() => setAshActive(false)} />
      <Tooltip type="searching" />
    </>
  ) : (
    <>
      <S.Ash onClick={searchPokémon} src={ash} alt="ash" />
      <Tooltip type="search" />
    </>
  );

  return (
    <>
      <S.Background>
        <S.CharacterArea animationStatic={ashActive ? true : false}>
          {ashSpites}
        </S.CharacterArea>
      </S.Background>
      <Modal modalActive={modalActive} setModalActive={setModalActive} />
    </>
  );
};

export default PokeMap;
