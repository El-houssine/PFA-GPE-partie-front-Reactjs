import React, { Component } from "react";

class FormPrj extends Component {
  state ={
    Projet:{
     Libelle :'',
     encadrant:'' ,
     typePrj:'',
     state:'',
     datedebut:'',
     datefin:''
    }
   }
  render() {
    return (
      <form class="needs-validation" novalidate>
        <div class="container">
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label for="validationCustom01">Libelle :</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                placeholder="Libelle"
                value="Libelle"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationCustom02">Encadrant :</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                placeholder="Encadrant"
                value="Encadrant"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationCustom05">Type de Projet :</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom05"
                placeholder="Type de Projet"
                required
              />
              <div class="invalid-feedback">Please provide a valid zip.</div>
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationCustom04">Date de Naissance</label>
              <input
                type="date"
                class="form-control"
                id="validationCustom04"
                placeholder="Date de Naissance"
                required
              />
              <div class="invalid-feedback">Please provide a valid state.</div>
            </div>

            <div class="col-md-6 mb-3">
              <label for="validationCustom04">Date de Naissance</label>
              <input
                type="date"
                class="form-control"
                id="validationCustom04"
                placeholder="Date de Naissance"
                required
              />
              <div class="invalid-feedback">Please provide a valid state.</div>
            </div>
          </div>
          <div class="form-group"></div>

          <button class="btn btn-success" type="submit">
            Ajouter
          </button>
          <button class="btn btn-primary" type="submit">
            Modifier
          </button>

          <button class="btn btn-secondary" type="Reset">
            Suprimer
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
                required
              />
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nom</th>
                <th scope="col">Prenom</th>
                <th scope="col">Email</th>
                <th scope="col">Telephone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    );
  }
}
export default FormPrj;
