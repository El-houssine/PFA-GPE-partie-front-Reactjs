import React, { Component } from "react";
import {Link} from "react-router-dom";
import { getPaiement,editPaiement} from "../../service/paiement";
import { editProfesseur, getProfesseur } from "../../service/professeur";


class ShowProfesseur extends Component{
  constructor(props) {
    super(props);
    this.state = {
        nom: "",
      prenom: "",
      cin: "",
      ville:"",
      telephone: "",
      email: ""
    };
}
/* handleChange(e) {
    const value = e.target.value;
    this.setState({
      ...etudiant,
     [e.target.name]: value
    });
  }*/
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
 
updateProfesseur=async (e) =>{
    e.preventDefault();
    const professeur = this.state;
    await editProfesseur(this.props.match.params.id,professeur);
    //this.props.history.push("etudiant/liste");
}
async componentDidMount() {
    const professeur = await getProfesseur(this.props.match.params.id);
    this.setState({...professeur})
}
render(){
  

    return( <div className="container">
            
           <Link to="/paiement">
             <button className="btn btn-secondary btn-lg active"  aria-pressed="true">Retour</button>
           </Link> 
           <form class="needs-validation" onSubmit={this.ajouterProf} novalidate>
        
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label for="validationCustom01">Nom :</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                placeholder="Nom"
                value={this.state.nom}
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
                value={this.state.prenom}
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
                value={this.state.cin}
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
                  value={this.state.email}
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
                value={this.state.telephone}
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
                placeholder="ville"
                value={this.state.ville}
                onChange={this.onVilleChange}
                required
              />
              <div class="invalid-feedback">Please provide a valid state.</div>
            </div>
            
          </div>
    
          <button className="btn btn-success" type="submit">
            Modefier
          </button>
        </form>
        
        
        </div>);
}

}

export default ShowProfesseur