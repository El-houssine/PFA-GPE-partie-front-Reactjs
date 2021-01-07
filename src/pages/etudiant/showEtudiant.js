import React, { Component } from "react";
import {Link} from "react-router-dom";
import { getEtudiant,editEtudiant } from "../../service/etudiant";


class ShowEtudiant extends Component{
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
/* handleChange(e) {
    const value = e.target.value;
    this.setState({
      ...etudiant,
     [e.target.name]: value
    });
  }*/
onNomChange = (e) => {
  this.setState({...this.state,nom: e.target.value})
};
onPrenomChange = (e) => {

this.setState( {
    ...this.state,
        prenom : e.target.value
    }
)
};
onCinChange = (e) => {
  this.setState({
    ...this.state,
          cin: e.target.value})
};
onDiplomeChange = (e) => {
  this.setState({...this.state,diplome: e.target.value})
};
onVilleChange = (e) => {
  this.setState({...this.state,ville: e.target.value})
};
onDateNiassanceChange = (e) => {
  this.setState({...this.state,dateNaissance: e.target.value})
};
onAdressChange = (e) => {
  this.setState({...this.state,adress: e.target.value})
};
onTelephoneChange = (e) => {
  this.setState({...this.state,telephone: e.target.value})
};
onEmailChange = (e) => {
  this.setState({...this.state,email: e.target.value})
};
onPasswordChange = (e) => {
  this.setState({...this.state,password: e.target.value})
};
updateEtudiant=async (e) =>{
    e.preventDefault();
    const etudiant = this.state;
    await editEtudiant(this.props.match.params.id,etudiant);
    this.props.history.push("etudiant/liste");
}
async componentDidMount() {
    const etudiant = await getEtudiant(this.props.match.params.id);
    this.setState({...etudiant})
}
render(){
  

    return(
        <div className="container">
            
           <Link to="/etudiant/liste">
             <button className="btn btn-secondary btn-lg active"  aria-pressed="true">Retour</button>
           </Link> 
            <form onSubmit={this.updateEtudiant}>
  <div className="form-row" >
    <div className="col-md-6 mb-3">
      <label for="validationDefault01">Prénom</label>
      <input type="text" className="form-control" id="validationDefault01" value={this.state.prenom} onChange= {(e) => this.onPrenomChange(e)} required />
    </div>
    <div className="col-md-6 mb-3">
      <label for="validationDefault02">Nom</label>
      <input type="text" className="form-control" id="validationDefault02" value={this.state.nom} onChange={(e)=> this.onNomChange(e)} required />
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label for="validationDefault01">CIN</label>
      <input type="text" className="form-control" id="validationDefault01" value={this.state.cin} onChange={(e)=>this.onCinChange(e)}  required />
    </div>
    <div className="col-md-6 mb-3">
      <label for="validationDefault02">Date de naissance</label>
      <input type="date" className="form-control" id="validationDefault02" value={this.state.dateNaissance.split('T')[0]} onChange={(e)=>this.onDateNiassanceChange(e)} required />
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label for="validationDefault03">Ville</label>
      <input type="text" className="form-control" id="validationDefault03" value={this.state.ville} onChange={(e)=>this.onVilleChange(e)}required />
    </div>
    <div className="col-md-6 mb-3">
      <label for="validationDefault01">Phone</label>
      <input type="tel" className="form-control" id="validationDefault01" value={this.state.telephone} onChange={(e)=>this.onTelephoneChange(e)} required />
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label for="validationDefault01">Adress</label>
      <textarea type="textarea" className="form-control" id="validationDefault01" value={this.state.adress} onChange={(e)=>this.onAdressChange(e)} required />
    </div>
    <div className="col-md-6 mb-3">
      <label for="validationDefault02">diplome</label>
      <input type="text" className="form-control" id="validationDefault02" value={this.state.diplome} onChange={(e)=>this.onDiplomeChange(e)} required />
    </div>
  </div>
  <div className="form-row">
  <div className="col-md-6 mb-3">
      <label for="validationDefault02">Email</label>
      <input type="email" className="form-control" id="validationDefault02" value={this.state.email} onChange={(e)=>this.onEmailChange(e)} required />
    </div>
  <div className="col-md-6 mb-3">
  <label for="validationDefault01">Password</label>
      <input type="text" className="form-control" id="validationDefault01" value={this.state.password} onChange={(e)=>this.onPasswordChange(e)} required />
    </div>
    </div>
    
  <button className="btn btn-primary" type="submit" >Modefier Etudiant</button>
</form>
        </div>
          
    );
}

}
export default ShowEtudiant