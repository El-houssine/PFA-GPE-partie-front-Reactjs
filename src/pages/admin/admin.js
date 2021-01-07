// import React from 'react';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// //import {getAdmins} from "../../service/Admin/index";



// class Admin extends React.Component{
    
//     constructor(props){
//         super(props);
//         this.state = {
//             Admins: []
//         }
//     }
  
//     async componentDidMount() {
//         const Admins = await getAdmins();
//         await this.setState({Admins})
//     }
//     render(){
       
    
//       const {Admins} = this.state;
//         const classes = { table: {
//           minWidth: 650
//         }
//       }
//         console.log(Admins);
//         return(
//             <TableContainer component={Paper}>
//             <Table style={classes.table} aria-label="simple table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell>ID</TableCell>
//                   <TableCell align="right">NOM</TableCell>
//                   <TableCell align="right">PRENOM</TableCell>
//                   <TableCell align="right">CIN</TableCell>
//                   <TableCell align="right">DATE NAISSANCE</TableCell>
//                   <TableCell align="right">LIEU DE NAISSANCE</TableCell>
//                   <TableCell align="right">ADRESSE</TableCell>
//                   <TableCell align="right">EMAIL</TableCell>
//                   <TableCell align="right">TEL</TableCell>
//                   <TableCell align="right">LOGIN</TableCell>
//                   <TableCell align="right">PASSWORD</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 { Admins && Admins.map(admin => {
//                                 return(
//                   <TableRow key={admin.id}>
//                     <TableCell component="th" scope="row">
//                       {admin.id}
//                     </TableCell>
//                     <TableCell align="right">{admin.nom}</TableCell>
//                     <TableCell align="right">{admin.prenom}</TableCell>
//                     <TableCell align="right">{admin.cin}</TableCell>
//                     <TableCell align="right">{admin.dateNaissance}</TableCell>
//                     <TableCell align="right">{admin.lieuNaissance}</TableCell>
//                     <TableCell align="right">{admin.adresse}</TableCell>
//                     <TableCell align="right">{admin.email}</TableCell>
//                     <TableCell align="right">{admin.telephone}</TableCell>
//                     <TableCell align="right">{admin.login}</TableCell>
//                     <TableCell align="right">{admin.password}</TableCell>
//                   </TableRow>
//                 )})
//                 }
//               </TableBody>
//             </Table>
//           </TableContainer>

//         );
//     }
// }
// export default Admin; 