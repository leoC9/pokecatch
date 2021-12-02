import { useEffect, useState } from "react";

import * as S from "./styles";
import ash from "../../Assets/images/ashFront.png";
import Tooltip from "../../Components/Tooltip";
import Modal from "../../Components/Modal";
import Sidebar from "../../Components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getWildPokemon } from "../../Stores/pokemonActions";

const PokeMap = () => {
  const [ashActive, setAshActive] = useState(false);
  const [modalProps, setModalProps] = useState({
    active: false,
    type: "capture",
  });
  const [slotFull, setSlotFull] = useState(false);

  const dispatch = useDispatch();
  const { catchedPokemons } = useSelector(({ pokemon }: any) => pokemon);

  async function searchPokémon() {
    if (catchedPokemons.length === 6) {
      return;
    }
    setAshActive(true);
    dispatch(await getWildPokemon());
    setTimeout(() => {
      setModalProps({ type: "capture", active: true });
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
      <S.Ash
        cursorDisabled={catchedPokemons.length === 6}
        onClick={searchPokémon}
        src={ash}
        alt="ash"
      />
      {catchedPokemons.length === 6 ? (
        <Tooltip type="error" />
      ) : (
        <Tooltip type="search" />
      )}
    </>
  );

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <>
      <S.Background>
        <Sidebar setSlotFull={setSlotFull} setModalProps={setModalProps} />
        <S.CharacterArea animationStatic={ashActive || slotFull ? true : false}>
          {ashSpites}
        </S.CharacterArea>
      </S.Background>
      <Modal modalProps={modalProps} setModalProps={setModalProps} />
    </>
  );
};

export default PokeMap;
