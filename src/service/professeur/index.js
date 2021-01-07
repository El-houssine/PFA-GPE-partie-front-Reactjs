import API from "../../config/axios";
import APIModifier from "../../config/axiosModifier";
import {
  PROFESSEUR_ENDPOINT,
  PROFESSEUR_ENDPOINT_DELETE,
  PROFESSEUR_ENDPOINT_GET,
  PROFESSEUR_ENDPOINT_EDIT,
} from "../endpoints";

export const getProfesseurs = () =>
  API.get(PROFESSEUR_ENDPOINT)
    .then((response) => response.data["hydra:member"])
    .catch((response) => response);

export const postProfesseur = (professeur) =>
  API.post(PROFESSEUR_ENDPOINT, professeur)
    .then((response) => {
      console.log(response.data);
    })
    .catch((response) => {
      console.log(response);
    });

export const deleteProfesseur = (id) =>
  API.delete(PROFESSEUR_ENDPOINT_DELETE + "/" + id)
    .then((response) => response.data)
    .catch((response) => response);
export const getProfesseur = (id) =>
  API.get(PROFESSEUR_ENDPOINT_GET + "/" + id)
    .then((response) => response.data)
    .catch((response) => response);

export const editProfesseur = (id, professeur) => {
  console.log(professeur);
  APIModifier.patch(PROFESSEUR_ENDPOINT_EDIT + "/" + id, professeur)
    .then((response) => response.data)
    .catch((response) => response);
};
