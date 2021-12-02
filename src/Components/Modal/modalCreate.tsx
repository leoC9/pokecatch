import React, { useState } from "react";
import * as S from "./styles";
import newImageIcon from "../../Assets/images/camera.png";
import closeIcon from "../../Assets/images/close.png";
import { useDispatch } from "react-redux";
import { clearPokemon, setCatchedPokemon } from "../../Stores/pokemonActions";
import Button from "../Button";
import Input from "../Input";
import Typography from "../Typography";
import { FieldTypes } from "../GlobalTypes/field";

type modalData = {
  active: boolean;
  type: string;
};

interface ModalProps {
  modalProps: modalData;
  setModalProps: Function;
}

type TypesValues = {
  label: string;
  value: string;
};
type ErrorValues = {
  nome?: string;
  hp?: string;
  peso?: string;
  altura?: string;
  defesa?: string;
  defesa_especial?: string;
  ataque?: string;
  ataque_especial?: string;
  tipo?: string;
  habilidade1?: string;
  habilidade2?: string;
  habilidade3?: string;
  habilidade4?: string;
  image?: boolean;
  velocidade?: string;
};

const ModalCreate = (props: ModalProps) => {
  const dispatch = useDispatch();
  const [types, setTypes] = useState([] as Array<TypesValues>);
  const [errors, setErrors] = useState({} as ErrorValues);
  const [field, setField] = useState({
    hp: "",
    peso: "",
    altura: "",
    defesa: "",
    defesa_especial: "",
    ataque: "",
    ataque_especial: "",
  } as FieldTypes);

  let typesValue: Array<object> = [];
  let habilidadesValue: Array<string> = [];

  function handleFormChange(e: React.ChangeEvent<HTMLInputElement>) {
    setField({
      ...field,
      [e.target.name]: e.target.value,
    });
  }

  function fieldValidation() {
    let objectError = {};
    habilidadesValue = [
      field.habilidade1,
      field.habilidade2,
      field.habilidade3,
      field.habilidade4,
    ];
    habilidadesValue = habilidadesValue.filter((i) => (i ? i : null));

    if (!field.nome) {
      objectError = { nome: "Por favor preencha este campo" };
    }
    if (!field.hp) {
      objectError = { ...objectError, hp: "Por favor preencha este campo" };
    }
    if (!field.peso) {
      objectError = { ...objectError, peso: "Por favor preencha este campo" };
    }
    if (!field.altura) {
      objectError = { ...objectError, altura: "Por favor preencha este campo" };
    }

    if (types.length < 1) {
      objectError = { ...objectError, tipo: "Por favor preencha este campo" };
    }
    if (habilidadesValue.length < 2) {
      if (!field.habilidade1) {
        objectError = {
          ...objectError,
          habilidade1: "Por favor preencha este campo",
        };
      }
      if (!field.habilidade2) {
        objectError = {
          ...objectError,
          habilidade2: "Por favor preencha este campo",
        };
      }
      if (!field.habilidade3) {
        objectError = {
          ...objectError,
          habilidade3: "Por favor preencha este campo",
        };
      }
      if (!field.habilidade4) {
        objectError = {
          ...objectError,
          habilidade4: "Por favor preencha este campo",
        };
      }
    }
    if (!field.defesa) {
      objectError = { ...objectError, defesa: "Por favor preencha este campo" };
    }
    if (!field.ataque) {
      objectError = { ...objectError, ataque: "Por favor preencha este campo" };
    }
    if (!field.defesa_especial) {
      objectError = {
        ...objectError,
        defesa_especial: "Por favor preencha este campo",
      };
    }
    if (!field.ataque_especial) {
      objectError = {
        ...objectError,
        ataque_especial: "Por favor preencha este campo",
      };
    }
    if (!field.velocidade) {
      objectError = {
        ...objectError,
        velocidade: "Por favor preencha este campo",
      };
    }
    if (!field.image) {
      objectError = {
        ...objectError,
        image: true,
      };
    }

    if (Object.keys(objectError).length > 0) {
      setErrors(objectError);

      throw new Error("Há campo(s) inválidos, verifique e tente novamente");
    }
  }

  async function handleSubmit() {
    fieldValidation();
    let newHabilidadesValue = [];

    for (let type = 0; type < types.length; type++) {
      const item = types[type];
      typesValue.push({ type: { name: item.value } });
    }
    for (let hab = 0; hab < habilidadesValue.length; hab++) {
      const item = habilidadesValue[hab];
      newHabilidadesValue.push({ ability: { name: item } });
    }

    const pokemon = {
      name: field?.nome,
      stats: [
        {
          base_stat: field?.hp,
          stat: { name: "hp" },
        },
        {
          base_stat: field?.ataque,
          stat: { name: "attack" },
        },
        {
          base_stat: field?.defesa,
          stat: { name: "defense" },
        },
        {
          base_stat: field?.ataque_especial,
          stat: { name: "special-attack" },
        },
        {
          base_stat: field?.defesa_especial,
          stat: { name: "special-defense" },
        },
        {
          base_stat: field?.velocidade,
          stat: { name: "speed" },
        },
      ],
      height: field?.altura,
      weight: field?.peso,
      abilities: newHabilidadesValue,
      sprites: { front_default: field?.image },
      types: typesValue,
    };
    dispatch(setCatchedPokemon(pokemon));
    props.setModalProps({ ...props.modalProps, active: false });
  }

  return (
    <S.Background>
      <S.Modal>
        <S.ModalArea>
          <S.ModalHeader>
            <S.ImageArea>
              {field.image ? (
                <S.Pokemon src={field.image} />
              ) : (
                <>
                  <S.Camera src={newImageIcon} />
                  <Button
                    setField={setField}
                    field={field}
                    type="addButton"
                    modalButton={true}
                  />
                </>
              )}
            </S.ImageArea>
            <S.CloseButton
              onClick={() => {
                props.setModalProps({ ...props.modalProps, active: false });
                dispatch(clearPokemon());
              }}
            >
              <img src={closeIcon} alt="close" />
            </S.CloseButton>
          </S.ModalHeader>
          <S.ModalContent>
            <S.ContentData>
              <Input
                label="Nome"
                name="nome"
                placeholder="Nome"
                value={field?.nome}
                onChange={handleFormChange}
                onClick={() => setErrors({ ...errors, nome: "" })}
                type="default"
                errorMessage={errors.nome}
              />
              <Input
                label="HP"
                name="hp"
                value={field.hp}
                onChange={handleFormChange}
                placeholder="HP"
                type="number"
                onClick={() => setErrors({ ...errors, hp: "" })}
                field={field}
                setField={setField}
                errorMessage={errors.hp}
              />
              <Input
                label="Peso"
                name="peso"
                placeholder="Peso"
                value={field.peso}
                measure="Kg"
                onChange={handleFormChange}
                onClick={() => setErrors({ ...errors, peso: "" })}
                type="number"
                field={field}
                setField={setField}
                errorMessage={errors.peso}
              />
              <Input
                label="Altura"
                placeholder="Altura"
                name="altura"
                value={field.altura}
                onChange={handleFormChange}
                onClick={() => setErrors({ ...errors, altura: "" })}
                field={field}
                setField={setField}
                measure="Cm"
                errorMessage={errors.altura}
                type="number"
              />
              <S.DividerArea>
                <S.Divider />
                <Typography type="subtitle">TIPO</Typography>
                <S.Divider />
              </S.DividerArea>
              <Input
                setField={setTypes}
                name="types"
                type="multiSelect"
                errorMessage={errors.tipo}
                onClick={() => setErrors({ ...errors, tipo: "" })}
              />
              <S.DividerArea>
                <S.Divider hrWidth="30%" />
                <Typography type="subtitle">HABILIDADES</Typography>
                <S.Divider hrWidth="30%" />
              </S.DividerArea>
              <Input
                type="default"
                name="habilidade1"
                onClick={() => setErrors({ ...errors, habilidade1: "" })}
                errorMessage={errors.habilidade1}
                value={field.habilidade1}
                onChange={handleFormChange}
                placeholder="Habilidade 1"
              />
              <Input
                type="default"
                name="habilidade2"
                errorMessage={errors.habilidade2}
                value={field.habilidade2}
                onChange={handleFormChange}
                onClick={() => setErrors({ ...errors, habilidade2: "" })}
                placeholder="Habilidade 2"
              />
              <Input
                type="default"
                name="habilidade3"
                value={field.habilidade3}
                errorMessage={errors.habilidade3}
                onClick={() => setErrors({ ...errors, habilidade3: "" })}
                onChange={handleFormChange}
                placeholder="Habilidade 3"
              />
              <Input
                type="default"
                name="habilidade4"
                value={field.habilidade4}
                errorMessage={errors.habilidade4}
                onChange={handleFormChange}
                onClick={() => setErrors({ ...errors, habilidade4: "" })}
                placeholder="Habilidade 4"
              />
              <S.DividerArea>
                <S.Divider hrWidth="30%" />
                <Typography type="subtitle">ESTATÍSTICAS</Typography>
                <S.Divider hrWidth="30%" />
              </S.DividerArea>
              <Input
                label="defesa"
                name="defesa"
                placeholder="00"
                onClick={() => setErrors({ ...errors, defesa: "" })}
                value={field.defesa}
                errorMessage={errors.defesa}
                type="number"
                onChange={handleFormChange}
                field={field}
                setField={setField}
              />
              <Input
                label="ataque"
                name="ataque"
                value={field.ataque}
                errorMessage={errors.ataque}
                onClick={() => setErrors({ ...errors, ataque: "" })}
                placeholder="00"
                type="number"
                onChange={handleFormChange}
                field={field}
                setField={setField}
              />
              <Input
                label="defesa especial"
                value={field.defesa_especial}
                name="defesa_especial"
                onClick={() => setErrors({ ...errors, defesa_especial: "" })}
                errorMessage={errors.defesa_especial}
                placeholder="00"
                type="number"
                onChange={handleFormChange}
                field={field}
                setField={setField}
              />
              <Input
                label="ataque especial"
                name="ataque_especial"
                placeholder="00"
                value={field.ataque_especial}
                onClick={() => setErrors({ ...errors, ataque_especial: "" })}
                errorMessage={errors.ataque_especial}
                type="number"
                onChange={handleFormChange}
                field={field}
                setField={setField}
              />
              <Input
                label="velocidade"
                name="velocidade"
                placeholder="00"
                value={field.velocidade}
                onClick={() => setErrors({ ...errors, velocidade: "" })}
                errorMessage={errors.velocidade}
                type="number"
                onChange={handleFormChange}
                field={field}
                setField={setField}
              />
              <Button onClick={handleSubmit} width={22.1}>
                Criar Pokemon
              </Button>
            </S.ContentData>
          </S.ModalContent>
        </S.ModalArea>
      </S.Modal>
    </S.Background>
  );
};

export default ModalCreate;
