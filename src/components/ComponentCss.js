import { hover } from '@testing-library/user-event/dist/hover';
import albi from '../photos/albi.jpg'; // chemin depuis src

export const styles = {

  divHomeGeneral:{
    height: "100vh",
    width: "99vw",
    border: "2px solid red",
    backgroundImage: `url(${albi})`,
    backgroundSize: "cover",   // couvre toute la div
    backgroundPosition: "top", // centre l'image
    backgroundRepeat: "no-repeat",// pas de répétition
    overflow: "hidden",  
  },

  divHomeHaut: {
    padding: "10px",
    border: "1px solid black",
  },

  divHomeBottomLeft: {
    flex: "1 10%",
    color: "white",
    padding: "20px",
    textAlign: "center",
    overflow: "hidden"
  },

  divHomeBasCentre: {
    color: "white",
    paddingLeft: "20px",
    paddingBottom:"10px",
    paddingTop:"10px",
    textAlign: "center",
    paddingTop: "20px",
    flex: "2 20%",
    display:"flex", 
    flexDirection: "column",
    minHeight: 0, 
    overflowY: "auto",      // 👉 permet le scroll vertical
    overflowX: "hidden",    // évite le scroll horizontal
    height: "100%",     
  },

  divHomeBasRight: {
    flex: "1 40%",
    color: "white",
    padding: "20px",
    textAlign: "center",
    overflow: "hidden" 
  },

  trTableRecherche: {
    padding:"6px",
    borderCollapse:"collapse",
    columnSpan:"all",
    textAlign:"left",
    color:"black",
    fontWeight:"bold"
  },

  thFormat: {
    backgroundColor: 'green',
    color:'white',
    fontweight:'bold',
    textAlign:'center'
    },
  div1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:'110px',
  },
  div2: {
    paddingTop:'5px'
  },
  tableUser: {
    width:'30%',
  },
  tableRequestIncident: {
    width:'90%',
    marginLeft:'50px'
  },
  tableTracker: {
    width:'90%',
    marginLeft:'80px'
  },
  btnImport:{
    width:'80px',
    backgroundColor: 'green',
    color:'white',
    fontweight:'bold',
    border:'3px solid black',
    display: 'inline-block',
    marginRight:'5px'
  },
  btnUpdate:{
    width:'80px',
    backgroundColor: 'green',
    color:'white',
    fontweight:'bold',
    border:'3px solid black',
    display: 'inline-block',
    marginLeft:'10px'
  },

  btnOk: {
    width:'90px',
    backgroundColor: 'green',
    color:'white',
    fontweight:'bold',
    border:'3px solid black',
    display: 'inline-block',
  },

   btnCreerAnnonce: {
    width:'90px',
    backgroundColor: 'green',
    color:'white',
    fontweight:'bold',
    border:'1px solid black',
    display: 'inline-block',
  },

  btnLogin: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
  },

  divImport:{
    marginLeft:'230px',
    marginBottom:'5px',

  },
  title:{
    marginLeft:'250px',
    display: 'inline-block',
    fontweight:'bold',
  },
   title2:{
    marginLeft:'600px',
    marginTop:'10px',
    display: 'inline-block',
    fontweight:'bold',
  },
  title3:{
    marginLeft:'400px',
    marginTop:'10px',
    display: 'inline-block',
    fontweight:'bold',
  },
  p1:{
    marginLeft:'7px',
    display: 'inline-block',
    color:'green',
    fontweight:'bold'
  },
  p2:{
    display: 'inline-block',
    fontweight:'bold'
  },
  tdIncidents:{
    border:'1px solid black',
    padding:5,
  },
  tableIncidents:{
    borderCollapse : 'collapse'
  },
   tdIncidentsCol4:{
    border:'1px solid black',
    padding:5,
    textAlign:"center"
  },
  
  tdIncidentsDatas: {
    textAlign:"center",
    border:"1px solid black",
    backgroundColor:"lightgrey",padding:5
  },
  colMessages: { 
    cursor: "pointer",
    color: "green" 
  },
  td1Messages: {
    border:"1px solid black",
    fontWeight:"bold",
    backgroundColor:"lightgrey",
    padding:"1px",
  },
  td1Messages2: {
    border:"1px solid black",
    fontWeight:"bold",
    backgroundColor:"lightgreen",
    padding:"5px",
  },
  td2Messages: {
    border:"1px solid black",
    padding:"5px",
    whiteSpace: "pre-line"
  },

   navButton: {
    background: "none",
    border: "none",
    fontWeight: "bold",
    color: "black",
    cursor: "pointer",
  },

  tdTabMesAnnonces: {
    padding: "5px",
    textAlign: "center",
    backgroundColor: "white",
  },
 
  btnValiderInscription: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    marginTop: "5px",
  }

  }


export default styles;
