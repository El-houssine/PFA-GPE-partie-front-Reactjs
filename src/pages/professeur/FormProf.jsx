import React, { Component } from "react";
import { deleteProfesseur, getProfesseurs,postProfesseur} from "../../service/professeur";
import "./PROFSTYLE.css";

class FormProf extends Component {
  state = {
    professeurs: [],
      nom: "",
      prenom: "",
      cin: "",
      ville:"",
      telephone: "",
      email: ""
  };
  onNomChange=(e)=>{
    this.setState({...this.state,nom: e.target.value})
  }
  onPrenomChange=(e)=>{
    this.setState({...this.state,prenom: e.target.value})
  }
  onEmailChange=(e)=>{
    this.setState({...this.state,email: e.target.value})
  }
  onVilleChange=(e)=>{
    this.setState({...this.state, ville: e.target.value})
  }
  onCinChange=(e)=>{
    this.setState({...this.state, cin: e.target.value})
  }
  onTelChange=(e)=>{
    this.setState({...this.state,telephone: e.target.value})
  }
 
  ajouterProf = async (e) => {
    e.preventDefault();
    const {nom,prenom,cin,ville,telephone,email}=this.state;
    await postProfesseur({nom,prenom,cin,ville,telephone,email});
    this.listeProfs();
    
  };
  listeProfs=async () =>{
    const professeurs=await getProfesseurs();
    this.setState({professeurs})
  }
  ondeleteProf = async (id) => {
    await deleteProfesseur(id);
       this.listeProfs();
     //this.props.history.push("/paiement");
   }
   onSelectProf = (id) => {
    this.props.history.push("/professeur/detail/" + id);
  }
   async componentDidMount(){
    
    this.listeProfs();
   }
  render() {
    const {professeurs}=this.state;
    return (
      <form class="needs-validation" onSubmit={this.ajouterProf} novalidate>
        <div class="container">
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label for="validationCustom01">Nom :</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                placeholder="Nom"
                onChange={this.onNomChange}
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationCustom02">Prenom :</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                placeholder="Presnom"
                onChange={this.onPrenomChange}
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationCustom05">CIN :</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom03"
                placeholder="CIN"
                onChange={this.onCinChange}
                required
              />
              <div class="invalid-feedback">Please provide a valid zip.</div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationCustom04">Email</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroupPrepend">
                    @
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustomUsername"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  onChange={this.onEmailChange}
                  required
                />
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationCustom05">Telephone</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom05"
                placeholder="Telephone"
                onChange={this.onTelChange}
                required
              />
              <div class="invalid-feedback">Please provide a valid zip.</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationCustom06">Ville</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom06"
                placeholder="Lieu de Naissance"
                onChange={this.onVilleChange}
                required
              />
              <div class="invalid-feedback">Please provide a valid state.</div>
            </div>
            
          </div>
          
          <button class="btn btn-success" type="submit">
            Ajouter
          </button>
          <button class="btn btn-secondary" type="Reset">
            Clear
          </button>
          <br></br>
          <br></br>
          <br></br>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nom</th>
                <th scope="col">Prenom</th>
                <th scope="col">CIN</th>
                <th scope="col">Ville</th>
                <th scope="col">Telephone</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
            {professeurs.map(professeur=>{
                return<tr key={professeur.id}>
                <th scope="row">{}</th>
              <td>{professeur.nom}</td>
              <td>{professeur.prenom}</td>
                <td>{professeur.cin}</td>
                <td>{professeur.ville}</td>
                <td>{professeur.tel}</td>
                <td>{professeur.email}</td>
                <td> <button type="button" onClick={()=>this.onSelectProf(professeur.id)} 
                      className="btn btn-danger">Modifier</button> </td>
                      <td> <button type="button" onClick={()=>this.ondeleteProf(professeur.id)} 
                      className="btn btn-danger">supprimer</button> </td>
              </tr>
              })}
              
            </tbody>
          </table>
        </div>
      </form>
    );
  }
}
export default FormProf;
