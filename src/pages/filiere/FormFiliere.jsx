import React, { Component } from "react";
import { getFilieres, deleteFiliere } from "../../service/filiere";
import { postFiliere } from "../../service/filiere";
class FormFiliere extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filieres: [],
      
    };
  }

  ListeFilieres = async () => {
    const filieres = await getFilieres();
    this.setState({ filieres });
  };
  async componentDidMount() {
    await this.ListeFilieres();
  }
  ondeleteFiliere = async (id) => {
    await deleteFiliere(id);
    this.ListeFilieres();
    alert("Filiere " + id + " bien supprimer");
  };

  onLibelleChange = (e) => {
    this.setState({ libelle: e.target.value });
  };

  ajouterFiliere = async (e) => {
    e.preventDefault();
    const { libelle } = this.state;
    await postFiliere({libelle});
    this.ListeFilieres();
    alert("Filiere " + this.state.libelle + " bien Ajouter");
  };
  onSelectFiliere = (id) => {
    this.props.history.push("/filiere/detail/" + id);
  }
  render() {
    const filieres = this.state.filieres;
    return (
      <form class="needs-validation" novalidate onSubmit={this.ajouterFiliere}>
        <div class="container">
          <div class="form-row">
            <div class="col-md-5 mb-3">
              <label for="validationCustom01">Libelle :</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                placeholder="Matiere"
                onChange={this.onLibelleChange}
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>

          <div class="form-group"></div>

          <button class="btn btn-success" type="submit">
            Ajouter
          </button>

          <br></br>
          <br></br>
          <br></br>
          <div class="col-md-4 mb-3">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend">
                  🔎
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                id="validationCustomUsername"
                placeholder="Recherche"
                aria-describedby="inputGroupPrepend"
              />
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">id</th>
                <th scope="col">Filiere</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filieres.map((filiere) => {
                console.log(filieres);
                return (
                  <tr>
                    <th scope="row" key={filiere.id}></th>
                    <td>{filiere.id}</td>
                    <td>{filiere.libelle}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => this.onSelectFiliere(filiere.id)}
                        className="btn btn-outline-primary btn-sm"
                      >
                        Modifier
                      </button>
                      <button
                        type="button"
                        onClick={() => this.ondeleteFiliere(filiere.id)}
                        className="btn btn-outline-danger btn-sm"
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </form>
    );
  }
}
export default FormFiliere;
