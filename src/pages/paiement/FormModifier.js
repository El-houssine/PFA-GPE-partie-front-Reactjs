import React, { Component } from "react";
import {Link} from "react-router-dom";
import { getPaiement,editPaiement} from "../../service/paiement";


class ShowPaiement extends Component{
  constructor(props) {
    super(props);
    this.state = {
      
        montant:'',
      date:'',
      mode:'',
      idStudent:'',
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
onMontantChange=(e)=>{
    this.setState({...this.state,montant: e.target.value})
  }
  onDateChange=(e)=>{
    this.setState({...this.state,date: e.target.value})
  }
  onModeChange=(e)=>{
    this.setState({...this.state,mode: e.target.value})
  }
  onIdEtudiantChange=(e)=>{
    this.setState({...this.state, idStudent: e.target.value})
  }
 
updatePaiement=async (e) =>{
    e.preventDefault();
    const paiement = this.state;
    await editPaiement(this.props.match.params.id,paiement);
    //this.props.history.push("etudiant/liste");
}
async componentDidMount() {
    const paiement = await getPaiement(this.props.match.params.id);
    this.setState({...paiement})
}
render(){
  

    return( <div className="container">
            
           <Link to="/paiement">
             <button className="btn btn-secondary btn-lg active"  aria-pressed="true">Retour</button>
           </Link> 
           <form className="needs-validation" onSubmit={this.updatePaiement} >
        
          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="inputState">Etudiant</label>
              <select id="inputState"  onChange={this.onIdEtudiantChange } className="form-control">
               {/*  {etudiants.map(etudiant=>{
                  return<option value={etudiant.id} >{etudiant.nom} {etudiant.prenom}</option>
                })}  */}
                
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationCustom04">Date de fin</label>
              <input
                type="date"
                className="form-control"
                id="validationCustom04"
                placeholder="Date de fin"
                value={this.state.date.split('T')[0]}
                onChange={this.onDateChange}
                required
              />
              <div className="invalid-feedback">Please provide a valid state.</div>
            </div>
            <div className="form-group col-md-4">
              <label for="inputState">Mode</label>
              <select id="inputState" value={this.state.mode} onChange={this.onModeChange } className="form-control">
                <option selected>Choisire un mode</option>
                <option value="Cheque">Cheque</option>
                <option value="espece">espece </option>
                <option value="VISA">VISA </option>
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationCustom01">Montant :</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                placeholder="Montant"
                value={this.state.montant}
                onChange={this.onMontantChange}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
          </div>

          <div className="form-group"></div>

          <button className="btn btn-success" type="submit">
            Modefier
          </button>
        </form>
        </div>
        
        );
}

}

export default ShowPaiement