import React,{Fragment, Suspense} from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MiniDrawer from './pages/menu/NaveBar';
import Admin from './pages/admin/admin';
import FormEtudiant from './pages/etudiant/formEtudiant';
import {routes} from './routes';
import {isEmpty} from "lodash";
import FormStage from './pages/stage/FormStage';
import FormProf from './pages/professeur/FormProf';
import FormPaiement from './pages/paiement/FormPaiement';
import FormPrj from './pages/projet/FormPrj';
import FormMatiere from './pages/matiere/FormMatiere';
import FormFiliere from './pages/filiere/FormFiliere';
import FormInscription from './espaceEtudiant/inscription/FormInscription';



function App() {
  return (
    <BrowserRouter>
          <div className="App">
            < MiniDrawer/>
            {/* <FormInscription></FormInscription> */}
            <Switch>
              <div className="container">
              <Suspense fallback={<div>Loading...</div>}>
                    {
                        !isEmpty(routes) ? routes.map(r => {
                            return <Route path={r.path} component={r.component} exact={true}/>
                        }) : <Fragment/>
                    }
                    </Suspense></div>
            </Switch>
          </div>
    </BrowserRouter>
  
  );
}

export default App;
