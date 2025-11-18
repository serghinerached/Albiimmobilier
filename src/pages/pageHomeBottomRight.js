import {styles} from '../components/ComponentCss';
import {useState,useEffect} from "react";
import { supabase } from '../components/ReadSupabase/supabaseClient';


function DivPageHomeBottomRight({ row }) { 
  if (!row || row[0] == "filter") {
    return 
    <div></div>;
  }

function formatPrix(valeur) {
  const num = Number(String(valeur).replace(/[^\d.-]/g, ""));
  return isNaN(num) ? "" : `${num.toLocaleString("fr-FR")} €`;
}

  // pour photos dynamiques
  const image = require.context("../photos", false, /\.(png|jpe?g|svg)$/);
  const getImage = (nameImage) => {
    const filename = `${nameImage}`;
    return image.keys().includes(`./${filename}`)
      ? image(`./${filename}`)
      : image("./grey.png"); // fallback
  };


  // pour dpe dynamiques
  const dpe = require.context("../photos/DPE", false, /\.(png|jpe?g|svg)$/);
  const getDpe = (nameDpe) => {
    const filename = `${nameDpe}`;
    return dpe.keys().includes(`./${filename}`)
      ? dpe(`./${filename}`)
      : dpe("./inconnu.png"); // fallback
  };

  // pour dpe dynamiques
  const ges = require.context("../photos/GES", false, /\.(png|jpe?g|svg)$/);
  const getGes = (nameGes) => {
    const filename = `${nameGes}`;
    return ges.keys().includes(`./${filename}`)
      ? ges(`./${filename}`)
      : ges("./inconnu.png"); // fallback
  };

  return (
    <div>
      <h3>ANNONCE N° {row.id}</h3><br></br>

        <table style={{border:"2px solid black",marginBottom:"20px",fill:"black",width:"90%"}} >

          <tr style={{color:"white",backgroundColor:"#D2691E"}}>
            <td style={{padding:"5px",width:"37%"}}>{row.type}</td>
            <td colSpan={3} align='right' style={{paddingRight:"10px"}}>{formatPrix(row.prix)}</td>
          </tr>

          <tr style={{color:"black"}}>

            <td style={{verticalAlign:"top",padding:"10px",textAlign:"left",backgroundColor:"white",wordBreak: "break-word"}} rowspan="4">
              Paru le {new Date(row.created).toLocaleDateString()} <br></br><br></br>
              Superficie : {row.superficie} m2 <br></br>
              Pièces: {row.pieces} <br></br>
              chauffage : {row.chauffage} <br></br><br></br>
              Plus d'infos : {row.infos} <br></br><br></br>

              Contacts : {row.pseudo} <br></br>
            </td>
          
            <td style={{
              backgroundImage: `url(${getImage(row.id + "-1.png")})`,
              backgroundSize: "cover",      // ou "contain" selon l'effet voulu
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center", 
              width: "100px",               // largeur de la cellule
              height: "100px"}}>
            </td>

            <td style={{
              backgroundImage: `url(${getImage(row.id + "-2.png")})`,
              backgroundSize: "cover",      // ou "contain" selon l'effet voulu
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center", 
              width: "100px",               // largeur de la cellule
              height: "100px"}}>
            </td>
            
          </tr>

          <tr style={{color:"black"}}>
            
            <td style={{
              backgroundImage: `url(${getImage(row.id + "-3.png")})`,
              backgroundSize: "cover",      // ou "contain" selon l'effet voulu
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center", 
              width: "100px",               // largeur de la cellule
              height: "100px"}}>
            </td>

            <td style={{
              backgroundImage: `url(${getImage(row.id + "-4.png")})`,
              backgroundSize: "cover",      // ou "contain" selon l'effet voulu
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center", 
              width: "100px",               // largeur de la cellule
              height: "100px"}}>
            </td>
            
          </tr>

          <tr style={{color:"black"}}>
            
            <td style={{
              backgroundImage: `url(${getImage(row.id + "-5.png")})`,
              backgroundSize: "cover",      // ou "contain" selon l'effet voulu
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center", 
              width: "100px",               // largeur de la cellule
              height: "100px"}}>
            </td>

            <td style={{
              backgroundImage: `url(${getImage(row.id + "-6.png")})`,
              backgroundSize: "cover",      // ou "contain" selon l'effet voulu
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center", 
              width: "100px",               // largeur de la cellule
              height: "100px"}}>
            </td>
            
          </tr>

          <tr >
            
            <td style={{ padding:5,
              backgroundColor:"white",
              backgroundImage: `url(${getDpe("DPE-" + row.dpe + ".png")})`,
              backgroundSize: "contain",      // ou "contain" selon l'effet voulu
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center", 
              width: "100px",               // largeur de la cellule
              height: "150px"}}>
            </td>

            <td style={{
              backgroundColor:"white",
              backgroundImage: `url(${getGes("GES-" + row.ges + ".png")})`,
              backgroundSize: "contain",      // ou "contain" selon l'effet voulu
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center", 
              width: "100px",               // largeur de la cellule
              height: "150px"}}>
            </td>
            
          </tr>
              
        </table>
      
    </div>
  );

}; // end fonction

export default DivPageHomeBottomRight;
