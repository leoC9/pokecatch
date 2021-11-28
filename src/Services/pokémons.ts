import api from "./api";

export function getRandomPokemon() {
  return new Promise(async (resolve, reject) => {
    try {
      const id = Math.floor(Math.random() * (807 - 1 + 1) + 1);
      const response = await api.get(`pokemon/${id}`);

      return resolve(response.data);
    } catch (error) {
      console.log(error);
      return reject(error);
    }
  });
}
