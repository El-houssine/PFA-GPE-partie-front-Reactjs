import React, { Component } from "react";
import { getEtudiants,deleteEtudiant } from "../../service/etudiant";
class ListeEtudiant extends Component{
  constructor(){
    super()
    this.state={
      etudiants:[]
    }
  }
  listeEtudiants= async () => {
    const etudiants = await getEtudiants();
    this.setState({etudiants})
  }
  async componentDidMount() {
      await this.listeEtudiants();
}
ondeleteEtudiant = async (id) => {
 await deleteEtudiant(id);
    this.listeEtudiants();
  this.props.history.push("/etudiant/liste");
}
 onSelectEtudiant = (id) => {
  this.props.history.push("/etudiant/detail/" + id);
}
    render(){
      const etudiants=this.state.etudiants
        return(
          
            <div className="container">
            
              <table className="table table-sm table-dark">      
                  <thead>
                    <tr>
                      <th scope="col">#id</th>
                      <th scope="col">Nom</th>
                      <th scope="col">Prenom</th>
                      <th scope="col">CIN</th>
                      <th scope="col">Diplome</th>
                      <th scope="col">Ville</th>
                      <th scope="col">Date Naissance</th>
                      <th scope="col">Adress</th>
                      <th scope="col">Telephone</th>
                      <th scope="col">Email</th>
                      <th scope="col">Password</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      etudiants.map(etudiant => {
                     return <tr>
                      <th scope="row" key={etudiant.id}>{etudiant.id}</th>
                      <td>{etudiant.nom}</td>
                      <td>{etudiant.prenom}</td>
                      <td>{etudiant.cin}</td>
                      <td>{etudiant.diplome}</td>
                      <td>{etudiant.ville}</td>
                      <td>{etudiant.dateNaissance}</td>
                      <td>{etudiant.adress}</td>
                      <td>{etudiant.telephone}</td>
                      <td>{etudiant.email}</td>
                      <td>{etudiant.password}</td>
                      <td> <button type="button" onClick={()=>this.onSelectEtudiant(etudiant.id)} 
                      className="btn btn-danger">Modifier</button> </td>
                      <td> <button type="button" onClick={()=>this.ondeleteEtudiant(etudiant.id)} 
                      className="btn btn-danger">supprimer</button> </td>
                      </tr>})
                    }
                  
                   
                  </tbody>
                </table>
            </div>
            
        );
    }
}
export default ListeEtudiant