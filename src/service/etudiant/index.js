import API from "../../config/axios";
import APIModifier from "../../config/axiosModifier";
import {ETUDIANT_ENDPOINT,ETUDIANT_ENDPOINT_DELETE,ETUDIANT_ENDPOINT_GET,ETUDIANT_ENDPOINT_EDIT} from "../endpoints";

export const getEtudiants = () => API.get(ETUDIANT_ENDPOINT)
    .then(response => response.data["hydra:member"])
    .catch(response => response);

export const postEtudiant = (etudiant) => API.post(ETUDIANT_ENDPOINT, etudiant) 
    .then(response =>{console.log(response.data) })
    .catch(response =>{console.log(response)} );

export const deleteEtudiant = (id) => API.delete(ETUDIANT_ENDPOINT_DELETE + "/" + id)
    .then(response => response.data)
    .catch(response => response);  
export const getEtudiant = (id) => API.get(ETUDIANT_ENDPOINT_GET + "/" + id)
    .then(response => response.data)
    .catch(response => response); 

    export const editEtudiant = (id,etudiant) =>APIModifier.patch(ETUDIANT_ENDPOINT_EDIT + "/" + id,etudiant)
    .then(response => response.data)
    .catch(response => response); 


    