import React, { Component } from "react";
import { deletePaiement, getPaiements,postPaiement} from "../../service/paiement";
import { getEtudiants} from "../../service/etudiant";

class FormPaiement extends Component {
  constructor(props){
    super(props)
  
  this.state ={
    etudiants:[],
      montant:'',
      date:'',
      mode:'',
      idStudent:'',
      paiements:[]
   }
  }
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
 
  ajouterPaiement = async (e) => {
    e.preventDefault();
    const {montant,date,mode,idStudent}=this.state;
    await postPaiement({montant,date,mode,idStudent});
    
  };
  listePaiements=async () =>{
    const paiements=await getPaiements();
    this.setState({paiements})
  }
  ondeletePaiement = async (id) => {
    await deletePaiement(id);
       this.listePaiements();
     this.props.history.push("/paiement");
   }
   onSelectPaiement = (id) => {
    this.props.history.push("/paiement/detail/" + id);
  }
   async componentDidMount(){
    const etudiants = await getEtudiants()
    this.setState({etudiants})
    this.listePaiements();
   }
  //student=(student) => {return<option value={student.id}> {student.nom}  {student.prenom} </option>} 
  render() {

   const {etudiants}=this.state;
   const {paiements}=this.state;
     console.log(this.state);
  
    return (
        
      <form className="needs-validation" onSubmit={this.ajouterPaiement} >
        <div className="container">
          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="inputState">Etudiant</label>
              <select id="inputState"  onChange={this.onIdEtudiantChange } className="form-control">
                {etudiants.map(etudiant=>{
                  return<option value={etudiant.id} >{etudiant.nom} {etudiant.prenom}</option>
                })} 
                
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationCustom04">Date de fin</label>
              <input
                type="date"
                className="form-control"
                id="validationCustom04"
                placeholder="Date de fin"
                onChange={this.onDateChange}
                required
              />
              <div className="invalid-feedback">Please provide a valid state.</div>
            </div>
            <div className="form-group col-md-4">
              <label for="inputState">Mode</label>
              <select id="inputState" onChange={this.onModeChange } className="form-control">
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
                onChange={this.onMontantChange}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
          </div>

          <div className="form-group"></div>

          <button className="btn btn-success" type="submit">
            Ajouter
          </button>
          <button className="btn btn-primary" type="button">
            Modifier
          </button>

          <button className="btn btn-secondary" type="Reset">
            Suprimer
          </button>

          <br></br>
          <br></br>
          <br></br>
          <div className="col-md-4 mb-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupPrepend">
                  🔎
                </span>
              </div>
             {/*  <input
                type="text"
                className="form-control"
                id="validationCustomUsername"
                placeholder="Recherche"
                aria-describedby="inputGroupPrepend"
                required
              /> */}
              <div className="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <table className="table">
            <thead>

              <tr>
                <th scope="col">Etudiant</th>
                <th scope="col">Date Paiement</th>
                <th scope="col">Montant</th>
                <th scope="col">Mode</th>
                
              </tr>
            </thead>
            <tbody>

              {console.log(paiements) ,paiements.map(paiement=>{
                return<tr key={paiement.id}>
                <th scope="row">{}</th>
              <td>{paiement.date}</td>
              <td>{paiement.montant}</td>
                <td>{paiement.mode}</td>
                <td> <button type="button" onClick={()=>this.onSelectPaiement(paiement.id)} 
                      className="btn btn-danger">Modifier</button> </td>
                      <td> <button type="button" onClick={()=>this.ondeletePaiement(paiement.id)} 
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
export default FormPaiement;
