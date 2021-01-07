import API from "../../config/axios";
import {
  FILIERE_ENDPOINT,
  FILIERE_ENDPOINT_DELETE,
  FILIERE_ENDPOINT_GET,
  FILIERE_ENDPOINT_EDIT,
} from "../endpoints";

export const getFilieres = () =>
  API.get(FILIERE_ENDPOINT)
    .then((response) => response.data["hydra:member"])
    .catch((response) => response);

export const postFiliere = (filiere) =>
  API.post(FILIERE_ENDPOINT, filiere)
    .then((response) => {
      console.log(response.data);
    })
    .catch((response) => {
      console.log(response);
    });
   
  
  export const deleteFiliere = (id) =>
    API.delete(FILIERE_ENDPOINT_DELETE + "/" + id)
      .then((response) => response.data)
      .catch((response) => response);
  export const getFiliere = (id) =>
    API.get(FILIERE_ENDPOINT_GET + "/" + id)
      .then((response) => response.data)
      .catch((response) => response);
  
  export const editFiliere = (id, filiere) => {
    console.log(filiere);
    API.patch(FILIERE_ENDPOINT_EDIT + "/" + id, filiere)
      .then((response) => response.data)
      .catch((response) => response);
  };