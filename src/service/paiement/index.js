import API from "../../config/axios";
import {PAIEMENT_ENDPOINT,PAIEMENT_ENDPOINT_DELETE,PAIEMENT_ENDPOINT_GET,PAIEMENT_ENDPOINT_EDIT} from "../endpoints";

export const getPaiements = () => API.get(PAIEMENT_ENDPOINT)
    .then(response => response.data["hydra:member"])
    .catch(response => response);

export const postPaiement = (paiement) => API.post(PAIEMENT_ENDPOINT, paiement) 
    .then(response =>{console.log(response.data) })
    .catch(response =>{console.log(response)} );

export const deletePaiement = (id) => API.delete(PAIEMENT_ENDPOINT_DELETE + "/" + id)
    .then(response => response.data)
    .catch(response => response);  
export const getPaiement = (id) => API.get(PAIEMENT_ENDPOINT_GET + "/" + id)
    .then(response => response.data)
    .catch(response => response); 

    export const editPaiement = (id,paiement) => API.patch(PAIEMENT_ENDPOINT_EDIT + "/" + id,paiement)
    .then(response => response.data)
    .catch(response => response); 


    