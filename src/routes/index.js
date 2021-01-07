//import {lazy} from "react";
import FormEtudiant from "../pages/etudiant/formEtudiant";
import ListeEtudiant from "../pages/etudiant/listeEtudiant";
import ShowEtudiant from "../pages/etudiant/showEtudiant";
import FormFiliere from "../pages/filiere/FormFiliere";
import ShowFiliere from "../pages/filiere/ModefierFiliere";
import FormMatiere from "../pages/matiere/FormMatiere";
import ShowPaiement from "../pages/paiement/FormModifier";
import FormPaiement from "../pages/paiement/FormPaiement";
import ShowProfesseur from "../pages/professeur/FormModefier";
import FormProf from "../pages/professeur/FormProf";
import FormPrj from "../pages/projet/FormPrj";
import FormStage from "../pages/stage/FormStage";
//import Login from "../pages/login/Login"
//const Products = lazy(() => import('../pages/etudiant/listeEtudiant'));


export const routes = [
    {path : "/stage", component:FormStage },
    {path : "/projet", component:FormPrj },
    {path : "/matiere", component:FormMatiere },
    {path : "/filiere", component:FormFiliere },
    {path : "/professeur", component:FormProf },
    {path : "/etudiant", component: FormEtudiant},
    {path : "/etudiant/liste", component: ListeEtudiant},
    {path : "/etudiant/detail/:id", component: ShowEtudiant},
    {path : "/paiement", component: FormPaiement},
    {path : "/paiement/detail/:id", component: ShowPaiement},
    {path : "/professeur/detail/:id", component: ShowProfesseur},
    {path : "/filiere/detail/:id", component: ShowFiliere},
    //{path : "/login", component: Login}

    
    
];