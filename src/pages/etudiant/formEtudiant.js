import React, { Component } from "react";
import {Link} from "react-router-dom";
import { postEtudiant } from "../../service/etudiant";


class FormEtudiant extends Component{
  constructor(props) {
    super(props);
    this.state = {
        nom: "",
        prenom: "",
        cin:"",
        diplome: "",
        ville: "",
        dateNaissance:"",
        adress: "",
        telephone: "",
        email:"",
        password:""
    };
}
onNomChange = (e) => {
  this.setState({nom: e.target.value})
};
onPrenomChange = (e) => {
  this.setState({prenom: e.target.value})
};
onCinChange = (e) => {
  this.setState({cin: e.target.value})
};
onDiplomeChange = (e) => {
  this.setState({diplome: e.target.value})
};
onVilleChange = (e) => {
  this.setState({ville: e.target.value})
};
onDateNiassanceChange = (e) => {
  this.setState({dateNaissance: e.target.value})
};
onAdressChange = (e) => {
  this.setState({adress: e.target.value})
};
onTelephoneChange = (e) => {
  this.setState({telephone: e.target.value})
};
onEmailChange = (e) => {
  this.setState({email: e.target.value})
};
onPasswordChange = (e) => {
  this.setState({password: e.target.value})
};
ajouterEtudiant = async (e) => {
  e.preventDefault();
  const {nom, prenom,cin,diplome,ville,dateNaissance,adress,telephone,email,password} = this.state;
  const etudiant = {nom, prenom,cin,diplome,ville,dateNaissance,adress,telephone,email,password};
  await postEtudiant(etudiant);
  this.props.history.push("etudiant/liste");
};

render(){
  
    return(
        <div className="container">
           <Link to="/etudiant/liste">
             <button className="btn btn-secondary btn-lg active"  aria-pressed="true">Liste Etudiant</button>
           </Link> 
            <form onSubmit={this.ajouterEtudiant}>
  <div className="form-row" >
    <div className="col-md-6 mb-3">
      <label for="validationDefault01">Prénom</label>
      <input type="text" className="form-control" id="validationDefault01"  onChange={this.onPrenomChange} required />
    </div>
    <div className="col-md-6 mb-3">
      <label for="validationDefault02">Nom</label>
      <input type="text" className="form-control" id="validationDefault02" onChange={this.onNomChange} required />
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label for="validationDefault01">CIN</label>
      <input type="text" className="form-control" id="validationDefault01"  onChange={this.onCinChange}  required />
    </div>
    <div className="col-md-6 mb-3">
      <label for="validationDefault02">Date de naissance</label>
      <input type="date" className="form-control" id="validationDefault02"  onChange={this.onDateNiassanceChange} required />
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label for="validationDefault03">Ville</label>
      <input type="text" className="form-control" id="validationDefault03"  onChange={this.onVilleChange}required />
    </div>
    <div className="col-md-6 mb-3">
      <label for="validationDefault01">Phone</label>
      <input type="tel" className="form-control" id="validationDefault01"  onChange={this.onTelephoneChange} required />
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label for="validationDefault01">Adress</label>
      <textarea type="textarea" className="form-control" id="validationDefault01"  onChange={this.onAdressChange} required />
    </div>
    <div className="col-md-6 mb-3">
      <label for="validationDefault02">diplome</label>
      <input type="text" className="form-control" id="validationDefault02"  onChange={this.onDiplomeChange} required />
    </div>
  </div>
  <div className="form-row">
  <div className="col-md-6 mb-3">
      <label for="validationDefault02">Email</label>
      <input type="email" className="form-control" id="validationDefault02"  onChange={this.onEmailChange} required />
    </div>
  <div className="col-md-6 mb-3">
  <label for="validationDefault01">Password</label>
      <input type="text" className="form-control" id="validationDefault01"  onChange={this.onPasswordChange} required />
    </div>
    </div>
    
  <button className="btn btn-primary" type="submit" >Ajouter Etudiant</button>
</form>
        </div>
          
    );
}
}
export default FormEtudiant