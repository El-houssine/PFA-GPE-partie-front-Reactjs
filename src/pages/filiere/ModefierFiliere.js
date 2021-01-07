import React, { Component } from "react";
import { editFiliere, getFiliere  } from "../../service/filiere";

class ShowFiliere extends Component {
  constructor(props) {
    super(props);
    this.state = {
      libelle:""
    };
  }

 
  async componentDidMount() {
    const filiere = await getFiliere(this.props.match.params.id);
    this.setState({...filiere });
  }
 
  onLibelleChange = (e) => {
    this.setState({ libelle: e.target.value });
  };
  updateFiliere=async (e) =>{
    e.preventDefault();
    const filiere = this.state;
    await editFiliere(this.props.match.params.id,filiere);
    //this.props.history.push("etudiant/liste");
}
  render() {
 
    return (
      <form class="needs-validation" novalidate onSubmit={this.updateFiliere}>
        <div class="container">
          <div class="form-row">
            <div class="col-md-5 mb-3">
              <label for="validationCustom01">Libelle :</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                placeholder="Matiere"
                value={this.state.libelle}
                onChange={this.onLibelleChange}
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>

          <div class="form-group"></div>

          <button class="btn btn-success" type="submit">
            Modefier
          </button>

          <br></br>
          <br></br>
          <br></br>
        </div>
      </form>
    );
  }
}
export default ShowFiliere;
