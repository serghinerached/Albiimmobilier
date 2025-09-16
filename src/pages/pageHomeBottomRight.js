import {styles} from '../components/ComponentCss';
import {useState,useEffect} from "react";
import { supabase } from '../components/ReadSupabase/supabaseClient';


function DivPageHomeBottomRight({ row }) { 
  if (!row || row.length === 0) {
    return <div>Vide</div>;
  }

  return (
    <div>
      <h3>Resultat :</h3>
      <ul>
        {row.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

}; // end fonction

export default DivPageHomeBottomRight;
